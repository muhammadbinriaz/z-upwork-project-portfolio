/**
 * Upload local fonts to a private Vercel Blob store and save short URL
 * env vars (fits under Vercel's 64KB total env budget).
 *
 *   npx vercel login && npx vercel link   # once
 *   npm run fonts:push
 */
import { access, readFile, writeFile, unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fontsDir = join(root, "src", "assets", "fonts");
const STORE_NAME = "goleadfinder-fonts";
const STORE_ID = "store_KwMSc4zczubqt7EI";
const targets = "production,preview";

const FONTS = [
  { file: "Canela-Regular.woff2", env: "FONT_CANELA_REGULAR_URL" },
  { file: "sohne-buch.woff2", env: "FONT_SOHNE_BUCH_URL" },
  { file: "sohne-halbfett.woff2", env: "FONT_SOHNE_HALBFETT_URL" },
  { file: "sohne-schmal-dreiviertelfett.woff2", env: "FONT_SOHNE_SCHMAL_URL" },
];

const LEGACY_B64 = [
  "FONT_CANELA_REGULAR_B64",
  "FONT_SOHNE_BUCH_B64",
  "FONT_SOHNE_HALBFETT_B64",
  "FONT_SOHNE_SCHMAL_B64",
];

function run(args, opts = {}) {
  const env = { ...process.env, ...(opts.env || {}) };
  // Avoid OIDC/store mismatch unless we pass both explicitly
  if (!opts.keepOidc) delete env.VERCEL_OIDC_TOKEN;

  const result = spawnSync("npx", ["vercel", ...args], {
    cwd: root,
    encoding: "utf8",
    shell: true,
    maxBuffer: 4 * 1024 * 1024,
    ...opts,
    env,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.error) throw result.error;
  const combined = `${result.stdout || ""}\n${result.stderr || ""}`;
  if (result.status !== 0) {
    const err = new Error(`vercel ${args[0]} ${args[1] || ""} exited ${result.status}`);
    err.status = result.status;
    err.stdout = result.stdout;
    err.stderr = result.stderr;
    err.combined = combined;
    throw err;
  }
  return combined;
}

function parseEnvFile(text) {
  const out = {};
  for (const line of text.split(/\r?\n/)) {
    if (!line || line.startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i < 0) continue;
    let v = line.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    out[line.slice(0, i)] = v;
  }
  return out;
}

async function resolveRwToken() {
  const tmp = join(root, ".env.vercel-fonts.tmp");
  try {
    run([
      "env",
      "pull",
      tmp,
      "--environment",
      "production",
      "--yes",
      "--non-interactive",
    ]);
    const vars = parseEnvFile(await readFile(tmp, "utf8"));
    const token = vars.BLOB_READ_WRITE_TOKEN;
    if (!token) {
      throw new Error(
        "BLOB_READ_WRITE_TOKEN missing after env pull — open the Blob store in Vercel and reconnect it to this project",
      );
    }
    return token;
  } finally {
    try {
      await unlink(tmp);
    } catch {
      /* ignore */
    }
  }
}

function ensureStore() {
  const listed = run(["blob", "list-stores", "--non-interactive"]);
  if (listed.includes(STORE_NAME) || listed.includes(STORE_ID)) {
    console.log(`[fonts:push] Blob store present (${STORE_ID})`);
    return;
  }
  console.log(`[fonts:push] creating private Blob store "${STORE_NAME}"…`);
  try {
    run([
      "blob",
      "create-store",
      STORE_NAME,
      "--access",
      "private",
      "--yes",
      "--environment",
      "production",
      "--environment",
      "preview",
      "--non-interactive",
    ]);
  } catch (err) {
    if (/already exists|409/i.test(err.combined || err.message || "")) {
      console.log(`[fonts:push] store already exists — continue`);
      return;
    }
    throw err;
  }
}

function uploadFont(file, rwToken) {
  const path = join(fontsDir, file);
  const pathname = `fonts/${file}`;
  console.log(`[fonts:push] upload ${file} → ${pathname}`);
  const out = run([
    "blob",
    "put",
    path,
    "--access",
    "private",
    "--pathname",
    pathname,
    "--content-type",
    "font/woff2",
    "--allow-overwrite",
    "true",
    "--add-random-suffix",
    "false",
    "--rw-token",
    rwToken,
    "--store-id",
    STORE_ID,
    "--non-interactive",
  ]);
  const match = out.match(/https:\/\/\S+/);
  if (!match) {
    throw new Error(`No blob URL in put output for ${file}:\n${out}`);
  }
  return match[0].replace(/[>\],"'\s]+$/, "");
}

function setEnv(name, value) {
  console.log(`[fonts:push] env ${name} → ${targets}`);
  run(
    [
      "env",
      "add",
      name,
      targets,
      "--sensitive",
      "--force",
      "--yes",
      "--non-interactive",
    ],
    { input: value },
  );
}

function rmEnv(name) {
  for (const env of ["production", "preview", "development"]) {
    const result = spawnSync(
      "npx",
      ["vercel", "env", "rm", name, env, "--yes", "--non-interactive"],
      {
        cwd: root,
        encoding: "utf8",
        shell: true,
        env: { ...process.env, VERCEL_OIDC_TOKEN: undefined },
      },
    );
    const combined = `${result.stdout || ""}${result.stderr || ""}`;
    if (result.status === 0) {
      console.log(`[fonts:push] removed legacy ${name} (${env})`);
    } else if (!/env_not_found|was not found/i.test(combined)) {
      if (result.stdout) process.stdout.write(result.stdout);
      if (result.stderr) process.stderr.write(result.stderr);
    }
  }
}

async function main() {
  for (const { file } of FONTS) {
    await access(join(fontsDir, file));
  }

  ensureStore();
  const rwToken = await resolveRwToken();

  for (const { file, env } of FONTS) {
    const url = uploadFont(file, rwToken);
    setEnv(env, url);
  }

  for (const name of LEGACY_B64) {
    rmEnv(name);
  }

  // Prevent accidental commit of pulled secrets
  await writeFile(
    join(root, ".env.vercel-fonts.tmp"),
    "# deleted by fonts:push\n",
    "utf8",
  ).catch(() => {});
  try {
    await unlink(join(root, ".env.vercel-fonts.tmp"));
  } catch {
    /* ignore */
  }

  console.log("[fonts:push] done — push/redeploy so builds fetch from Blob");
}

main().catch((err) => {
  console.error("[fonts:push] failed:", err.message || err);
  process.exit(err.status ?? 1);
});

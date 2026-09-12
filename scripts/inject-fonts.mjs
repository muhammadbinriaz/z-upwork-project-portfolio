/**
 * Private Vercel font inject (Blob URLs — env total size is capped at 64KB,
 * so base64 of the fonts cannot live in Environment Variables).
 *
 * Local: if .woff2 already exist under src/assets/fonts/, do nothing.
 * Vercel: set FONT_*_URL (from `npm run fonts:push`). Fetch with
 * BLOB_READ_WRITE_TOKEN (auto when the Blob store is linked to the project).
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fontsDir = join(root, "src", "assets", "fonts");

const FONTS = [
  { file: "Canela-Regular.woff2", env: "FONT_CANELA_REGULAR_URL" },
  { file: "sohne-buch.woff2", env: "FONT_SOHNE_BUCH_URL" },
  { file: "sohne-halbfett.woff2", env: "FONT_SOHNE_HALBFETT_URL" },
  { file: "sohne-schmal-dreiviertelfett.woff2", env: "FONT_SOHNE_SCHMAL_URL" },
];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function download(url, token) {
  const headers = {};
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`GET ${url} → ${res.status} ${res.statusText}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  await mkdir(fontsDir, { recursive: true });

  let wrote = 0;
  let skippedLocal = 0;
  let missing = [];
  const token = process.env.BLOB_READ_WRITE_TOKEN || "";

  for (const { file, env } of FONTS) {
    const dest = join(fontsDir, file);
    if (await exists(dest)) {
      skippedLocal += 1;
      continue;
    }

    const url = process.env[env];
    if (!url || !String(url).trim()) {
      missing.push(env);
      continue;
    }

    const buf = await download(String(url).trim(), token);
    await writeFile(dest, buf);
    wrote += 1;
    console.log(`[inject-fonts] wrote ${file} from ${env}`);
  }

  if (skippedLocal === FONTS.length) {
    console.log("[inject-fonts] local font files present — skip");
    return;
  }

  if (wrote > 0) {
    console.log(`[inject-fonts] injected ${wrote} file(s)`);
  }

  if (missing.length) {
    console.warn(
      `[inject-fonts] missing env: ${missing.join(", ")} — falling back to Instrument Serif/Sans`,
    );
  }
}

main().catch((err) => {
  console.error("[inject-fonts] failed:", err);
  process.exit(1);
});

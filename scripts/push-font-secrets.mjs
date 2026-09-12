/**
 * Push local font files into Vercel as sensitive env vars.
 * Requires: `npx vercel login` + `npx vercel link` (once).
 *
 *   npm run fonts:push
 */
import { readFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fontsDir = join(root, "src", "assets", "fonts");

const FONTS = [
  { file: "Canela-Regular.woff2", env: "FONT_CANELA_REGULAR_B64" },
  { file: "sohne-buch.woff2", env: "FONT_SOHNE_BUCH_B64" },
  { file: "sohne-halbfett.woff2", env: "FONT_SOHNE_HALBFETT_B64" },
  { file: "sohne-schmal-dreiviertelfett.woff2", env: "FONT_SOHNE_SCHMAL_B64" },
];

const targets = "production,preview";

async function main() {
  for (const { file, env } of FONTS) {
    const path = join(fontsDir, file);
    await access(path);
    const b64 = (await readFile(path)).toString("base64");
    console.log(`[fonts:push] ${env} (${b64.length} chars) → ${targets}`);
    const result = spawnSync(
      "npx",
      [
        "vercel",
        "env",
        "add",
        env,
        targets,
        "--value",
        b64,
        "--sensitive",
        "--force",
        "--yes",
        "--non-interactive",
      ],
      { cwd: root, stdio: "inherit", shell: true },
    );
    if (result.status !== 0) {
      console.error(`[fonts:push] failed on ${env} (exit ${result.status})`);
      console.error("Run: npx vercel login && npx vercel link");
      process.exit(result.status ?? 1);
    }
  }
  console.log("[fonts:push] done — redeploy for fonts to ship");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

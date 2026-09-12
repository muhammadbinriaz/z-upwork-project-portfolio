/**
 * Print base64 values for Vercel env secrets from local font files.
 * Does not print full secrets to git — stdout only. Usage:
 *
 *   node scripts/export-font-secrets.mjs
 *   node scripts/export-font-secrets.mjs --vercel   # pipe-friendly vercel env add
 */
import { readFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fontsDir = join(root, "src", "assets", "fonts");

const FONTS = [
  { file: "Canela-Regular.woff2", env: "FONT_CANELA_REGULAR_B64" },
  { file: "sohne-buch.woff2", env: "FONT_SOHNE_BUCH_B64" },
  { file: "sohne-halbfett.woff2", env: "FONT_SOHNE_HALBFETT_B64" },
  { file: "sohne-schmal-dreiviertelfett.woff2", env: "FONT_SOHNE_SCHMAL_B64" },
];

const vercelMode = process.argv.includes("--vercel");

async function main() {
  for (const { file, env } of FONTS) {
    const path = join(fontsDir, file);
    try {
      await access(path);
    } catch {
      console.error(`Missing local file: ${path}`);
      process.exit(1);
    }
    const b64 = (await readFile(path)).toString("base64");
    if (vercelMode) {
      // One line: ENV_NAME then base64 — for scripting vercel env add
      console.log(`${env}\t${b64}`);
    } else {
      console.log(`\n# ${file} → ${env} (${b64.length} chars)`);
      console.log(b64);
    }
  }
}

main();

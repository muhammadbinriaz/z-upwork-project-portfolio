/**
 * Private Vercel font inject.
 *
 * Local: if .woff2 already exist under src/assets/fonts/, do nothing.
 * Vercel: set FONT_*_B64 env vars (base64 of each file). This script
 * decodes them into src/assets/fonts/ before `vite build`.
 *
 * Binaries stay out of git; only the env secrets carry them on deploy.
 */
import { mkdir, writeFile, access } from "node:fs/promises";
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

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(fontsDir, { recursive: true });

  let wrote = 0;
  let skippedLocal = 0;
  let missing = [];

  for (const { file, env } of FONTS) {
    const dest = join(fontsDir, file);
    if (await exists(dest)) {
      skippedLocal += 1;
      continue;
    }

    const b64 = process.env[env];
    if (!b64 || !String(b64).trim()) {
      missing.push(env);
      continue;
    }

    await writeFile(dest, Buffer.from(String(b64).trim(), "base64"));
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

/**
 * Print Blob URL env names (for docs). Prefer `npm run fonts:push`.
 */
console.log(`Use: npm run fonts:push

That uploads private Blobs and sets:
  FONT_CANELA_REGULAR_URL
  FONT_SOHNE_BUCH_URL
  FONT_SOHNE_HALBFETT_URL
  FONT_SOHNE_SCHMAL_URL

(Base64-in-env is not used — Vercel caps all env vars at 64KB total.)
`);

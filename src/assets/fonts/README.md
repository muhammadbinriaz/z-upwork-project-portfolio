# Fonts

Paid Canela / Söhne `.woff2` stay **out of git**.

## Local

Drop the files in this folder — `npm run dev` uses them.

## Vercel (private Blob inject)

Vercel caps **all** Environment Variables at 64KB total, so fonts cannot be stored as base64 secrets. Instead:

```bash
npx vercel login
npx vercel link
npm run fonts:push
```

That:

1. Creates a private Blob store `goleadfinder-fonts` (once)
2. Uploads the four `.woff2` files
3. Saves short `FONT_*_URL` secrets + links `BLOB_READ_WRITE_TOKEN` to the project

On each deploy, `prebuild` downloads them into this folder and Vite bundles them.

If URLs/token are missing, the site falls back to Instrument Serif / Sans from Google Fonts.

# Fonts

Paid Canela / Söhne `.woff2` stay **out of git**.

## Local

Drop the files in this folder — `npm run dev` uses them.

## Vercel (private inject)

One-time:

```bash
npx vercel login
npx vercel link
npm run fonts:push
```

That uploads four sensitive env vars (`FONT_*_B64`) for Production + Preview. On each deploy, `prebuild` runs `scripts/inject-fonts.mjs`, writes the `.woff2` files, and Vite bundles them.

Manual alternative: `npm run fonts:export` and paste into Vercel → Settings → Environment Variables.

If an env var is missing, the site falls back to Instrument Serif / Sans from Google Fonts.

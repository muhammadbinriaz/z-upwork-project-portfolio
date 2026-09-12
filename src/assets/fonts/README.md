# Fonts (gitignored) — needed for production builds

Place these files in `src/assets/fonts/` on your machine and on the
deploy host / CI before `npm run build`. Do **not** commit them.

- Canela-Regular.woff2
- sohne-buch.woff2
- sohne-halbfett.woff2
- sohne-schmal-dreiviertelfett.woff2 (optional)
- SourceCodePro-Medium.woff2

Local `npm run dev` already picks them up if the files are present.

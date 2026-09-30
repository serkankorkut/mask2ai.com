# Working on mask2ai.com

Static site built by `node build.mjs` from `src/` into git-ignored `public/`; the version is read from `../mask2ai/package.json`. Product rules and the owner's release words live in `../mask2ai/AGENTS.md`.

- `DEPLOY ET`: `npm run deploy`. Never deploy without it.
- `SYNC ET`: push this repo and the product repo, publish the release, deploy, then `npm run indexnow`.
- Refresh the GIFs in `src/static/` when the product recordings change. Section titles start with a capital letter.
- Chrome Web Store badges on the home page render only when `../mask2ai/store/id.txt` holds the store item ID (or `CHROME_STORE_ID` is set at build time).
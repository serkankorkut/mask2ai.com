# mask2ai.com

Marketing site for [mask2ai](https://github.com/serkankorkut/mask2ai). Static files in `public/`, served as Cloudflare Workers assets with custom domains mask2ai.com and www.mask2ai.com.

```
npm install
npm run dev      # local preview
npm run deploy   # production
```

The demo GIF in `public/` is copied from the mask2ai repository's `demo/claude-code.gif`; refresh it when that recording changes. The logo brief is in `brand/logo-brief.md`.
## Search engines

`npm run indexnow` pings Bing, Yandex, Naver and Seznam (IndexNow) with every URL in `public/sitemap.xml`. Run it after a deploy that changes the page. Google ignores IndexNow; submit the sitemap once in Search Console. `og.png`, `robots.txt`, `sitemap.xml` and `llms.txt` are hand-maintained in `public/`.
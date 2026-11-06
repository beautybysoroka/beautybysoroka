# Beauty by Soroka

Vue 3 + Vite, published to GitHub Pages by `.github/workflows/deploy.yml`.

## Local development

Use Node.js 22.12+ (CI uses Node.js 22).

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## SEO and publishing

`npm run build` prerenders the four public pages in English and Danish with
Vite SSG. English URLs stay at `/`, `/price/`, `/plan/`, `/portfolio/`;
Danish versions use `/da/`. Existing URLs without a trailing slash still match
in Vue Router; GitHub Pages serves the generated directories.

`src/seo.ts` defines page titles, descriptions, headings, canonical URLs,
language alternatives and social previews. The language switcher changes the
URL, and navigation keeps the selected language.

`scripts/finalize-seo.mjs` checks the generated HTML and creates `dist/sitemap.xml`,
`dist/404.html`, `dist/CNAME` and `dist/.nojekyll`. `public/robots.txt` is copied
by Vite. The incomplete booking form at `/questions/` and error pages are
marked `noindex` and excluded from the sitemap.

Prices remain in `src/views/PriceView.vue`. Changing content requires the same
build and deployment as before. Push to `main` runs the existing Pages workflow.

After publishing:

- Check that `/price/` and `/da/price/` return HTTP 200 with prices in the HTML.
- Check that an unknown URL returns HTTP 404.
- Add the site to Google Search Console, submit
  `https://beautybysoroka.com/sitemap.xml`, and inspect both price URLs.

Search Console requires access to the site owner's Google account. A successful
local build does not establish live indexing or ranking.

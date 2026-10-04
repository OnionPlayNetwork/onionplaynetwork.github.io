# OnionPlay — Official Page

Information-only landing page for **OnionPlay**, published with GitHub Pages at:

**https://onionplaynetwork.github.io/**

It exists so anyone who cannot reach OnionPlay through a normal search engine —
because the domain is blocked or filtered — can always find the current official
domain, plus the permanent `.onion` address.

> This page does **not** host or stream any content. It only publishes links.

## Contents

| File | Purpose |
|---|---|
| `index.html` | the page (readable without JavaScript) |
| `styles.css` | styles, incl. the self-hosted Quicksand font |
| `cta.js` | opens official links in a secure new tab (no URL preview) |
| `fonts/` | self-hosted Quicksand — no third-party requests |
| `favicon.ico`, `favicon.png`, `apple-touch-icon.png` | icons |
| `logo.png` | official wordmark |
| `qr.svg` | QR code to the official domain |
| `robots.txt`, `sitemap.xml` | crawler / SEO |
| `.nojekyll` | serve files as-is (disable Jekyll) |
| `google…html` | Search Console site verification |

## Updating

This repository contains **generated output**. Edit the source build, then
replace the files here and push:

```bash
git add -A
git commit -m "update"
git push
```

GitHub Pages rebuilds automatically from the `main` branch (root).

## Notes

- Canonical URL: `https://onionplaynetwork.github.io/`
- The `.onion` address is a permanent Tor signpost for the current domain.
- No trackers, no third-party requests.

## Disclaimer

Information only. The operator is responsible for any linked content.

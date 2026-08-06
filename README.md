# xlserena.github.io

Personal site for **Lan Xu** — AI Platform & Infrastructure.

Live: [https://xlserena.github.io](https://xlserena.github.io)

## Local preview

No build step. From this directory:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Content ownership

| Surface | Edit here |
|---------|-----------|
| Site copy (EN/中文) | `index.html` defaults + `main.js` `copy` object |
| GitHub profile README | `profile/README.md` only |

Sync the GitHub special repo (`XlSerena/XlSerena`) after profile edits:

```bash
./scripts/sync-profile.sh
```

That copies `profile/README.md` → `../XlSerena/README.md`. Then commit in the profile repo.

Work blurbs and case detail live **only** on the site. Keep the profile README short (titles + Now).

## Stack

Static HTML / CSS / vanilla JS on GitHub Pages (`.nojekyll`).

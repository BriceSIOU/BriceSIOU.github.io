# bricesiou.github.io — portfolio

Bilingual (FR/EN) portfolio built with [Hugo](https://gohugo.io), deployed to
GitHub Pages by GitHub Actions on every push to `main`.

- **Live:** https://bricesiou.github.io
- **French** is the default language and lives at `/`
- **English** lives under `/en/`

---

## Running it locally

Hugo **extended v0.148.2** (the version CI is pinned to):

```bash
# Install once
curl -fsSL -o hugo.deb \
  "https://github.com/gohugoio/hugo/releases/download/v0.148.2/hugo_extended_0.148.2_linux-amd64.deb"
sudo dpkg -i hugo.deb

# Then, from the repo root
hugo server          # http://localhost:1313 — live reload
hugo server -D       # include drafts
hugo --minify        # production build into ./public
```

`public/` and `resources/` are generated and git-ignored. Never commit them —
CI rebuilds the site from source.

---

## Layout of the repo

```
content/fr/…          French content  → /
content/en/…          English content → /en/
layouts/              Templates (no external theme)
  baseof.html           page shell
  home.html             the home page
  <section>/section.html  list page for that section
  <section>/page.html     single page for that section
  _partials/            nav, head, footer, cards…
i18n/fr.toml, en.toml UI strings (buttons, labels, section names)
static/css/main.css   the entire stylesheet
static/js/            typing prompt, nav, reveals, grain
static/cv/            the CV PDF served by /cv/
archetypes/           front-matter templates for `hugo new`
hugo.toml             config, menus, translated URLs
```

**Every page needs a French *and* an English file sharing the same
`translationKey`.** That key is what wires the EN/FR switch in the header; if
a page has no counterpart, the switch falls back to the other language's home
page.

---

## Adding things

### A project

```bash
hugo new content/fr/projets/mon-projet.md
hugo new content/en/projets/mon-projet.md
```

Then edit the front matter:

```yaml
translationKey: "mon-projet"   # identical in both files
slug: "my-project"             # English file only — keeps the EN URL readable
weight: 25                     # lower = listed earlier
featured: true                 # show it on the home page
icon: "🔐"
ptype: "Projet personnel"      # NOT `kind:` — that name is reserved by Hugo
year: "2026"
tech: ["Python", "Wireshark"]
repo: "https://github.com/BriceSIOU/…"   # omit if there is none
tags: ["cryptographie"]
summary: "One or two sentences — this is what the card shows."
draft: false                   # set to false to publish
```

The home page shows projects with `featured: true`; `/projets/` shows them all.

### An article

```bash
hugo new content/fr/articles/mon-article.md
hugo new content/en/articles/mon-article.md
```

There is already a draft pair — `rapport-sans-poc.md` /
`report-without-poc`. Review it, then flip `draft: true` to `false` in **both**
language files to publish it.

### A reading note

```bash
hugo new content/fr/lectures/le-livre.md
hugo new content/en/lectures/le-livre.md
```

`status:` takes `finished`, `currently_reading` or `want_to_read` — the
template translates it. Uncomment `rating:` (1–5) to show the dots.

### Updating the CV

Replace `static/cv/CV_SIOU_ENINAM_BRICE.pdf` and bump `updated:` in
`content/fr/cv/_index.md` and `content/en/cv/_index.md`.

The CV page reuses the `experience:` and `education:` lists from
`content/{fr,en}/about/_index.md`, so those two pages can never drift apart —
edit the About page and both update.

---

## Changing the look

Everything visual is in `static/css/main.css`, starting with the tokens at the
top:

```css
--green:  #39ff14;   /* accent */
--bg:     #140203;   /* page background */
--text:   #d4d4d4;   /* body copy   — 12.5:1 contrast */
--dim:    #8a8a8a;   /* secondary   —  5.4:1, safe for body text */
--faint:  #6a6a6a;   /* decorative only — do not use for sentences */
```

The stylesheet honours `prefers-reduced-motion` (grain off, no typing
animation, no reveals) and has a print stylesheet.

To turn the film grain off site-wide, set `grain = false` under `[params]` in
`hugo.toml`.

The phrases the hero types come from `typed:` in `content/{fr,en}/_index.md`.

---

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.
Hugo's version is pinned there (`HUGO_VERSION`) so CI builds exactly what you
tested locally — bump it deliberately, not automatically.

GitHub Pages must be set to **Source: GitHub Actions** (Settings → Pages).

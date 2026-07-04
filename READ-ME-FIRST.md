# READ ME FIRST: how this site goes live

Your portfolio is a plain React app (in `frontend/`). It is **already live** at **https://www.khanfaraz.in**, hosted on **GitHub Pages**. You do NOT need Emergent, and you do NOT need Netlify.

## Deploy (the one and only method: GitHub Pages)

From Claude Code, just ask me to deploy. Or run it yourself:
```
cd frontend
CI=false npm run build     # builds frontend/build/
npm run deploy             # publishes build/ to the gh-pages branch
```
`npm run deploy` builds the site and pushes the `build/` folder to the repo's `gh-pages` branch. GitHub Pages serves it at www.khanfaraz.in a minute or two later. Also commit your source changes to `main` (the source lives on `main`, the built site lives on `gh-pages`).

## Your custom domain
Already set up: **www.khanfaraz.in** points at GitHub Pages, and `frontend/public/CNAME` keeps it attached on every deploy. Nothing to do.

## If you're working in Claude Code
Open the whole folder and ask me to build, change, or deploy things. I read `CLAUDE.md` (next to this file) for full context.

## Note
This is a normal React site you fully own: no Emergent, no Netlify, no subscription. Everything is done in Claude Code + GitHub from here on.

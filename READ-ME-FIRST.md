# READ ME FIRST — how to put this online

Your portfolio is finished and **already built**. You do NOT need Emergent anymore.

## The fastest way to get it live (no commands)

1. Unzip this file. You get a folder.
2. Inside it, go to: `frontend` → `build`. That `build` folder IS your finished website.
3. In your browser, open **https://app.netlify.com/drop**
4. Drag the **`build`** folder onto that page.
5. Wait a few seconds — Netlify gives you a live link (like `something.netlify.app`). That's your portfolio, live. Open it on your phone, send it to anyone.

That's it. Aurora, FinVista, and the new RecruitOS prototype are all in there.

## Want to use your own domain (like work.yourname.com)?
After the site is live on Netlify: in Netlify go to **Domain management → add a domain**, then add the **CNAME** record it shows you at your domain provider. (This part needs your accounts, so you do it — tell me if you want me to walk you through each click.)

## If you're working in Claude Code
Open the whole folder there and ask me to build or change things. I'll read `CLAUDE.md` (next to this file) for full context. To rebuild after edits:
```
cd frontend
npm install
npm run build
```
Then re-drag the new `frontend/build` folder to Netlify (or set up auto-deploy later).

## Note
This is now a normal React site you fully own — no Emergent, no subscription. Everything can be done in Claude + Netlify from here on.

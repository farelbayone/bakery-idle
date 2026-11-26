# 🥐 Toko Roti Manager

> A cozy bakery management game. Bake from a menu of 11 breads, serve customers before they lose patience, upgrade your shop, and climb the global leaderboard. No login, just open the link and play.

**Fullstack, yet free to host:** the game runs on **GitHub Pages**, and an optional tiny **Cloudflare Worker** adds the global leaderboard and anonymous cloud save. Without the backend, the game still works fully offline.

## ✨ Features

- **Customer system:** customers arrive with orders and a patience bar. Serve fast for tips, chain a streak for up to +50%, and watch for VIPs who pay double.
- **11 breads to unlock:** from Roti Tawar to Birthday Cake. Level up by serving customers to unlock new menu items.
- **Oven management:** every bake costs ingredients and time. Buy more ovens and speed them up.
- **7 shop upgrades:** ovens, speed, patience, promotion, queue size, prices, and an auto-baking Baker Assistant.
- **Global leaderboard:** anonymous nickname, rename anytime.
- **Cloud save without an account:** a random save code is generated in your browser. Copy it to continue on another device.
- **Smooth UX:** animations, floating rewards, sound effects (mutable), an interactive tutorial, a contextual hint bar, responsive layout.

## 🏗️ Architecture

```
GitHub Pages (static)          Cloudflare Worker + KV (optional)
index.html  ───fetch───►  GET /top        leaderboard
                          POST /score     submit score
                          GET/PUT /save/:id   anonymous cloud save
```

## 🚀 Deploy

### 1. Frontend (GitHub Pages)
1. Push this repo to GitHub.
2. **Settings → Pages → Deploy from a branch → `main` / `(root)`**.
3. Your game is live at `https://<user>.github.io/<repo>/`.

### 2. Backend (optional, free tier)
```bash
cd worker
npx wrangler kv namespace create KV     # copy the printed id into wrangler.toml
npx wrangler deploy                     # prints your Worker URL
```
Then open `index.html`, set `const API = 'https://bakery-api.<you>.workers.dev'`, commit, and push.

## 🔒 Notes

Scores are submitted by the browser, so the leaderboard is meant for fun, not competitive integrity. The save code is a secret key: anyone who has it can load that save.

## 🧰 Tech Stack

HTML5 · CSS3 · Vanilla JavaScript · Web Audio API · localStorage · Cloudflare Workers + KV

## 📄 License

MIT

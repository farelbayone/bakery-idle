# 🥖 Bakery Idle

> A cozy, endless idle/clicker game about running a bakery. Bake bread, hire bakers, buy upgrades, and watch your empire grow, even while you're away.

Built with plain HTML, CSS, and JavaScript. No frameworks, no build step, no dependencies. Just open `index.html` and play.

## ✨ Features

- **Click to bake:** satisfying squish animation, flying crumbs, and a combo meter that boosts every click.
- **Automatic production:** 6 buildings, from a Mini Oven to a Bread City, that bake for you nonstop.
- **Buy ×1 / ×10 / Max:** with scaling prices (+15% per purchase).
- **Permanent upgrades:** multiply your clicks and production.
- **Golden Bread events:** random 🌟 pop-ups that trigger a ×7 Frenzy or a big bonus.
- **Prestige system:** "Bake Again" for Golden Yeast and a permanent production bonus.
- **Achievements:** 8 goals to unlock, with toast notifications.
- **Offline progress:** your bakery keeps working while the tab is closed.
- **Auto-save:** progress is stored in your browser's `localStorage`.
- **Interactive tutorial:** a step-by-step guide for first-time players, a contextual hint bar, and a help button (❓) to reopen it anytime.
- **Responsive and accessible:** works on desktop and mobile, with keyboard support and `prefers-reduced-motion` respected.
- **Sound effects:** tiny WebAudio blips, with a mute toggle.

## 🎮 How to Play

1. **Click** the big bread to earn bread.
2. **Buy buildings** (🏭 tab) to produce bread automatically.
3. **Buy upgrades** (⚡ tab) for permanent boosts.
4. **Catch the golden 🌟** when it appears for bonuses.
5. When you're rich enough, **Bake Again** (✨ tab) to earn Golden Yeast and start over stronger.

## 🚀 Run Locally

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
# open index.html in your browser
```

## 🌐 Deploy to GitHub Pages

1. Push `index.html` to your repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** and choose `main` / `(root)`.
4. Your game will be live at `https://<your-username>.github.io/<your-repo>/`.

## 🛠️ Customize

All game data lives in three arrays at the top of the script in `index.html`:

- `B`: buildings (name, icon, base cost, production)
- `U`: upgrades
- `A`: achievements

Add a new entry to any of them and the UI updates automatically.

## 🧰 Tech Stack

HTML5 · CSS3 · Vanilla JavaScript · Web Audio API · localStorage

## 📄 License

MIT. Free to use, modify, and share.

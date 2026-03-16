# Deploy (Rajarata Exports)

This project is a Vite + React static site.

## 1) Build locally

From the project folder:

```powershell
cd "C:\Users\Naveen\OneDrive\rajarata\modern-site"
npm install
npm run build
```

Vite outputs a production-ready static site into the `dist/` folder.

## 2) Upload the correct folder

Upload **only the contents of `dist/`** to your hosting public directory.

Common mistake: uploading the full project (source code) instead of `dist/`. Static hosts cannot run `npm run dev`.

## 3) Test locally like production

```powershell
npm run preview -- --host --port 4173
```

Open `http://localhost:4173/`.

## 4) Host settings

### cPanel / shared hosting

### Netlify

### Vercel

### GitHub Pages

## GitHub Pages (recommended)

This repo includes a GitHub Actions workflow that builds the Vite app and publishes `modern-site/dist` to GitHub Pages.

1. Push to the `main` branch.
2. In your GitHub repo go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Go to the **Actions** tab and wait for the **Deploy to GitHub Pages** workflow to finish.

If you see a GitHub Pages error like “must provide an index.html”, it almost always means Pages is pointing at the wrong source (e.g. `/(root)` or a branch folder that doesn’t contain the built site). Using the workflow above fixes that by deploying the correct `dist/` output.

## GitHub Pages (fallback: main branch /docs)

If you can’t (or don’t want to) use **Source = GitHub Actions**, you can deploy using the classic Pages mode:

1. Ensure the built site exists at the repo root `docs/` folder.
	- Generate it by copying `modern-site/dist` to `docs/`.
2. In GitHub go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select **Branch: main** and **Folder: /docs**.

This fixes the 404 “must provide an index.html” error because GitHub Pages will serve `docs/index.html`.
## Notes

This project is configured with `base: './'` in `vite.config.ts` so it can be hosted from a subfolder (e.g., `https://domain.com/some-folder/`) without breaking asset paths.

Logo:
- Put your logo at `public/logo.png` so it is available in production.

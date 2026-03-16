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
- Upload `dist/*` into `public_html/` (or a subfolder).
- Make sure `index.html` is in the folder you are serving.

### Netlify
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Vercel
- **Build command:** `npm run build`
- **Output directory:** `dist`

### GitHub Pages
- Build: `npm run build`
- Deploy the `dist/` folder to GitHub Pages (via Actions or `gh-pages`).

## Notes

This project is configured with `base: './'` in `vite.config.ts` so it can be hosted from a subfolder (e.g., `https://domain.com/some-folder/`) without breaking asset paths.

Logo:
- Put your logo at `public/logo.png` so it is available in production.

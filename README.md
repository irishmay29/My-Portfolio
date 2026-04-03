# My-Portfolio

Portfolio site built with Astro and Tailwind CSS.

## Local development

1. `npm install`
2. `npm run dev`

## Build

1. `npm run build`
2. Output is generated in `dist/`

## GitHub Pages deployment (automated)

This repository deploys via GitHub Actions workflow in `.github/workflows/deploy.yml`.

Required GitHub setting:
1. Repository `Settings` -> `Pages`
2. `Build and deployment` -> `Source`
3. Select `GitHub Actions`

If Pages is set to `Deploy from a branch`, GitHub may render the repository README instead of the site.

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run preview` - preview build

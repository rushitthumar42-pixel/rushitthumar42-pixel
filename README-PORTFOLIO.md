# PRISMATIC OS Portfolio

This repository contains the interactive React/TypeScript portfolio for Rushit and the matching GitHub profile README.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Build and preview

```bash
npm run build
npm run preview
```

## Customize

Replace the following values in `src/App.tsx`:

- `{{LINKEDIN_URL}}`
- `{{EMAIL_ADDRESS}}`
- `{{PROJECT_NAME_01}}`, `{{PROJECT_NAME_02}}`
- `{{PROJECT_DESCRIPTION_01}}`, `{{PROJECT_DESCRIPTION_02}}`
- `{{LANGUAGE}}`, `{{TOOL}}`

Only add project links, deployment URLs, technologies, or metrics that are real and verified.

## Deployment

The app can be deployed to Vercel, Netlify, GitHub Pages, or any static host after `npm run build`. For GitHub Pages, configure the site to publish the generated `dist/` directory and keep the Vite `base` setting appropriate to the repository path.

The app uses Framer Motion and Lucide React. The main spatial object is an SVG/CSS composition rather than a heavy WebGL scene, which provides a graceful fallback on mobile and browsers without WebGL.

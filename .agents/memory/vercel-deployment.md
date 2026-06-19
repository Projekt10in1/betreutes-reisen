---
name: Vercel deployment of betreutes-reisen
description: How the static frontend is deployed to Vercel via GitHub, and the non-obvious blockers that cost many rounds to find.
---

# Vercel deployment (betreutes-reisen frontend)

The frontend `artifacts/betreutes-reisen` is a self-contained static Vite SPA (no `@workspace/*` lib imports), deployed to Vercel from GitHub repo `Projekt10in1/betreutes-reisen`, branch `main`.

## The settings that actually made it work

The decisive fix was in the **Vercel dashboard**, NOT in repo files. Dashboard Build & Output settings override `vercel.json`. Working config (Settings → Build and Deployment):
- **Root Directory** = `artifacts/betreutes-reisen`
- **Framework Preset** = Other
- **Output Directory** (override ON) = `dist/public`
- **Build Command** (override ON) = `pnpm run build`
- **Install Command** = default

**Why:** With Root Directory at the app folder, the build runs there; `pnpm run build` (= `vite build`) emits to `dist/public`, and Vercel must look there. A repo-root `vercel.json` is ignored when Root Directory points at a subfolder.

**How to apply:** If a future Vercel error says `No Output Directory named "public" found`, that exact wording = Vercel is using its *default* (`public`) and ignoring `vercel.json`. Fix it in the dashboard, do not just keep editing `vercel.json`.

## Repo-side prerequisites (already done, keep them)
- Root `package.json` has `"packageManager": "pnpm@10.26.1"` so Vercel/Corepack uses pnpm.
- `vite.config.ts` must NOT require `PORT`/`BASE_PATH` at build time — those are Replit-only. They are gated to `command === "serve"`; `base` defaults to `/` when `BASE_PATH` is unset. Requiring them unconditionally breaks the Vercel build (was a silent `DEPLOYMENT_NOT_FOUND` because no build ever succeeded).
- Vite `outDir` is `dist/public` (not `dist`). Output directory everywhere must match this.
- Keep the pnpm lockfile in sync: Vercel installs with `--frozen-lockfile` by default, so any `package.json` change needs `pnpm install` committed or it fails with `ERR_PNPM_OUTDATED_LOCKFILE`.
- SPA routing: rewrite all paths to `/index.html` (set in `vercel.json`; also settable in dashboard).

## Gotchas observed
- Vercel's **Redeploy** button reuses the *old* commit/settings — it does not pick up a newer commit. To deploy the latest code, push a new commit (auto-deploy) rather than redeploying an old build.
- A "frozen-lockfile" error referencing `<ROOT>/artifacts/...` confirms pnpm found the workspace root correctly — the problem is a stale lockfile, not a bad path.

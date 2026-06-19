# betreutes-reisen.org

A full-stack German-language travel website for care-accompanied trips — serving elderly people, people with disabilities, and their families. All trips are escorted by trained German nursing professionals.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/betreutes-reisen run dev` — run the frontend (served at `/`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string
- Optional env: `ADMIN_PASSWORD` — defaults to `betreutes2024` if not set

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS + shadcn/ui + framer-motion + wouter
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `lib/api-spec/openapi.yaml` — API contract (source of truth)
- `lib/db/src/schema/trips.ts` — trips DB table
- `lib/db/src/schema/inquiries.ts` — contact inquiries DB table
- `lib/api-client-react/src/generated/` — generated React Query hooks (do not edit)
- `lib/api-zod/src/generated/` — generated Zod schemas for the server (do not edit)
- `artifacts/api-server/src/routes/trips.ts` — trips API routes
- `artifacts/api-server/src/routes/inquiries.ts` — inquiry API routes
- `artifacts/betreutes-reisen/src/` — React frontend

## Architecture decisions

- Contract-first: OpenAPI spec drives all API types for both frontend (React Query hooks) and backend (Zod validation schemas)
- Admin auth is simple query-param password check — no JWT/sessions needed for this use case
- Trips are seeded statically (32 trips across Q1–Q4, 2 long + 6 short per quarter)
- No anonymous mass bookings — inquiries are personal "Kennenlern-Anfragen" stored in DB
- Accessibility-first: A+/A- font scaling stored in localStorage, WCAG AA contrast targets

## Product

- **Startseite (/)** — hero, trust signals, trip summary stats
- **Reisekatalog (/reisen)** — 32 trips with quarter tabs, accessibility badges, and inquiry CTAs
- **Über uns (/ueber-uns)** — team intro, mission, care professional focus
- **Kontakt (/kontakt)** — personal inquiry form (name, email, phone, Pflegegrad, needs, destination, message)
- **Admin (/admin)** — password-protected inbox showing all submitted inquiries

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- After any OpenAPI spec change, always run `pnpm --filter @workspace/api-spec run codegen` before touching frontend or backend files
- Admin password defaults to `betreutes2024`; set `ADMIN_PASSWORD` env var to override
- All user-facing text is in German (Deutsch)

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

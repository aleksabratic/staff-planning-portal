# Security Planner Frontend

This is the Next.js (App Router) frontend for the Security Planner SaaS platform. It ships with Tailwind CSS, shadcn-inspired utilities, and a basic authenticated layout scaffold.

## Getting Started

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` – Start the development server on port 3000.
- `npm run build` – Create an optimized production build.
- `npm run start` – Launch the production server.
- `npm run lint` – Lint the codebase.

## Structure

- `app/` – App Router routes (login, dashboard, error states).
- `components/layout/` – Shared layout primitives for the topbar and sidebar.
- `lib/` – Utility helpers (e.g., Tailwind className helpers).

## Notes

- Authentication is stubbed today; integrate NextAuth.js for production-ready flows.
- Update the sidebar/topbar placeholders as product requirements evolve.

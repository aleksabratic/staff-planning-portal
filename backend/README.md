# Security Planner Backend

NestJS + Prisma service powering the Security Planner SaaS platform.

## Getting Started

```bash
npm install
npm run prisma:generate
npm run start:dev
```

The API runs on [http://localhost:4000](http://localhost:4000) and exposes Swagger docs at `/docs`.

## Environment

Copy `.env` and adjust as needed:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/security_planner"
JWT_SECRET="change-me"
PORT=4000
```

## Available Scripts

- `npm run start:dev` – Start the NestJS server in watch mode.
- `npm run build` – Compile TypeScript to JavaScript.
- `npm run start` – Run the compiled server.
- `npm run prisma:generate` – Generate Prisma Client.
- `npm run prisma:migrate` – Apply migrations in development.

## Notes

- Prisma models cover `User`, `Schedule`, and `Announcement` and can be extended as requirements grow.
- Add authentication/authorization modules on top of the Prisma layer for JWT-based access control.

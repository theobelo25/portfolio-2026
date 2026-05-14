This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Docker

### Development (hot reload)

```bash
docker compose -f docker-compose.dev.yml up --build
```

Open [http://localhost:3000](http://localhost:3000). The app directory is mounted into the container; `node_modules` uses a named volume so installs stay inside Docker.

### Production image (local)

```bash
docker compose up --build
# or
docker build -t portfolio-2026 .
docker run --rm -p 3000:3000 portfolio-2026
```

## Deploy on Dokploy

The production image is built from the root `Dockerfile` using Next.js `output: "standalone"`.

1. Create a new **Application** in Dokploy from this repository.
2. Set the build type to **Dockerfile** (context: repository root, Dockerfile path: `Dockerfile`).
3. Expose port **3000** and map it in Traefik/your reverse proxy as needed.
4. Add runtime environment variables in Dokploy if you later move secrets or URLs (for example Directus) into env instead of hard-coding.

No separate `docker-compose.yml` is required on the server unless you prefer Compose-based stacks in Dokploy; a single-container Dockerfile deploy is enough.

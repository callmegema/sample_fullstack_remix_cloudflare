# Welcome to Fullstack Remix Sample(Remix + Vite + Prisma)!

📖 See the docs
- [Remix docs](https://remix.run/docs)
- [Remix Vite docs](https://remix.run/docs/en/main/future/vite)
- [Prisma docs](https://www.prisma.io/docs/orm)

## Test

Setup Database
```sh
docker compose -f docker-compose.local.yml up
```

DB migrate
```sh
NODE_ENV=test DATABASE_URL=mysql://root:@localhost:3307/eden_test npx prisma migrate reset --force
```

Run Test
```sh
NODE_ENV=test DATABASE_URL=mysql://root:@localhost:3307/eden_test npm test
```

## Development

Setup Database
```sh
docker compose -f docker-compose.local.yml up
```

DB migrate
```sh
NODE_ENV=test DATABASE_URL=mysql://root:@localhost:3307/eden_test npx prisma migrate reset --force
```

Run the Vite dev server:

```sh
npm run dev
```

To run Wrangler:

```sh
npm run build
npm run start
```

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
npm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Deployment

> [!WARNING]
> Cloudflare does _not_ use `wrangler.toml` to configure deployment bindings.
> You **MUST** [configure deployment bindings manually in the Cloudflare dashboard][bindings].

First, build your app for production:

```sh
npm run build
```

Then, deploy your app to Cloudflare Pages:

```sh
npm run deploy
```

[bindings]: https://developers.cloudflare.com/pages/functions/bindings/

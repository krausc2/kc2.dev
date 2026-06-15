# krausc2.dev

This is my personal site and corner of the internet. It contains projects, articles, and whatever else I'm currently working on.

You can view the live site at either [kc2.dev](https://kc2.dev) or [krausc2.dev](https://krausc2.dev).

Creating this site was originally a project to teach myself Svelte 5 and web infrastructure.

---

### Running locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

---

### Hosting your own site

If you want to try something similar, a proper tutorial will be published on my site soon.

In short, you'll need the following:

- Any device compatible with running a small docker container
- A domain (preferably with Cloudflare Registrar)
- A free Cloudflare account
- A network connection with a _fair_ or better upload speed (>10mbps should be fine)

#### Steps

1. Create your own Svelte repo using the `@sveltejs/adapter-node` adapter; the full [Svelte and SveleteKit tutorial](https://svelte.dev/tutorial/svelte/welcome-to-svelte) is a great starting point.
2. Set up your device (server) with appropriate power settings so that it does not power off randomly.
3. Install `Docker Desktop`, or any docker-compatible manager like `OrbStack`, or your specific Linux variant of the `docker engine` and `docker compose` on your server.
4. Install `cloudflared` on your server.
5. Set up the Cloudflare Tunnel using `cloudflared` (this protects your local IP and stops you from having to expose ports).
6. Copy my `Dockerfile` and `docker-compose.yml` file, then add **your own** `PORT=` and `CLOUDFLARE_TUNNEL_TOKEN=` to a **private** `.env` file.
7. Run the site! Some useful `docker compose` commands include:
   - Build and launch your web server: `docker compose up -d --build`
   - Launch your web server: `docker compose up -d`
   - Shut down your web server: `docker compose down`
   - Check the logs on your web server while up: `docker compose logs -f`

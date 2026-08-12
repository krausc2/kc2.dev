export interface Project {
	slug: string;
	title: string;
	tags: string[];
	description: string;
}

export const projects: Project[] = [
	{
		slug: "blog-site",
		title: "krausc2.dev (Site)",
		tags: ["TypeScript", "Svelte"],
		description:
			"Lightweight blog frontend with a variety of optimisations including <Canvas> element with off-screen sprite sheet rendering, .avif compression for images, and minimal dependencies to ship tiny bundles."
	},
	{
		slug: "blog-infrastructure",
		title: "krausc2.dev (Infrastructure)",
		tags: ["Docker", "Cloudflare", "GitHub Actions", "Tailscale", "Alpine Linux"],
		description:
			"Self-hosted blog infrastructure optimised for edge performance. Runs on a headless ARM machine over residential Wi-Fi, Cloudflare Tunnel (cloudflared) for reverse proxy, Cloudflare WAF to prevent bandwidth saturation, self-hosted GitHub action runner for CI/CD, and a Cloudflare maintenance worker."
	}
];

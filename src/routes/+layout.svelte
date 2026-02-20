<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Button } from "$lib/components/ui/button";
	let { children } = $props();
</script>

<div class="flex min-h-screen">
	<!-- Sidebar Nav -->
	<nav class="flex flex-col">
		<Button variant="ghost" href="/">Home</Button>
		<!--<Button variant="ghost" href="/now">Now</Button>-->
		<Button variant="ghost" href="/things">Things</Button>
		<Button variant="ghost" href="/articles">Articles</Button>
		<Button variant="ghost" href="/projects">Projects</Button>
	</nav>

	<!-- Main Content -->
	<main>
		{@render children()}
	</main>
</div>

<footer>
	<div>
		<p>© 2026 KC². Source available at <a href="https://github.com/krausc2/kc2.dev" target="_blank" rel="noreferrer">GitHub</a>.</p>
	</div>
</footer>


<svelte:head><link rel="icon" href={favicon} /></svelte:head>
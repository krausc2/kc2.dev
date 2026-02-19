<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Button } from "$lib/components/ui/button";
	let { children } = $props();
</script>

<header class="flex justify-center p-4">
	<nav class="flex">
		<Button variant="ghost" href="/">Home</Button>
		<!--<Button variant="ghost" href="/now">Now</Button>-->
		<Button variant="ghost" href="/things">Things</Button>
		<Button variant="ghost" href="/articles">Articles</Button>
		<Button variant="ghost" href="/projects">Projects</Button>
	</nav>
</header>

<main>
	{@render children()}
</main>

<footer>
	<div>
		<p>© 2026 KC². Source available at <a href="https://github.com/krausc2/kc2.dev" target="_blank" rel="noreferrer">GitHub</a>.</p>
	</div>
</footer>


<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!--
<style>
	header {
		display: flex;
		justify-content: center;
	}

	nav {
		display: flex;
		gap: 4rem;
		padding: 1rem;
	}
</style>
-->
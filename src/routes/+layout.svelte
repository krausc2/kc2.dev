<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/now">Now</a>
		<a href="/things">Things</a>
		<a href="/articles">Articles</a>
		<a href="/projects">Projects</a>
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
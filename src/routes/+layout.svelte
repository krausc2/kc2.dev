<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<nav>
	<a href="/">Home</a>
	<a href="/now">Now</a>
	<a href="/things">Things</a>
	<a href="/articles">Articles</a>
	<a href="/projects">Projects</a>
</nav>

<div class="footer">
	<p>© 2026 KC². Source available at <a href="https://github.com/krausc2/kc2.dev">GitHub</a>.</p>
</div>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

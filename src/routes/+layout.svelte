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


<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

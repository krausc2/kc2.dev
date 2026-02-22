<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Button } from "$lib/components/ui/button";
	let { children } = $props();
</script>

<div class="grid min-h-screen grid-cols-3">
	<aside class="col-span-1 border-r">
		<!-- [Logo and stuff goes here] -->
		<nav class="flex flex-col">
			<Button variant="ghost" href="/">Home</Button>
			<!--<Button variant="ghost" href="/now">Now</Button>-->
			<Button variant="ghost" href="/things">Things</Button>
			<Button variant="ghost" href="/articles">Articles</Button>
			<Button variant="ghost" href="/projects">Projects</Button>	
		</nav>
	</aside>

	<!-- Main Content -->
	<main class="col-span-1 flex flex-col">
		{@render children()}

		<footer class="text-center">
			<p>© 2026 KC². Source available at <a href="https://github.com/krausc2/kc2.dev" target="_blank" rel="noreferrer">GitHub</a>.</p>
		</footer>
	</main>

	<section class="col-span-1 border-l-1">
		<!-- Optional future sidebar for blog? -->
	</section>
</div>


<svelte:head><link rel="icon" href={favicon} /></svelte:head>
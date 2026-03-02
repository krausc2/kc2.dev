<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Button } from "$lib/components/ui/button";
	let { children } = $props();
</script>

<div class="grid min-h-screen grid-cols-4">
	<aside class="col-span-1 flex flex-col justify-center border-r">
		<!-- [Logo and stuff goes here] -->
		<nav class="flex flex-col">
			<Button variant="ghost" class="hover:bg-linear-to-r hover:from-stone-200 hover:to-white" href="/">Home</Button>
			<!--<Button variant="ghost" class="hover:bg-linear-to-r hover:from-stone-200 hover:to-white" href="/now">Now</Button>-->
			<Button variant="ghost" class="hover:bg-linear-to-r hover:from-stone-200 hover:to-white" href="/things">Things</Button>
			<Button variant="ghost" class="hover:bg-linear-to-r hover:from-stone-200 hover:to-white" href="/articles">Articles</Button>
			<Button variant="ghost" class="hover:bg-linear-to-r hover:from-stone-200 hover:to-white" href="/projects">Projects</Button>	
		</nav>
	</aside>

	<!-- Main Content -->
	<main class="col-span-2 flex flex-col h-full">
		<div class="p-8">
			{@render children()}
		</div>

		<footer class="mt-auto py-4 text-center">
			<p>© 2026 KC². Source available at <a href="https://github.com/krausc2/kc2.dev" target="_blank" rel="noreferrer">GitHub</a>.</p>
		</footer>
	</main>

	<section class="col-span-1 border-l">
		<!-- Optional future sidebar for blog? -->
	</section>
</div>


<svelte:head><link rel="icon" href={favicon} /></svelte:head>
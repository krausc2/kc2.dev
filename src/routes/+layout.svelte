<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Button } from "$lib/components/ui/button";

	let { children } = $props();

	/*
		Array of items for the navigation menu.
	*/
	const navItems = [
		{ label: 'Home', href: '/' },
		// { label: 'Now', href: '/now' },
		{ label: 'Things', href: '/things' },
		{ label: 'Articles', href: '/articles' },
		{ label: 'Projects', href: '/projects' }
	];
</script>

<div class="grid min-h-screen grid-cols-4">
	<aside class="col-span-1 flex flex-col justify-center border-r">
		<!-- [Logo and stuff goes here] -->

		<!--
			For each item in array, creates a button with hover effect.
			z-10 (the <Button>)
			z-0 (the gradient <div>)
		-->
		<nav class="flex flex-col">
			{#each navItems as item}
				<div class="group relative overflow-hidden" role="none">
					<div class="pointer-events-none absolute inset-0 z-0 bg-linear-to-r from-stone-200 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 transform-gpu"></div>
					<Button variant="ghost" class="relative z-10 w-full hover:bg-transparent" href={item.href}>
						{item.label}
					</Button>
				</div>
			{/each}
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
		<!-- [Optional future sidebar for blog?] -->
	</section>
</div>


<svelte:head><link rel="icon" href={favicon} /></svelte:head>
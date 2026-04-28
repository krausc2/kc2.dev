<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { Button } from "$lib/components/ui/button";
	import "@fontsource-variable/jetbrains-mono";
	import "@fontsource/inter";
	import { page } from "$app/state";
	// import { SvelteDate } from 'svelte/reactivity';

	let { children } = $props();

	/*
	console.log(
		"%cWell aren't you clever! Here's your reward: aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==",
		'color: #a3a3a3'
	);
	*/

	/*
		Array of items for the navigation menu.
	*/
	const navItems = [
		{ label: "Home", href: "/" },
		// { label: 'Now', href: '/now' },
		{ label: "Things", href: "/things" },
		{ label: "Articles", href: "/articles" },
		{ label: "Projects", href: "/projects" }
	];
</script>

<div class="grid h-screen grid-cols-3 overflow-hidden lg:grid-cols-4">
	<aside class="col-span-1 flex flex-col justify-center border-r">
		<!-- [Logo and stuff goes here] -->

		<!--
			For each item in array, creates a button with hover effect.
			z-10 (the <Button>)
			z-0 (the gradient <div>)
		-->
		<nav class="flex flex-col">
			{#each navItems as item (item.href)}
				<div class="group relative font-mono">
					<div
						class="pointer-events-none absolute inset-0 z-0 transform-gpu bg-linear-to-r from-stone-100 to-white transition-opacity duration-700 group-hover:opacity-100 group-hover:duration-200 {page
							.url.pathname === item.href
							? 'opacity-100'
							: 'opacity-0'}"
					></div>
					<Button
						variant="ghost"
						class="relative z-10 w-full hover:bg-transparent {page.url.pathname === item.href
							? 'text-custom-coral'
							: ''} {page.url.pathname === item.href ? 'hover:text-custom-coral' : ''}"
						href={item.href}
					>
						{item.label}
					</Button>
				</div>
			{/each}
		</nav>
	</aside>

	<!-- Main Content -->
	<main class="col-span-2 flex h-full flex-col overflow-y-auto px-8 pt-16">
		{@render children()}

		<footer class="mt-auto border-t pt-4 pb-4">
			<p>📍 Currently in Sydney. ( )</p>
			<!-- #TODO Add my current time -->
			<p class="pt-8 text-center font-mono">
				© 2026 krausc2 <span class="hidden lg:inline">
					| Source available at <a
						href="https://github.com/krausc2/kc2.dev"
						target="_blank"
						rel="noreferrer">GitHub</a
					></span
				>
			</p>
		</footer>
	</main>

	<section class="col-span-1 hidden border-l lg:block">
		<!-- #TODO Add right sidebar content -->
	</section>
</div>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

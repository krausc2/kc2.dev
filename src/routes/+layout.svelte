<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { Button } from "$lib/components/ui/button";
	import "@fontsource-variable/jetbrains-mono";
	import "@fontsource/inter";
	import { page } from "$app/state";
	import { fade } from "svelte/transition";
	import { createClock } from "$lib/clock.svelte";

	let { children } = $props();

	/* #TODO Add console.log easter egg here */

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

	const clock = createClock();
</script>

<div class="grid h-screen grid-cols-3 overflow-hidden fade-in lg:grid-cols-5">
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
	<main class="col-span-2 flex h-full flex-col overflow-y-auto lg:col-span-3">
		<div class="grid flex-1">
			{#key page.url.pathname}
				<div
					class="col-start-1 row-start-1 flex h-full flex-col"
					in:fade={{ duration: 150, delay: 150 }}
					out:fade={{ duration: 150 }}
				>
					{#if page.url.pathname === '/'}
						{@render children()}
					{:else}
						<div class="mx-auto flex w-full max-w-[110ch] flex-col px-8 pt-16">
							{@render children()}
						</div>
					{/if}

					<div class="mx-auto mt-auto w-full max-w-[110ch] px-8">
						<footer class="border-t pb-4 pt-4 font-mono">
						<p>
							📍 Currently in Sydney ({clock.hours}<span class="blink">:</span>{clock.minutes}
							{clock.emoji})
						</p>
						<p class="pt-8 text-center font-mono">
							© {new Date().getFullYear()} krausc2
							<span class="hidden lg:inline">
								| Source available at <a
									href="https://github.com/krausc2/kc2.dev"
									target="_blank"
									rel="noreferrer">GitHub</a
								></span
							>
						</p>
						</footer>
					</div>
				</div>
			{/key}
		</div>
	</main>

	<section class="col-span-1 hidden border-l lg:block">
		<!-- #TODO Add right sidebar content -->
	</section>
</div>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<style>
	.blink {
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		from,
		to {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	.fade-in {
		animation: fadeIn 300ms ease-in forwards;
		opacity: 0;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

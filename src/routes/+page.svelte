<script lang="ts">
	import { createSplash } from "$lib/splashes.svelte";
	import { createScramble } from "$lib/scramble.svelte";

	/* #TODO Test for hydration error based on client/server timezones. */
	const hour = new Date().getHours();
	const splash = createScramble(createSplash(hour >= 19 || hour < 5 ? "night" : "day"));
</script>

<section class="mb-32 flex flex-col">
	<p class="mb-4 text-5xl leading-none font-bold">krausc2</p>
	<p class="mb-12 font-mono text-custom-coral">
		<!-- #TODO Fix layout reserving space so page does not jump when splash changes -->
		// {splash.value}<span class="cursor">|</span>
	</p>

	<div class="flex flex-col lg:block">
		<div
			class="order-last flex aspect-3/4 items-center justify-center bg-stone-400 lg:float-right lg:mb-4 lg:ml-8 lg:w-1/2"
		>
			<p class="text-stone-500">Placeholder Image</p>
		</div>
		<div class="flex flex-col gap-8 lg:contents">
			<p class="lg:mb-8">
				G'day, I'm <b>Curtis</b>, a <b>Cyber Security Specialist</b> and <b>Undergraduate</b> at Macquarie
				University, Sydney.
			</p>
			<p>
				My current role is as a Cyber Security Engineer (internal consulting), with a background in
				Systems Administration and IT Support for large independent schools, alongside roles as an
				Electronics Repair Technician and Systems Integrator.
			</p>
			<p></p>
		</div>
	</div>
</section>

<style>
	.cursor {
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
</style>
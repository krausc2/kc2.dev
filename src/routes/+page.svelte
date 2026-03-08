<script lang="ts">
	import { getSplash } from '$lib/splashes';

	let { data } = $props();

	/*
		Checks time of day then overrides splash.

		#TODO: This causes a hydration mismatch, where splash
		is different on the server and client. Try to find
		a better solution.
	*/
	let splash = $derived.by(() => {
		const hour = new Date().getHours();

		if (hour >= 21 || hour < 3) {
			return getSplash('night');
		}

		return data.splash;
	});
</script>

<div>
	<p class="pt-12 text-5xl font-bold">krausc2</p>
	<p class="py-4 text-stone-400">// {@html splash} <span class="cursor">|</span></p>
</div>

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

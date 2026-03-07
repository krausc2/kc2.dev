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
	<p class="py-4">{splash}</p>
</div>

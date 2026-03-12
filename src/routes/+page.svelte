<script lang="ts">
	import { getSplash } from '$lib/splashes';

	let { data } = $props();

	/*
		#TODO Check if this causes a hydration mismatch.
	*/
	const splash = () => {
		const hour = new Date().getHours();

		if (hour >= 21 || hour < 3) {
			return getSplash('night');
		}

		return data.splash;
	};
</script>

<section class="flex flex-col pt-16 gap-8 px-8">
	<p class="text-5xl font-bold">krausc2</p>
	<p class="text-stone-400">// {@html splash()} <span class="cursor">|</span></p>

	<div class="grid grid-cols-2 mt-8">
		<p>G'day, I'm Curtis.</p>
		<div class="bg-stone-400 min-h-100 flex items-center justify-center">
			<p class="text-stone-500">Placeholder Image</p>
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

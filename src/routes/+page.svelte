<script lang="ts">
	import { getSplash } from "$lib/splashes";
</script>

<section class="flex flex-col gap-8">
	<p class="text-5xl font-bold">krausc2</p>
	<p class="font-mono text-stone-400">// {@html getSplash("day")} <span class="cursor">|</span></p>

	<div class="flex flex-col gap-8 lg:flex-row">
		<div class="flex flex-1 flex-col gap-8">
			<p>
				G'day, I'm Curtis, a Cyber Security Specialist and Undergraduate Student at Macquarie
				University, Sydney.
			</p>
			<p>
				Test of second paragraph.
			</p>
		</div>
		<div class="flex aspect-3/4 w-full flex-1 items-center justify-center bg-stone-400">
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

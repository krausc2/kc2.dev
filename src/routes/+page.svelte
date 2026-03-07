<script lang="ts">
	let { data } = $props();

	// Custom store that changes splash based on the time of day
	let splash = $derived.by(() => {
		const hour = new Date().getHours();
		if (hour >= 21 || hour < 3) {
			return "Go to sleep!";
		}
		return data.splash;
	});
</script>

<div>
	<p class="pt-12 text-5xl font-bold">krausc2</p>
	<p class="py-4">{splash}</p>
</div>

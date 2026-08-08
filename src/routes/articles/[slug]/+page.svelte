<script lang="ts">
	import { formatDate } from "$lib/utils";
	import BackButton from "$lib/components/ui/BackButton.svelte";

	let { data } = $props();
</script>

<div class="relative">
	<BackButton href="/articles" />
	<p class="invisible pb-4 text-5xl leading-none font-bold">"title"</p>
</div>

<article class="flex flex-col gap-4 border-t pt-4">
	<p class="text-2xl font-bold">{data.meta.title}</p>

	<p>{formatDate(data.meta.date)}</p>

	<div class="article-body">
		<data.content />
	</div>
</article>

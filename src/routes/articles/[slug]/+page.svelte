<script lang="ts">
	import { formatDate } from "$lib/utils";
	import BackButton from "$lib/components/ui/BackButton.svelte";

	let { data } = $props();
</script>

<div class="relative">
	<BackButton href="/articles" />
	<p class="invisible pb-4 text-5xl leading-none font-bold">"title"</p>
</div>

<article class="flex flex-col border-t">
	<div class="mx-auto w-full max-w-[70ch]">
		<p class="text-2xl font-bold pt-16 text-left">{data.meta.title}</p>

		<p class="text-sm pb-8">{formatDate(data.meta.date)}</p>

		<div class="article-body">
			<data.content />
		</div>
	</div>
</article>

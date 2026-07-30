<script>
	import { formatDate } from "$lib/utils";

	let { data } = $props();
</script>

<div class="relative">
	<a
		href="/articles"
		class="absolute top-0 left-0 z-50 flex h-12 w-12 cursor-pointer items-center justify-center border bg-stone-100 font-mono text-lg text-stone-900 transition-colors duration-700 hover:text-stone-500 hover:duration-200"
	>
		<span>&lt;</span>
	</a>
	<p class="invisible pb-4 text-5xl leading-none font-bold">"title"</p>
</div>

<article class="border-t pt-4 flex flex-col gap-4">
	<p class="font-bold text-2xl">{data.meta.title}</p>

	<p>{formatDate(data.meta.date)}</p>

	<div class="article-body">
		<data.content />
	</div>
</article>

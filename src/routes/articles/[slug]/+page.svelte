<!--
#TODO

Because article titles can be very long and clip the mobile layout, add `back` button 
to the top left of the article, then put the subtitle below it such that the subtitle 
can never clip the mobile layout.
-->

<script>
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

<article class="border-t pt-4">
	<h1>
		{data.meta.title}
	</h1>

	<h2>{data.meta.date}</h2>

	<div class="article-body">
		<data.content />
	</div>
</article>

<!--
#TODO

Because article titles can be very long and clip the mobile layout, add `back` button 
to the top left of the article, then put the subtitle below it such that the subtitle 
can never clip the mobile layout.
-->

<script>
	let { data } = $props();
</script>

<article>
	<h1>
		{data.meta.title}
	</h1>

	<h2>{data.meta.date}</h2>

	<div class="article-body">
		<data.content />
	</div>
</article>

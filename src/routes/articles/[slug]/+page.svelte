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

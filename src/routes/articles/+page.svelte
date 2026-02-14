<script lang="ts">
	let { data } = $props();
</script>

<div>
	{#each data.articles as article}
		<a href="/articles/{article.slug}">
      
			<h1>{article.title}</h1>

			<h2>{article.date.toLocaleDateString(undefined, { dateStyle: 'long' })}</h2>

			{#if article.tags.length > 0}
				{#each article.tags as tag}
					<h2>{tag}</h2>
				{/each}
			{/if}
		</a>
	{/each}
</div>

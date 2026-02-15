<script lang="ts">
	let { data } = $props();
</script>

<div>
	{#each data.articles as article}
		<a href="/articles/{article.slug}">
      
			<h1>{article.title}</h1>

			<p>Date created: {article.date.toLocaleDateString(undefined, { dateStyle: 'long' })}</p>

			<p>Last modified: {article.lastModified.toLocaleDateString(undefined, { dateStyle: 'long' })}</p>

			{#if article.tags.length > 0}
				{#each article.tags as tag}
					<h2>{tag}</h2>
				{/each}
			{/if}
		</a>
	{/each}
</div>

<script lang="ts">
	let { data } = $props();
</script>

<section class="mb-32 flex flex-col">
	<p class="mb-4 border-b pb-4 text-5xl leading-none font-bold">articles</p>

	<div>
		{#each data.articles as article (article.slug)}
			<a href="/articles/{article.slug}">
				<h1>{article.title}</h1>

				<p>Date created: {article.date}</p>

				<p>Last modified: {article.lastModified}</p>

				{#each article.tags as tag (tag)}
					<h2>{tag}</h2>
				{/each}
			</a>
		{/each}
	</div>
</section>

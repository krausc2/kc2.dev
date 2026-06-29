<!--
#TODO:

When article loading becomes prohibitively slow, consider converting setup to pagination and a server-side lazy load cache singleton. Create `src/lib/server/articles.ts` file 

Keep the throbber for UX and initial cache miss.

Add search by tags and keyword on server cache.

* let articleCache = null;
* ...
* const imports = import.meta.glob("$lib/articles/*.md");
* ... sort articles etc
* articleCache = loadedArticles;
* return articleCache;
-->

<script lang="ts">
	import { fade } from "svelte/transition";

	let { data } = $props();
</script>

<section class="mb-32 flex flex-col">
	<p class="mb-4 border-b pb-4 text-5xl leading-none font-bold">articles</p>

	<div class="grid">
		<!-- Await articles and display throbber -->
		{#await data.articles}
			<div class="col-start-1 row-start-1 animate-pulse" out:fade={{ duration: 300 }}>
				There is no server error. Your internet just genuinely sucks...
			</div>
		<!-- Then display streamed articles -->
		{:then articles}
			<div class="col-start-1 row-start-1">
				{#each articles as article, i (article.slug)}
					<div in:fade|global={{ duration: 300, delay: 300 + i * 150 }}>
						<a href="/articles/{article.slug}">
							<h1>{article.title}</h1>

							<p>Date created: {article.date}</p>

							<p>Last modified: {article.lastModified}</p>

							{#each article.tags as tag (tag)}
								<h2>{tag}</h2>
							{/each}
						</a>
					</div>
				{/each}
			</div>
		{/await}
	</div>
</section>

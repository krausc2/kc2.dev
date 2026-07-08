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
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import type { Article } from "./data/+server";

	let articles: Article[] | null = $state(null); // null until fetched from server

	onMount(async () => {
		const res = await fetch("/articles/data");
		articles = await res.json();
	});
</script>

<section class="mb-32 flex flex-col">
	<p class="mb-4 border-b pb-4 text-5xl leading-none font-bold">articles</p>

	<div class="flex flex-col gap-8 pt-8 pb-16 border-b border-stone-300">
		<p>Here lies a collection of miscellaneous articles I've written on a wide variety of topics including: tutorials, book (and album) reviews, philosophy, and other shower thoughts.</p>

		<p>Eventually, search by tags, keywords, or dates will be added. For now, use 'ctrl/cmd+f' like the genius you are.</p>
	</div>

	<div class="grid">
		<!-- Await articles and display throbber -->
		{#if !articles}
			<div class="col-start-1 row-start-1 animate-pulse" out:fade={{ duration: 300 }}>
				There is no server error. Your internet just genuinely sucks...
			</div>
		<!-- Then display streamed articles -->
		{:else}
			<div class="col-start-1 row-start-1 pt-8">
				{#each articles as article, i (article.slug)}
					<div class="" in:fade|global={{ duration: 300, delay: 300 + i * 150 }}>
						<a href="/articles/{article.slug}">
							<p>{article.title}</p>
							<p class="text-sm">Date created: {article.date}</p>
							{#each article.tags as tag (tag)}
								<p class="text-sm font-mono">#{tag}</p>
							{/each}
						</a>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

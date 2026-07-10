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
	<div class="mx-auto flex max-w-[100ch] flex-col px-8 pt-16">
		<p class="border-b pb-4 text-5xl leading-none font-bold">articles</p>

		<div class="flex flex-col gap-8 border-b border-stone-300 pt-4 pb-4">
			<p>
				This is a collection of miscellaneous articles I've written on a wide variety of topics
				including: tutorials, book (and album) reviews, philosophy, and other shower thoughts.
			</p>

			<p>
				Eventually, search by tags, keywords, and dates will be added. For now, use 'ctrl/cmd+f' like
				the genius you are.
			</p>
		</div>
	</div>

	<!-- #TODO Add read time estimates: "• 5 min read" -->
	<!-- #TODO Add search function -->
	<!-- #TODO Add tag pill buttons -->
	<!-- #TODO Colours for each tag based on vibes -->
	<div class="grid">
		<!-- Await articles and display throbber -->
		{#if !articles}
			<div
				class="col-start-1 row-start-1 mx-auto max-w-[100ch] animate-pulse px-8 pt-12"
				out:fade={{ duration: 300 }}
			>
				There is no server error. Your internet just genuinely sucks...
			</div>
			<!-- Then display streamed articles -->
		{:else}
			<div class="col-start-1 row-start-1 pt-8">
				{#each articles as article, i (article.slug)}
					<a
						href="/articles/{article.slug}"
						class="group relative block py-4"
						in:fade|global={{ duration: 300, delay: 300 + i * 150 }}
					>
						<div
							class="pointer-events-none absolute inset-0 z-0 transform-gpu bg-linear-to-r from-white to-stone-100 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:duration-200"
						></div>
						<div class="relative z-10 mx-auto max-w-[100ch] px-8">
							<p>{article.title}</p>
							<div class="flex flex-col md:flex-row md:items-baseline md:justify-between">
								<p class="text-sm">Date created: {article.date}</p>
								<p class="font-mono text-sm text-custom-coral">#{article.tag}</p>
							</div>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>

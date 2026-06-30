/*
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

# Possible fix?
(?) Eager glob import.
(?) Server parse and sort the markdown files when it boots up and return cached array to users.
(?) Essentially move the article sort logic to build/startup stage.
*/

import * as path from "node:path";

// Define Article interface with optional fields
export interface Article {
	slug: string;
	title?: string;
	date?: string;
	lastModified?: string;

	// #TODO Add a way to handle more than 1 tag, including in layout
	tags?: string[];
}

// Trigger streaming of articles from the server
export const load = () => {
	const articles = (async () => {
		const imports = import.meta.glob("$lib/articles/*.md");

		const loadedArticles: Article[] = await Promise.all(
			Object.entries(imports).map(async ([articleName, resolver]) => {
				const contents = (await resolver()) as { metadata?: Partial<Article> };
				const slug = path.parse(articleName).name;
				const meta = contents.metadata || {};

				return {
					slug,
					title: meta.title || "UNDEFINED",
					date: (meta.date || "UNDEFINED").slice(0, 10), // #TODO .slice is fragile so remove this eventually
					lastModified: (meta.lastModified || meta.date || "UNDEFINED").slice(0, 10),
					tags: meta.tags || []
				};
			})
		);

		/*
			#TODO Investigate a better way to sort the articles by date without creating
			new objects every single sort; this is kinda dookie.
			#TODO Add custom display limit of 20 articles before pagination.
		*/
		loadedArticles.sort(
			(a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
		);

		return loadedArticles;
	})();

	return { articles };
};

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

export const load = () => {
	const imports = import.meta.glob("$lib/articles/*.md", { eager: true });

	const articles: Article[] = Object.entries(imports).map(([articleName, contents]) => {
		const slug = path.parse(articleName).name;
		const meta = (contents as { metadata?: Partial<Article> }).metadata || {};

		return {
			slug,
			title: meta.title || "UNDEFINED",
			date: (meta.date || "UNDEFINED").slice(0, 10),
			lastModified: (meta.lastModified || meta.date || "UNDEFINED").slice(0, 10),
			tags: meta.tags || []
		};
	});

	/*
		#TODO Investigate a better way to sort the articles by date without creating
		new objects every single sort; this is kinda dookie.
		#TODO Add custom display limit of 20 articles before pagination.
	*/
	articles.sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());

	return { articles };
};

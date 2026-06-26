import { error } from "@sveltejs/kit";
import type { Article } from "../+page.server";

export async function load({ params }) {
	try {
		const article = await import(`$lib/articles/${params.slug}.md`);
		const meta = (article.metadata as Partial<Article>) || {};

		return {
			content: article.default,
			meta: {
				...meta,
				title: meta.title || "UNDEFINED",
				date: (meta.date || "UNDEFINED").slice(0, 10),
				lastModified: (meta.lastModified || meta.date || "UNDEFINED").slice(0, 10),
				tags: meta.tags || []
			}
		};
		// For resource that is not found, display 404
	} catch {
		throw error(404, `Could not find ${params.slug}`);
	}
}

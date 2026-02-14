import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
      // Dynamically import files from lib based on the slug parameter
      const article = await import(`$lib/articles/${params.slug}.md`);

      return {
        content: article.default,
        // Spread metadata, but convert date
        meta: {
          ...article.metadata,
          date: new Date(article.metadata.date)
        }
      }
    // For resource that is not found, display 404
    }catch (err) {
      throw error (404, `Could not find ${params.slug}`);
    }
}
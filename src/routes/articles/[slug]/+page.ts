import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
      const article = await import(`$lib/articles/${params.slug}.md`);

      return {
        content: article.default, // Passes body of file
        meta: article.metadata // Passes frontmatter data
      }
    }catch (err) {
      // Resource not found
      throw error (404, `Could not find ${params.slug}`);
    }
}
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
      // Dynamically import file from lib based on the slug parameter
      const article = await import(`$lib/articles/${params.slug}.md`);

      return {
        content: article.default, // Markdown content
        meta: article.metadata // Frontmatter (title, date, etc.)
      }
    }catch (err) {
      // Resource not found
      throw error (404, `Could not find ${params.slug}`);
    }
}
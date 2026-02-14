import * as path from 'node:path';

// Define Article interface, similar to a struct
interface Article {
  slug: string;
  title: string;
  date: Date;
  tags: string[];
}

export const load = () => {
  // Get all markdown files in the articles directory
  const imports = import.meta.glob('$lib/articles/*.md', { eager: true });

  const articles: Article[] = Object.entries(imports).map(([articleName, contents]) => {
    const slug = path.parse(articleName).name;
    const { metadata } = contents as { metadata: any };

    return {
      slug,
      title: metadata.title,
      date: new Date(metadata.date),
      tags: metadata.tags || [],
    }
  });

  articles.sort((a, b) => b.date.getTime() - a.date.getTime());

  return { articles };
}


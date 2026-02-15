import * as path from 'node:path';
import * as fs from 'node:fs';

// Define Article interface, similar to a struct
interface Article {
  slug: string;
  title: string;
  date: Date;
  lastModified: Date;
  tags: string[];
}

export const load = () => {
  // Get all markdown files in the articles directory
  const imports = import.meta.glob('$lib/articles/*.md', { eager: true });

  const articles: Article[] = Object.entries(imports).map(([articleName, contents]) => {
    const slug = path.parse(articleName).name;
    const { metadata } = contents as { metadata: any };

    // Pull stats from file
    const stats = fs.statSync(`src/lib/articles/${slug}.md`);

    return {
      slug,
      title: metadata.title,
      date: new Date(metadata.date),
      lastModified: stats.mtime,
      tags: metadata.tags || [],
    }
  });

  articles.sort((a, b) => b.date.getTime() - a.date.getTime());

  return { articles };
}


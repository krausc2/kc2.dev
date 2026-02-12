import * as path from 'node:path';

interface Article {
  slug: string;
  title: string;
  date: string;
  tags: string[];
}

export const load = () => {
  const imports = import.meta.glob('$lib/articles/*.md', { eager: true });

  const articles: Article[] = Object.entries(imports).map(([filePath, module]) => {
    const slug = path.parse(filePath).name;
    const { metadata } = module as { metadata: any };

    return {
      slug,
      title: metadata.title,
      date: metadata.date,
      tags: metadata.tags || []
    }
  });

  return { articles };
}


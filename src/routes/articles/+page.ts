import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  /*
    Creates a list of all markdown files based on dir structure
    without requiring database.
  */
  const imports = import.meta.glob('src/lib/articles/*.md', { eager: true });

  const articles = [];

  for (const path in imports) {

  }

  return  {articles};
}
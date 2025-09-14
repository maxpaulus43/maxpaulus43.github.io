import path from 'path';
import { BaseContent, processMarkdownFile, extractTitleFromContent, getMarkdownFiles, generateSlugFromFilename, generateSlugParams } from './markdown-utils';

const blogDirectory = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost extends BaseContent {
  slug: string;
  author: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export function getSortedBlogData(): Omit<BlogPost, 'contentHtml'>[] {
  const fileNames = getMarkdownFiles(blogDirectory);
  const allBlogData = fileNames.map((fileName) => {
    const slug = generateSlugFromFilename(fileName);
    const fullPath = path.join(blogDirectory, fileName);
    
    // For listing, we don't need to process the full markdown content
    const fs = require('fs');
    const matter = require('gray-matter');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const title = extractTitleFromContent(
      matterResult.data.title,
      matterResult.content,
      slug
    );

    return {
      slug,
      title,
      author: matterResult.data.author || 'Max Paulus',
      date: matterResult.data.date ? String(matterResult.data.date) : '',
      excerpt: matterResult.data.excerpt || '',
      tags: matterResult.data.tags || [],
    };
  });

  // Sort posts by date (newest first)
  return allBlogData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getBlogData(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const result = await processMarkdownFile(fullPath);
  
  if (!result) {
    return null;
  }

  const { matterResult, contentHtml } = result;
  const title = extractTitleFromContent(
    matterResult.data.title,
    matterResult.content,
    slug
  );

  return {
    slug,
    contentHtml,
    title,
    author: matterResult.data.author || 'Max Paulus',
    date: matterResult.data.date ? String(matterResult.data.date) : '',
    excerpt: matterResult.data.excerpt || '',
    tags: matterResult.data.tags || [],
  };
}

export function getAllBlogSlugs() {
  return generateSlugParams(blogDirectory);
}

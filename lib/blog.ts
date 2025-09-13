import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDirectory = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  tags: string[];
  contentHtml?: string;
}

export function getSortedBlogData(): BlogPost[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(blogDirectory);
  const allBlogData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Extract title from content if not in frontmatter
      let title = matterResult.data.title;
      if (!title) {
        // Try to extract title from first h1 in content
        const titleMatch = matterResult.content.match(/^#\s+(.+)$/m);
        title = titleMatch ? titleMatch[1] : slug;
      }

      // Combine the data with the slug
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
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Extract title from content if not in frontmatter
    let title = matterResult.data.title;
    if (!title) {
      // Try to extract title from first h1 in content
      const titleMatch = matterResult.content.match(/^#\s+(.+)$/m);
      title = titleMatch ? titleMatch[1] : slug;
    }

    // Combine the data with the slug and content
    return {
      slug,
      contentHtml,
      title,
      author: matterResult.data.author || 'Max Paulus',
      date: matterResult.data.date ? String(matterResult.data.date) : '',
      excerpt: matterResult.data.excerpt || '',
      tags: matterResult.data.tags || [],
    };
  } catch {
    return null;
  }
}

export function getAllBlogSlugs() {
  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
}

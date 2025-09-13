import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const portfolioDirectory = path.join(process.cwd(), 'content', 'portfolio');

export interface PortfolioPost {
  slug: string;
  title: string;
  excerpt: string;
  skills: string[];
  'start-date'?: string;
  'end-date'?: string;
  contentHtml?: string;
}

export function getSortedPortfolioData(): PortfolioPost[] {
  // Get file names under /content/portfolio
  const fileNames = fs.readdirSync(portfolioDirectory);
  const allPortfolioData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(portfolioDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title || slug,
        excerpt: matterResult.data.excerpt || '',
        skills: matterResult.data.skills || [],
        'start-date': matterResult.data['start-date'],
        'end-date': matterResult.data['end-date'],
      };
    });

  // Sort posts by title for now (you could add date sorting if needed)
  return allPortfolioData.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
}

export async function getPortfolioData(slug: string): Promise<PortfolioPost | null> {
  try {
    const fullPath = path.join(portfolioDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the slug and content
    return {
      slug,
      contentHtml,
      title: matterResult.data.title || slug,
      excerpt: matterResult.data.excerpt || '',
      skills: matterResult.data.skills || [],
      'start-date': matterResult.data['start-date'],
      'end-date': matterResult.data['end-date'],
    };
  } catch {
    return null;
  }
}

export function getAllPortfolioSlugs() {
  const fileNames = fs.readdirSync(portfolioDirectory);
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

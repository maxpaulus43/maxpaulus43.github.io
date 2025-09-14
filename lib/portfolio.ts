import path from 'path';
import { BaseContent, processMarkdownFile, extractTitleFromContent, getMarkdownFiles, generateSlugFromFilename, generateSlugParams } from './markdown-utils';

const portfolioDirectory = path.join(process.cwd(), 'content', 'portfolio');

export interface PortfolioPost extends BaseContent {
  slug: string;
  excerpt: string;
  skills: string[];
  'start-date'?: string;
  'end-date'?: string;
}

export function getSortedPortfolioData(): Omit<PortfolioPost, 'contentHtml'>[] {
  const fileNames = getMarkdownFiles(portfolioDirectory);
  const allPortfolioData = fileNames.map((fileName) => {
    const slug = generateSlugFromFilename(fileName);
    const fullPath = path.join(portfolioDirectory, fileName);
    
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
  const fullPath = path.join(portfolioDirectory, `${slug}.md`);
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
    excerpt: matterResult.data.excerpt || '',
    skills: matterResult.data.skills || [],
    'start-date': matterResult.data['start-date'],
    'end-date': matterResult.data['end-date'],
  };
}

export function getAllPortfolioSlugs() {
  return generateSlugParams(portfolioDirectory);
}

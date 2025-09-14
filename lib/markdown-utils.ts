import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface BaseContent {
  title: string;
  contentHtml: string;
}

/**
 * Process a markdown file and return parsed content with HTML
 */
export async function processMarkdownFile(filePath: string): Promise<{
  matterResult: matter.GrayMatterFile<string>;
  contentHtml: string;
} | null> {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      matterResult,
      contentHtml,
    };
  } catch {
    return null;
  }
}

/**
 * Extract title from frontmatter or content, with fallback
 */
export function extractTitleFromContent(
  frontmatterTitle: any,
  content: string,
  fallback: string
): string {
  if (frontmatterTitle) {
    return frontmatterTitle;
  }

  // Try to extract title from first h1 in content
  const titleMatch = content.match(/^#\s+(.+)$/m);
  return titleMatch ? titleMatch[1] : fallback;
}

/**
 * Get all markdown files from a directory
 */
export function getMarkdownFiles(directory: string): string[] {
  try {
    const fileNames = fs.readdirSync(directory);
    return fileNames.filter((fileName) => fileName.endsWith('.md'));
  } catch {
    return [];
  }
}

/**
 * Generate slug from filename by removing .md extension
 */
export function generateSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, '');
}

/**
 * Generate slug params for Next.js dynamic routes
 */
export function generateSlugParams(directory: string) {
  const fileNames = getMarkdownFiles(directory);
  return fileNames.map((fileName) => ({
    params: {
      slug: generateSlugFromFilename(fileName),
    },
  }));
}

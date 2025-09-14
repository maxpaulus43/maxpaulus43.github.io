import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const nowDirectory = path.join(process.cwd(), 'content', 'now');

export interface NowContent {
  title: string;
  description?: string;
  lastUpdated?: string;
  contentHtml: string;
}

export async function getNowData(): Promise<NowContent | null> {
  try {
    const fullPath = path.join(nowDirectory, 'index.md');
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
      title = titleMatch ? titleMatch[1] : 'What I\'m doing now';
    }

    return {
      title,
      description: matterResult.data.description || '',
      lastUpdated: matterResult.data.lastUpdated ? String(matterResult.data.lastUpdated) : '',
      contentHtml,
    };
  } catch {
    return null;
  }
}

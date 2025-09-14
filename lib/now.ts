import path from 'path';
import { BaseContent, processMarkdownFile, extractTitleFromContent } from './markdown-utils';

const nowDirectory = path.join(process.cwd(), 'content', 'now');

export interface NowContent extends BaseContent {
  description?: string;
  lastUpdated?: string;
}

export async function getNowData(): Promise<NowContent | null> {
  const fullPath = path.join(nowDirectory, 'index.md');
  const result = await processMarkdownFile(fullPath);
  
  if (!result) {
    return null;
  }

  const { matterResult, contentHtml } = result;
  const title = extractTitleFromContent(
    matterResult.data.title,
    matterResult.content,
    'What I\'m doing now'
  );

  return {
    title,
    description: matterResult.data.description || '',
    lastUpdated: matterResult.data.lastUpdated ? String(matterResult.data.lastUpdated) : '',
    contentHtml,
  };
}

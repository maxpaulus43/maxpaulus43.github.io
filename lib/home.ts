import path from 'path';
import { BaseContent, processMarkdownFile, extractTitleFromContent } from './markdown-utils';

const homeDirectory = path.join(process.cwd(), 'content', 'home');

export interface HomeContent extends BaseContent {
    description?: string;
    lastUpdated?: string;
}

export async function getHomeData(): Promise<HomeContent | null> {
    const fullPath = path.join(homeDirectory, 'index.md');
    const result = await processMarkdownFile(fullPath);
    
    if (!result) {
        return null;
    }

    const { matterResult, contentHtml } = result;
    const title = extractTitleFromContent(
        matterResult.data.title,
        matterResult.content,
        'Home'
    );

    return {
        title,
        description: matterResult.data.description || '',
        lastUpdated: matterResult.data.lastUpdated ? String(matterResult.data.lastUpdated) : '',
        contentHtml,
    };
}

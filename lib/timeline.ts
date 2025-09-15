import path from 'path';

export interface TimelineItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  achievements?: string[];
}

export interface TimelineData {
  experiences: TimelineItem[];
}

const timelineDirectory = path.join(process.cwd(), 'content/timeline');

export function getTimelineData(): TimelineItem[] {
  const fs = require('fs');
  const fullPath = path.join(timelineDirectory, 'experiences.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const data: TimelineData = JSON.parse(fileContents);

  // Return experiences in chronological order (most recent first)
  return data.experiences;
}

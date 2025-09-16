import path from 'path';

export interface TimelineItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  achievements?: string[];
  type: 'professional' | 'personal';
  slug?: string;
}

export interface TimelineData {
  experiences: TimelineItem[];
}

const timelineDirectory = path.join(process.cwd(), 'content/timeline');

interface PersonalProject {
  title: string;
  excerpt: string;
  skills: string[];
  slug: string;
  content: string;
}

function parsePersonalProjects(): TimelineItem[] {
  const fs = require('fs');
  const matter = require('gray-matter');
  const portfolioDirectory = path.join(process.cwd(), 'content/portfolio');

  try {
    const files = fs.readdirSync(portfolioDirectory).filter((file: string) => file.endsWith('.md'));
    const projects: TimelineItem[] = [];

    for (const file of files) {
      const fullPath = path.join(portfolioDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      const slug = file.replace('.md', '');

      // Skip professional experiences that are already in experiences.json
      if (['amazon', 'aerserv'].includes(slug)) {
        continue;
      }

      // Extract frontmatter data
      const title = matterResult.data.title || slug;
      const excerpt = matterResult.data.excerpt || '';
      const skills = matterResult.data.skills || [];

      // Map personal projects to timeline format with estimated dates
      let duration = matterResult.data.duration;
      let location = 'Personal Project';

      if (slug === 'maxpaul_us') {
        duration = '2019 - Present';
        location = 'Personal Project';
      } else if (slug === 'zeitgeist') {
        duration = '2018';
        location = 'Hackathon Project';
      }

      projects.push({
        title: title,
        company: location,
        duration: duration,
        location: 'Remote',
        description: excerpt,
        skills: skills,
        type: 'personal',
        slug: slug
      });
    }

    return projects;
  } catch (error) {
    console.error('Error parsing personal projects:', error);
    return [];
  }
}

export function getTimelineData(): TimelineItem[] {
  const fs = require('fs');
  const fullPath = path.join(timelineDirectory, 'experiences.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const data: TimelineData = JSON.parse(fileContents);

  // Return experiences in chronological order (most recent first)
  return data.experiences;
}

export function getMergedTimelineData(): TimelineItem[] {
  const professionalExperiences = getTimelineData();
  const personalProjects = parsePersonalProjects();


  // Add type and slug to professional experiences
  const professionalWithType = professionalExperiences.map(exp => ({
    ...exp,
    type: 'professional' as const,
    slug: exp.company.toLowerCase().replace(/[^a-z0-9]/g, '-')
  }));

  // Merge and sort chronologically (most recent first)
  const allItems = [...professionalWithType, ...personalProjects];

  return allItems.sort((a, b) => {
    // Simple date comparison - this is a basic implementation
    // You might want to enhance this with proper date parsing
    const dateA = new Date(a.duration.split(' - ')[0] || a.duration);
    const dateB = new Date(b.duration.split(' - ')[0] || b.duration);
    return dateB.getTime() - dateA.getTime();
  });
}

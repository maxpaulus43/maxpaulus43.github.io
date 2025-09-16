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

      // Skip professional experiences
      if (matterResult.data.company) continue;

      // Extract frontmatter data
      const title = matterResult.data.title || slug;
      const excerpt = matterResult.data.excerpt || '';
      const skills = matterResult.data.skills || [];
      let duration = matterResult.data.duration;
      // Map personal projects to timeline format with estimated dates
      let location = 'Personal Project';

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
  const matter = require('gray-matter');
  const portfolioDirectory = path.join(process.cwd(), 'content/portfolio');

  try {
    const professionalExperiences: TimelineItem[] = [];
    const professionalSlugs = ['amazon', 'aerserv', 'tallan'];

    for (const slug of professionalSlugs) {
      const fullPath = path.join(portfolioDirectory, `${slug}.md`);

      if (fs.existsSync(fullPath)) {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        const frontmatter = matterResult.data;

        professionalExperiences.push({
          title: frontmatter.position || frontmatter.title,
          company: frontmatter.company || frontmatter.title,
          duration: frontmatter.duration,
          location: frontmatter.location,
          description: frontmatter.excerpt,
          skills: frontmatter.skills || [],
          achievements: frontmatter.achievements || [],
          type: 'professional',
          slug: slug
        });
      }
    }

    // Return experiences in chronological order (most recent first)
    return professionalExperiences.sort((a, b) => {
      const dateA = new Date(a.duration.split(' - ')[0] || a.duration);
      const dateB = new Date(b.duration.split(' - ')[0] || b.duration);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error('Error reading professional experiences:', error);
    return [];
  }
}

export function getMergedTimelineData(): TimelineItem[] {
  const professionalExperiences = getTimelineData();
  const personalProjects = parsePersonalProjects();

  // Merge and sort chronologically (most recent first)
  const allItems = [...professionalExperiences, ...personalProjects];

  return allItems.sort((a, b) => {
    // Simple date comparison - this is a basic implementation
    // You might want to enhance this with proper date parsing
    const dateA = new Date(a.duration.split(' - ')[0] || a.duration);
    const dateB = new Date(b.duration.split(' - ')[0] || b.duration);
    return dateB.getTime() - dateA.getTime();
  });
}

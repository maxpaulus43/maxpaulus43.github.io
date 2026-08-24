import HomeContent from './components/HomeContent';
import { getSortedBlogData } from '../lib/blog';
import { getSortedPortfolioData } from '../lib/portfolio';

export default function Home() {
  const allWork = getSortedPortfolioData();
  const featuredOrder = ['chefness', 'internal-deployment-mcp-server', 'shadowdark-character-sheet'];
  const projects = featuredOrder.map((slug) => allWork.find((item) => item.slug === slug)).filter((item): item is NonNullable<typeof item> => Boolean(item));
  const experience = allWork.filter((item) => item.company).slice(0, 3);
  const posts = getSortedBlogData().filter((post) => ['story_telling', 'discovery_cycle'].includes(post.slug));
  return <HomeContent projects={projects} experience={experience} posts={posts} />;
}

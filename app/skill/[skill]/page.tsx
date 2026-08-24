import Layout from '../../components/Layout';
import Link from 'next/link';
import ContentCard from '../../components/ContentCard';
import { getPortfolioBySkill, getAllSkills } from '../../../lib/portfolio';
import { notFound } from 'next/navigation';

interface SkillPageProps { params: Promise<{ skill: string }>; }
export async function generateStaticParams() { return getAllSkills().map((skill) => ({ skill })); }
export default async function SkillPage({ params }: SkillPageProps) {
  const { skill } = await params; const projects = getPortfolioBySkill(skill); if (!projects.length) notFound();
  return <Layout><div className="page-frame index-page"><Link href="/portfolio" className="back-link">← Return to work</Link><header className="page-intro page-intro--compact"><p className="eyebrow">Technical index</p><h1>{skill}</h1><p>{projects.length} archive entr{projects.length === 1 ? 'y' : 'ies'} using this tool or discipline.</p></header><section className="paper-panel index-sheet"><div className="paper-label">Matching work</div>{projects.map((project, index) => <ContentCard key={project.slug} item={project} basePath="/portfolio" tagBasePath="/skill" tagField="skills" highlightedTag={skill} variant="portfolio" index={index} />)}</section></div></Layout>;
}

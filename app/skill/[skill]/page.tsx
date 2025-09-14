import Layout from '../../components/Layout';
import Link from 'next/link';
import ContentCard from '../../components/ContentCard';
import { getPortfolioBySkill, getAllSkills } from '../../../lib/portfolio';
import { notFound } from 'next/navigation';

interface SkillPageProps {
    params: {
        skill: string;
    };
}

export async function generateStaticParams() {
    const skills = getAllSkills();
    return skills.map((skill) => ({
        skill: skill,
    }));
}

export default async function SkillPage({ params }: SkillPageProps) {
    const { skill } = await params;
    const projects = getPortfolioBySkill(skill);

    // If no projects found for this skill, show 404
    if (projects.length === 0) {
        notFound();
    }

    // Capitalize skill name for display
    const displaySkill = skill.charAt(0).toUpperCase() + skill.slice(1);

    return (
        <Layout>
            <div>
                <div className="mb-6">
                    <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 underline text-sm">
                        ← Back to Portfolio
                    </Link>
                </div>

                <h1 className="text-3xl font-bold mb-4">PROJECTS WITH {displaySkill.toUpperCase()}</h1>
                <p className="text-gray-600 mb-6">
                    Found {projects.length} project{projects.length !== 1 ? 's' : ''} using {displaySkill}
                </p>

                <div className="flex flex-col space-y-4">
                    {projects.map((project) => (
                        <ContentCard 
                            key={project.slug} 
                            item={project}
                            basePath="/portfolio"
                            tagBasePath="/skill"
                            tagField="skills"
                            highlightedTag={skill}
                            tagLabel="Skills:"
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

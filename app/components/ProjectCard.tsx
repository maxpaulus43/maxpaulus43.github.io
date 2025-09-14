'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
    project: {
        slug: string;
        title: string;
        excerpt: string;
        skills: string[];
    };
    highlightedSkill?: string;
}

export default function ProjectCard({ project, highlightedSkill }: ProjectCardProps) {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/portfolio/${project.slug}`);
    };

    const handleSkillClick = (e: React.MouseEvent, skill: string) => {
        e.stopPropagation();
        router.push(`/skill/${skill.toLowerCase()}`);
    };

    return (
        <div
            className="shadow p-3 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={handleCardClick}
        >
            <div>
                <h3 className="text-xl font-semibold">
                    {project.title}
                </h3>
                <p className="text-gray-700 text-base">{project.excerpt}</p>
            </div>
            <div className="pt-3">
                <p className="text-sm font-medium mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill: string) => (
                        <button
                            key={skill}
                            onClick={(e) => handleSkillClick(e, skill)}
                            className={`inline-block px-3 py-1 text-sm font-semibold transition-colors ${highlightedSkill && skill.toLowerCase() === highlightedSkill.toLowerCase()
                                ? 'bg-blue-200 text-blue-800'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            #{skill}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

'use client'

import { PortfolioPost } from "@/lib/portfolio";
import { useState } from "react";
import Layout from "./Layout";
import ContentCard from "./ContentCard";


interface PortfolioContentProps {
    projects: Omit<PortfolioPost, 'contentHtml'>[];
}

export default function PortfolioContent({ projects }: PortfolioContentProps) {
    const [showContactModal, setShowContactModal] = useState(false);

    const handleContactClick = () => {
        setShowContactModal(true);
    };

    const handleContactModalClose = () => {
        setShowContactModal(false);
    };

    return (<Layout
        showContactModal={showContactModal}
        onContactModalClose={handleContactModalClose}
        onContactClick={handleContactClick}>
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-white">Work Experience</h1>
                <p className="text-gray-400 text-lg mb-6">
                    Building scalable applications at leading technology companies
                </p>
                <div className="flex gap-4 mb-6">
                    <a
                        href="Max-Paulus-Resume.pdf"
                        className="btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-download"></i>
                        Download Resume
                    </a>
                    <button
                        onClick={handleContactClick}
                        className="btn-secondary"
                    >
                        <i className="fa fa-envelope"></i>
                        Get In Touch
                    </button>
                </div>
            </div>

            <div className="grid gap-6">
                {projects.map((project) => (
                    <ContentCard
                        key={project.slug}
                        item={project}
                        basePath="/portfolio"
                        tagBasePath="/skill"
                        tagField="skills"
                        variant="portfolio"
                    />
                ))}
            </div>

            {/* Skills Overview Section */}
            <div className="mt-12 p-6 bg-gray-900 border border-gray-800 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Technical Skills</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="text-cyan-400 font-semibold mb-3">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML', 'CSS'].map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-cyan-400 font-semibold mb-3">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Java', 'Ruby', 'Python', 'Node.js', 'MySQL', 'AWS'].map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-cyan-400 font-semibold mb-3">Tools & Platforms</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Android', 'iOS', 'CI/CD', 'Git', 'Project Management'].map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>)

}
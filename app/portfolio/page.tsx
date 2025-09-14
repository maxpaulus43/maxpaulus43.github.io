import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { getSortedPortfolioData } from '../../lib/portfolio';

export default function Portfolio() {
  const projects = getSortedPortfolioData();

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold mb-4">PORTFOLIO</h1>
        <p className="text-sm mb-3">
          You can see my resumé{' '}
          <a
            href="https://www.dropbox.com/s/322p5hn4l8co8u5/resume_2019.pdf?dl=0"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            here
          </a>
        </p>

        <div className="flex flex-col space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

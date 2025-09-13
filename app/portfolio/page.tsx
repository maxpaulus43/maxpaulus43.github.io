import Layout from '../components/Layout';
import Link from 'next/link';
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
            <Link key={project.slug} href={`/portfolio/${project.slug}`}>
              <div className="shadow p-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-700 text-base">{project.excerpt}</p>
                </div>
                <div className="pt-3">
                  <p className="text-sm font-medium mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500"
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

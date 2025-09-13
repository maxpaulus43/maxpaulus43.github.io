import Layout from '../components/Layout';
import Link from 'next/link';

// Mock portfolio data
const mockProjects = [
  {
    id: 'aerserv',
    title: 'AerServ - Mobile Ad Platform',
    excerpt: 'Built and maintained a high-performance mobile advertising platform serving billions of ad requests daily.',
    path: '/portfolio/aerserv',
    skills: [
      { id: 'javascript', path: '/skill/javascript' },
      { id: 'react', path: '/skill/react' },
      { id: 'node', path: '/skill/node' },
      { id: 'aws', path: '/skill/aws' }
    ]
  },
  {
    id: 'amazon',
    title: 'Amazon - Cloud Infrastructure',
    excerpt: 'Developed scalable cloud infrastructure solutions and automation tools for enterprise clients.',
    path: '/portfolio/amazon',
    skills: [
      { id: 'python', path: '/skill/python' },
      { id: 'aws', path: '/skill/aws' },
      { id: 'terraform', path: '/skill/terraform' },
      { id: 'kubernetes', path: '/skill/kubernetes' }
    ]
  },
  {
    id: 'zeitgeist',
    title: 'Zeitgeist - Social Analytics',
    excerpt: 'Created real-time social media analytics platform with machine learning insights.',
    path: '/portfolio/zeitgeist',
    skills: [
      { id: 'vue', path: '/skill/vue' },
      { id: 'python', path: '/skill/python' },
      { id: 'machine-learning', path: '/skill/machine-learning' },
      { id: 'postgresql', path: '/skill/postgresql' }
    ]
  }
];

export default function Portfolio() {
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
          {mockProjects.map((project) => (
            <Link key={project.id} href={project.path}>
              <div className="shadow p-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-700 text-base">{project.excerpt}</p>
                </div>
                <div className="pt-3">
                  <p className="text-sm font-medium mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Link key={skill.id} href={skill.path}>
                        <span className="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500 hover:bg-gray-200 transition-colors">
                          #{skill.id}
                        </span>
                      </Link>
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

import type { PortfolioPost } from '@/lib/portfolio';
import ContentCard from './ContentCard';
import Layout from './Layout';

interface PortfolioContentProps { projects: Omit<PortfolioPost, 'contentHtml'>[]; }

export default function PortfolioContent({ projects }: PortfolioContentProps) {
  const professional = projects.filter((project) => project.company);
  const personal = projects.filter((project) => !project.company);
  return (
    <Layout>
      <div className="page-frame index-page">
        <header className="page-intro">
          <p className="eyebrow">Archive / 2016—Present</p>
          <h1>Work</h1>
          <p>A record of products, systems, experiments, and teams. The through-line is useful software made for people with real problems.</p>
          <div className="page-intro__actions"><a href="/Max-Paulus-Resume.pdf" target="_blank" rel="noreferrer">Download résumé ↗</a><a href="mailto:maxpaulus43@gmail.com">Start a conversation ↗</a></div>
        </header>

        <section className="paper-panel index-sheet">
          <div className="paper-label">Independent work</div>
          <div className="index-list">
            {personal.map((project, index) => <ContentCard key={project.slug} item={project} basePath="/portfolio" tagBasePath="/skill" tagField="skills" variant="portfolio" index={index} />)}
          </div>
        </section>

        <section className="dark-panel career-sheet">
          <div className="paper-label">Employment ledger</div>
          {professional.map((project) => (
            <a className="career-row" href={`/portfolio/${project.slug}`} key={project.slug}>
              <time>{project.duration}</time><div><h2>{project.position || project.title}</h2><p>{project.company} · {project.location}</p><span>{project.excerpt}</span></div><b>→</b>
            </a>
          ))}
        </section>
      </div>
    </Layout>
  );
}

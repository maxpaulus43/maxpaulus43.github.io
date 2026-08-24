import { notFound } from 'next/navigation';
import Link from 'next/link';
import Layout from '../../components/Layout';
import ArchiveSketch from '../../components/ArchiveSketch';
import { getPortfolioData, getAllPortfolioSlugs } from '../../../lib/portfolio';

interface PortfolioPageProps { params: Promise<{ slug: string }>; }

export default async function PortfolioPost({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const post = await getPortfolioData(slug);
  if (!post) notFound();

  return (
    <Layout>
      <article className="page-frame detail-page">
        <Link href="/portfolio" className="back-link">← Return to work archive</Link>
        <header className="detail-header">
          <div><p className="eyebrow">Case file / {post.company ? 'Experience' : 'Independent work'}</p><h1>{post.position || post.title}</h1>{post.company && <p className="detail-company">{post.company}</p>}<p className="detail-deck">{post.excerpt}</p></div>
          <aside className="file-meta"><div><span>Period</span><strong>{post.duration || 'Ongoing'}</strong></div><div><span>Location</span><strong>{post.location || 'Remote'}</strong></div><div><span>Tools</span><strong>{post.skills.slice(0, 5).join(', ')}</strong></div></aside>
        </header>
        <div className="case-visual"><ArchiveSketch index={post.company ? 2 : 0} label={post.title} /><span>System study · {post.title}</span></div>
        {post.links && post.links.length > 0 && <div className="detail-links">{post.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.name} ↗</a>)}</div>}
        {post.achievements && post.achievements.length > 0 && <section className="achievement-sheet"><div className="paper-label">Selected outcomes</div><ol>{post.achievements.map((achievement, index) => <li key={achievement}><span>{String(index + 1).padStart(2, '0')}</span><p>{achievement}</p></li>)}</ol></section>}
        <div className="article-paper"><div className="paper-label">Field notes</div><div className="prose archive-prose" dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} /></div>
        <div className="detail-tags">{post.skills.map((skill) => <Link key={skill} href={`/skill/${skill.toLowerCase()}`}>{skill}</Link>)}</div>
      </article>
    </Layout>
  );
}

export async function generateStaticParams() { return getAllPortfolioSlugs().map((item) => ({ slug: item.params.slug })); }

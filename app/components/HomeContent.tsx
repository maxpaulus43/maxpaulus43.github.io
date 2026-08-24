'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { BlogPost } from '@/lib/blog';
import type { PortfolioPost } from '@/lib/portfolio';
import ArchiveSketch from './ArchiveSketch';
import ContactModal from './ContactModal';
import Layout from './Layout';

interface HomeContentProps {
  projects: Omit<PortfolioPost, 'contentHtml'>[];
  experience: Omit<PortfolioPost, 'contentHtml'>[];
  posts: Omit<BlogPost, 'contentHtml'>[];
}

export default function HomeContent({ projects, experience, posts }: HomeContentProps) {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <Layout onContactClick={() => setContactOpen(true)}>
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      <section className="archive-hero page-frame">
        <div className="archive-hero__copy">
          <p className="eyebrow">Software developer · California</p>
          <h1>Max Paulus</h1>
          <p className="hero-declaration">I make software for real people.</p>
          <div className="hero-bio">
            <p>I’m a software developer and lifelong learner. I build pragmatic systems that help teams work better and ship with confidence.</p>
            <p>Currently focused on automation, AI agents, developer tools, and the small details that make software feel considered.</p>
          </div>
          <div className="hero-actions">
            <Link href="/portfolio" className="text-link">Explore selected work <span>→</span></Link>
            <button type="button" className="text-link text-link--button" onClick={() => setContactOpen(true)}>Send a note <span>↗</span></button>
          </div>
        </div>
        <div className="portrait-archive">
          <div className="portrait-backing" />
          <figure className="portrait-photo">
            <Image
              src="/max_profile_6.webp"
              alt="Portrait of Max Paulus"
              width={640}
              height={640}
              sizes="(max-width: 620px) 70vw, (max-width: 900px) 55vw, 420px"
              priority
              fetchPriority="high"
            />
            <figcaption>Max Paulus · archive no. 043</figcaption>
          </figure>
          <aside className="portrait-note">Building quietly.<br />Shipping thoughtfully.<br />Learning constantly.<span>M. Paulus</span></aside>
          <span className="paperclip" aria-hidden="true" />
        </div>
      </section>

      <section className="paper-panel work-sheet page-frame" aria-labelledby="selected-work">
        <div className="paper-label" id="selected-work">Selected work</div>
        <div className="archive-list">
          {projects.map((project, index) => (
            <Link href={`/portfolio/${project.slug}`} className="archive-record" key={project.slug}>
              <ArchiveSketch index={index} label={project.skills[0] || 'project'} />
              <div className="archive-record__copy">
                <div className="record-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.duration}</span></div>
                <h2>{project.title}</h2>
                <p>{project.excerpt}</p>
                <small>{project.skills.slice(0, 4).join(' · ')}</small>
              </div>
              <span className="record-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
        <Link href="/portfolio" className="panel-link">View the complete archive <span>→</span></Link>
      </section>

      <div className="home-lower page-frame">
        <section className="dark-panel experience-panel" aria-labelledby="experience-title">
          <div className="paper-label" id="experience-title">Experience</div>
          <div className="experience-line">
            {experience.map((item) => (
              <Link href={`/portfolio/${item.slug}`} className="experience-entry" key={item.slug}>
                <time>{item.duration}</time>
                <div><h3>{item.position || item.title}</h3><p>{item.company}</p><span>{item.excerpt}</span></div>
              </Link>
            ))}
          </div>
          <a className="panel-link panel-link--dark" href="/Max-Paulus-Resume.pdf" target="_blank" rel="noreferrer">Open résumé <span>↗</span></a>
        </section>

        <section className="dark-panel notes-panel" aria-labelledby="notes-title">
          <div className="paper-label" id="notes-title">Notes</div>
          {posts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} className="note-entry" key={post.slug}>
              <ArchiveSketch index={index + 1} label="field note" />
              <div><time>{post.date}</time><h3>{post.title}</h3><p>{post.excerpt}</p><span>Read note →</span></div>
            </Link>
          ))}
          <Link href="/blog" className="panel-link panel-link--dark">All writing <span>→</span></Link>
        </section>
      </div>
    </Layout>
  );
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getBlogData, getAllBlogSlugs } from '../../../lib/blog';

interface BlogPageProps { params: Promise<{ slug: string }>; }

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getBlogData(slug);
  if (!post) notFound();
  return (
    <Layout>
      <article className="page-frame reading-page">
        <Link href="/blog" className="back-link">← Return to all notes</Link>
        <header className="reading-header"><p className="eyebrow">Field note · {post.date}</p><h1>{post.title}</h1><p>{post.excerpt}</p><div className="reading-byline"><span>Written by {post.author}</span><span>Filed under {post.tags.join(' · ')}</span></div></header>
        <div className="article-paper article-paper--reading"><div className="prose archive-prose" dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} /></div>
        <div className="detail-tags">{post.tags.map((tag) => <Link key={tag} href={`/tag/${tag.toLowerCase()}`}>{tag}</Link>)}</div>
      </article>
    </Layout>
  );
}

export async function generateStaticParams() { return getAllBlogSlugs().map((item) => ({ slug: item.params.slug })); }

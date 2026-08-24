import Layout from '../../components/Layout';
import Link from 'next/link';
import ContentCard from '../../components/ContentCard';
import { getBlogsByTag, getAllBlogTags } from '../../../lib/blog';
import { notFound } from 'next/navigation';

interface TagPageProps { params: Promise<{ tag: string }>; }
export async function generateStaticParams() { return getAllBlogTags().map((tag) => ({ tag })); }
export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params; const posts = getBlogsByTag(tag); if (!posts.length) notFound();
  return <Layout><div className="page-frame index-page"><Link href="/blog" className="back-link">← Return to writing</Link><header className="page-intro page-intro--compact"><p className="eyebrow">Index term</p><h1>#{tag}</h1><p>{posts.length} note{posts.length === 1 ? '' : 's'} filed under this subject.</p></header><section className="paper-panel index-sheet"><div className="paper-label">Matching notes</div>{posts.map((post, index) => <ContentCard key={post.slug} item={post} basePath="/blog" tagBasePath="/tag" tagField="tags" highlightedTag={tag} showDate variant="blog" index={index} />)}</section></div></Layout>;
}

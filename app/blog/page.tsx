import Layout from '../components/Layout';
import ContentCard from '../components/ContentCard';
import { getSortedBlogData } from '../../lib/blog';

export default function Blog() {
  const posts = getSortedBlogData();
  return (
    <Layout>
      <div className="page-frame index-page">
        <header className="page-intro"><p className="eyebrow">Notes from the field</p><h1>Writing</h1><p>Ideas about software, psychology, learning, and the practical work of making sense of things.</p></header>
        <section className="paper-panel index-sheet"><div className="paper-label">Published notes</div><div className="index-list">{posts.map((post, index) => <ContentCard key={post.slug} item={post} basePath="/blog" tagBasePath="/tag" tagField="tags" showDate variant="blog" index={index} />)}</div></section>
      </div>
    </Layout>
  );
}

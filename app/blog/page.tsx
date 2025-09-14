import Layout from '../components/Layout';
import ContentCard from '../components/ContentCard';
import { getSortedBlogData } from '../../lib/blog';

export default function Blog() {
  const posts = getSortedBlogData();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">Blog</h1>
          <p className="text-gray-400 text-lg mb-6">
            Thoughts on software development, productivity, and life lessons
          </p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <ContentCard 
              key={post.slug} 
              item={post}
              basePath="/blog"
              tagBasePath="/tag"
              tagField="tags"
              showDate={true}
              variant="blog"
            />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

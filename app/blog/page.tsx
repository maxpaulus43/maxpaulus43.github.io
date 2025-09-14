import Layout from '../components/Layout';
import ContentCard from '../components/ContentCard';
import { getSortedBlogData } from '../../lib/blog';

export default function Blog() {
  const blogPosts = getSortedBlogData();

  return (
    <Layout>
      <div>
        {/* Blog Posts */}
        <div className="flex flex-col space-y-4">
          {blogPosts.map((post) => (
            <ContentCard 
              key={post.slug} 
              item={post}
              basePath="/blog"
              tagBasePath="/tag"
              tagField="tags"
              showDate={true}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

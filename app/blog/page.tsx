import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import { getSortedBlogData } from '../../lib/blog';

export default function Blog() {
  const blogPosts = getSortedBlogData();

  return (
    <Layout>
      <div>
        {/* Blog Posts */}
        <div className="flex flex-col space-y-4">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

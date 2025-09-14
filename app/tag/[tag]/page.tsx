import Layout from '../../components/Layout';
import Link from 'next/link';
import BlogCard from '../../components/BlogCard';
import { getBlogsByTag, getAllBlogTags } from '../../../lib/blog';
import { notFound } from 'next/navigation';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  const tags = getAllBlogTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = getBlogsByTag(tag);

  // If no posts found for this tag, show 404
  if (posts.length === 0) {
    notFound();
  }

  // Capitalize tag name for display
  const displayTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  return (
    <Layout>
      <div>
        <div className="mb-6">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline text-sm">
            ← Back to Blog
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">POSTS TAGGED WITH {displayTag.toUpperCase()}</h1>
        <p className="text-gray-600 mb-6">
          Found {posts.length} post{posts.length !== 1 ? 's' : ''} tagged with {displayTag}
        </p>
        
        <div className="flex flex-col space-y-4">
          {posts.map((post) => (
            <BlogCard 
              key={post.slug} 
              post={post} 
              highlightedTag={tag}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

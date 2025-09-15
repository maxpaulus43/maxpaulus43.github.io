import { notFound } from 'next/navigation';
import Link from 'next/link';
import Layout from '../../components/Layout';
import TagGroup from '../../components/TagGroup';
import { getBlogData, getAllBlogSlugs } from '../../../lib/blog';

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getBlogData(slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-4">
            <p className="text-base sm:text-lg">By {post.author}</p>
            {post.date && <p className="text-sm">{post.date}</p>}
          </div>
          {post.excerpt && (
            <p className="text-lg sm:text-xl text-gray-600 mb-4">{post.excerpt}</p>
          )}
          <TagGroup
            tags={post.tags || []}
            tagBasePath="/tag"
            label="Tags:"
            variant="default"
            size="md"
            prefix="#"
            className="mb-6"
          />
        </div>
        
        <article 
          className="prose prose-base sm:prose-lg lg:prose-xl max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
        />
        
        <div className="mt-8 pt-8 border-t">
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </Layout>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  
  return slugs.map((item) => ({
    slug: item.params.slug,
  }));
}

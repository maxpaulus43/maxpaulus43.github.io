import { notFound } from 'next/navigation';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getPortfolioData, getAllPortfolioSlugs } from '../../../lib/portfolio';

interface PortfolioPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PortfolioPost({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const post = await getPortfolioData(slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
          {post.excerpt && (
            <p className="text-lg sm:text-xl text-gray-600 mb-4">{post.excerpt}</p>
          )}
          {post.skills && (
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Skills:</p>
              <div className="flex flex-wrap gap-2">
                {post.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <article 
          className="prose prose-base sm:prose-lg lg:prose-xl max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-800"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
        />
        
        <div className="mt-8 pt-8 border-t">
          <Link 
            href="/portfolio" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </Layout>
  );
}

// Generate static params for all portfolio posts
export async function generateStaticParams() {
  const slugs = getAllPortfolioSlugs();
  
  return slugs.map((item) => ({
    slug: item.params.slug,
  }));
}

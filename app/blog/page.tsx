import Layout from '../components/Layout';
import Link from 'next/link';
import { getSortedBlogData } from '../../lib/blog';

export default function Blog() {
  const blogPosts = getSortedBlogData();

  return (
    <Layout>
      <div>
        {/* Blog Posts */}
        <div className="flex flex-col space-y-4">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="shadow p-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-gray-700 text-base">{post.excerpt}</p>
                  <p className="text-gray-400 text-sm">{post.date}</p>
                </div>
                <div className="pt-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

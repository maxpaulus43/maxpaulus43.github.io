import Layout from '../components/Layout';
import Link from 'next/link';

// Mock blog data
const mockBlogPosts = [
  {
    id: 'maxpaul-us',
    title: 'maxpaul.us Is Born!',
    author: 'Max Paulus',
    excerpt: 'This website is long overdue, and should have been live many months ago, but alas, it has been beautifully born!',
    date: 'July 21, 2019',
    path: '/blog/maxpaul-us',
    tags: [
      { id: 'programming', path: '/tag/programming' },
      { id: 'vue', path: '/tag/vue' },
      { id: 'frontend', path: '/tag/frontend' }
    ]
  },
  {
    id: 'discovery-cycle',
    title: 'The Discovery Cycle',
    author: 'Max Paulus',
    excerpt: 'A framework for continuous learning and personal growth through structured exploration and reflection.',
    date: 'March 15, 2020',
    path: '/blog/discovery-cycle',
    tags: [
      { id: 'productivity', path: '/tag/productivity' },
      { id: 'learning', path: '/tag/learning' },
      { id: 'personal-growth', path: '/tag/personal-growth' }
    ]
  },
  {
    id: 'stoicism',
    title: 'Modern Stoicism for Developers',
    author: 'Max Paulus',
    excerpt: 'How ancient philosophy can help modern software developers build resilience and maintain focus.',
    date: 'January 8, 2021',
    path: '/blog/stoicism',
    tags: [
      { id: 'philosophy', path: '/tag/philosophy' },
      { id: 'productivity', path: '/tag/productivity' },
      { id: 'mindset', path: '/tag/mindset' }
    ]
  },
  {
    id: 'story-telling',
    title: 'The Art of Technical Storytelling',
    author: 'Max Paulus',
    excerpt: 'Why storytelling is crucial for technical communication and how to improve your narrative skills.',
    date: 'September 12, 2021',
    path: '/blog/story-telling',
    tags: [
      { id: 'communication', path: '/tag/communication' },
      { id: 'leadership', path: '/tag/leadership' },
      { id: 'career', path: '/tag/career' }
    ]
  }
];

// Mock pagination info
const pageInfo = {
  totalPages: 1,
  currentPage: 1
};

export default function Blog() {
  return (
    <Layout>
      <div>
        {/* Pagination - Top */}
        <div className="w-full flex justify-center my-2">
          <div className="flex space-x-2">
            {pageInfo.currentPage > 1 && (
              <Link href={`/blog?page=${pageInfo.currentPage - 1}`} className="px-3 hover:bg-gray-400">
                Previous
              </Link>
            )}
            <span className="px-3 bg-gray-200">
              Page {pageInfo.currentPage} of {pageInfo.totalPages}
            </span>
            {pageInfo.currentPage < pageInfo.totalPages && (
              <Link href={`/blog?page=${pageInfo.currentPage + 1}`} className="px-3 hover:bg-gray-400">
                Next
              </Link>
            )}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="flex flex-col space-y-4">
          {mockBlogPosts.map((post) => (
            <Link key={post.id} href={post.path}>
              <div className="shadow p-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-gray-700 text-base">{post.excerpt}</p>
                  <p className="text-gray-400 text-sm">{post.date}</p>
                </div>
                <div className="pt-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link key={tag.id} href={tag.path}>
                        <span className="inline-block bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500 hover:bg-gray-200 transition-colors">
                          #{tag.id}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination - Bottom */}
        <div className="w-full flex justify-center my-2">
          <div className="flex space-x-2">
            {pageInfo.currentPage > 1 && (
              <Link href={`/blog?page=${pageInfo.currentPage - 1}`} className="px-3 hover:bg-gray-400">
                Previous
              </Link>
            )}
            <span className="px-3 bg-gray-200">
              Page {pageInfo.currentPage} of {pageInfo.totalPages}
            </span>
            {pageInfo.currentPage < pageInfo.totalPages && (
              <Link href={`/blog?page=${pageInfo.currentPage + 1}`} className="px-3 hover:bg-gray-400">
                Next
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

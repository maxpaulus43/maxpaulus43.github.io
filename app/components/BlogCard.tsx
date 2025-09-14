'use client';

import { useRouter } from 'next/navigation';

interface BlogCardProps {
    post: {
        slug: string;
        title: string;
        excerpt: string;
        date: string;
        tags: string[];
    };
    highlightedTag?: string;
}

export default function BlogCard({ post, highlightedTag }: BlogCardProps) {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/blog/${post.slug}`);
    };

    const handleTagClick = (e: React.MouseEvent, tag: string) => {
        e.stopPropagation();
        router.push(`/tag/${tag.toLowerCase()}`);
    };

    return (
        <div
            className="shadow p-3 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={handleCardClick}
        >
            <div>
                <h3 className="text-xl font-semibold">
                    {post.title}
                </h3>
                <p className="text-gray-700 text-base">{post.excerpt}</p>
                <p className="text-gray-400 text-sm">{post.date}</p>
            </div>
            <div className="pt-3">
                <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                        <button
                            key={tag}
                            onClick={(e) => handleTagClick(e, tag)}
                            className={`inline-block px-3 py-1 text-sm font-semibold transition-colors ${highlightedTag && tag.toLowerCase() === highlightedTag.toLowerCase()
                                ? 'bg-blue-200 text-blue-800'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            #{tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

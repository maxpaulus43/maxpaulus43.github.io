'use client';

import { useRouter } from 'next/navigation';

interface ContentCardProps<T extends Record<string, any>> {
  item: T;
  basePath: string;        // "/blog" or "/portfolio"  
  tagBasePath: string;     // "/tag" or "/skill"
  tagField: keyof T;       // "tags" or "skills"
  highlightedTag?: string;
  showDate?: boolean;
  tagLabel?: string;       // "Skills:" or undefined
}

export default function ContentCard<T extends Record<string, any>>({
  item,
  basePath,
  tagBasePath,
  tagField,
  highlightedTag,
  showDate = false,
  tagLabel
}: ContentCardProps<T>) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`${basePath}/${item.slug}`);
  };

  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.stopPropagation();
    router.push(`${tagBasePath}/${tag.toLowerCase()}`);
  };

  const tags = item[tagField] as string[];

  return (
    <div
      className="shadow p-3 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleCardClick}
    >
      <div>
        <h3 className="text-xl font-semibold">
          {item.title}
        </h3>
        <p className="text-gray-700 text-base">{item.excerpt}</p>
        {showDate && item.date && (
          <p className="text-gray-400 text-sm">{item.date}</p>
        )}
      </div>
      <div className="pt-3">
        {tagLabel && (
          <p className="text-sm font-medium mb-2">{tagLabel}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
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

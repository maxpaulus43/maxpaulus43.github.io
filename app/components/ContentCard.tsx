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
  variant?: 'default' | 'portfolio' | 'blog';
}

export default function ContentCard<T extends Record<string, any>>({
  item,
  basePath,
  tagBasePath,
  tagField,
  highlightedTag,
  showDate = false,
  tagLabel,
  variant = 'default'
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

  // Portfolio variant with enhanced visual design
  if (variant === 'portfolio') {
    return (
      <div
        className="group bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-400/10"
        onClick={handleCardClick}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {/* Company logo placeholder - you can add actual logos later */}
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {item.title.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">Software Developer</p>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-4">{item.excerpt}</p>
          </div>
          <div className="ml-4">
            <i className="fa fa-arrow-right text-gray-600 group-hover:text-cyan-400 transition-colors"></i>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-4">
          <p className="text-cyan-400 text-sm font-medium mb-3">Technologies Used:</p>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 6).map((tag: string) => (
              <button
                key={tag}
                onClick={(e) => handleTagClick(e, tag)}
                className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                {tag}
              </button>
            ))}
            {tags.length > 6 && (
              <span className="px-3 py-1 text-xs text-gray-500">
                +{tags.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Blog variant with clean design
  if (variant === 'blog') {
    return (
      <div
        className="group bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
            {item.title}
          </h3>
          {showDate && item.date && (
            <span className="text-gray-500 text-sm">{item.date}</span>
          )}
        </div>
        <p className="text-gray-300 text-base mb-4 leading-relaxed">{item.excerpt}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <button
                key={tag}
                onClick={(e) => handleTagClick(e, tag)}
                className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded hover:text-cyan-400 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default variant (fallback)
  return (
    <div
      className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-cyan-400 transition-all cursor-pointer"
      onClick={handleCardClick}
    >
      <div>
        <h3 className="text-xl font-semibold text-white">
          {item.title}
        </h3>
        <p className="text-gray-300 text-base">{item.excerpt}</p>
        {showDate && item.date && (
          <p className="text-gray-500 text-sm">{item.date}</p>
        )}
      </div>
      <div className="pt-3">
        {tagLabel && (
          <p className="text-sm font-medium mb-2 text-cyan-400">{tagLabel}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <button
              key={tag}
              onClick={(e) => handleTagClick(e, tag)}
              className={`inline-block px-3 py-1 text-sm font-semibold transition-colors rounded ${highlightedTag && tag.toLowerCase() === highlightedTag.toLowerCase()
                ? 'bg-cyan-400 text-black'
                : 'bg-gray-800 text-gray-400 hover:text-cyan-400'
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

'use client';

import { useRouter } from 'next/navigation';
import TagGroup from './TagGroup';

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
          <TagGroup
            tags={tags}
            tagBasePath={tagBasePath}
            label="Technologies Used:"
            variant="chip"
            size="sm"
            prefix=""
            maxVisible={6}
            highlighted={highlightedTag}
          />
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
        
        <TagGroup
          tags={tags}
          tagBasePath={tagBasePath}
          variant="default"
          size="sm"
          prefix="#"
          highlighted={highlightedTag}
          showLabel={false}
        />
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
        <TagGroup
          tags={tags}
          tagBasePath={tagBasePath}
          label={tagLabel}
          variant="default"
          size="md"
          prefix="#"
          highlighted={highlightedTag}
        />
      </div>
    </div>
  );
}

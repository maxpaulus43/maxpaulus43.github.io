'use client';

import { useRouter } from 'next/navigation';
import Tag from './Tag';

interface TagGroupProps {
  tags: string[];
  tagBasePath?: string;
  label?: string;
  variant?: 'default' | 'chip' | 'outline';
  size?: 'sm' | 'md';
  prefix?: string;
  maxVisible?: number;
  highlighted?: string;
  className?: string;
  showLabel?: boolean;
}

export default function TagGroup({
  tags,
  tagBasePath,
  label,
  variant = 'default',
  size = 'sm',
  prefix = '#',
  maxVisible,
  highlighted,
  className = '',
  showLabel = true
}: TagGroupProps) {
  const router = useRouter();

  if (!tags || tags.length === 0) {
    return null;
  }

  const handleTagClick = (tag: string) => {
    if (tagBasePath) {
      router.push(`${tagBasePath}/${tag.toLowerCase()}`);
    }
  };

  const visibleTags = maxVisible ? tags.slice(0, maxVisible) : tags;
  const hiddenCount = maxVisible && tags.length > maxVisible ? tags.length - maxVisible : 0;

  return (
    <div className={className}>
      {showLabel && label && (
        <p className="text-sm font-medium mb-2 text-cyan-400">{label}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {visibleTags.map((tag: string) => (
          <Tag
            key={tag}
            tag={tag}
            href={tagBasePath ? `${tagBasePath}/${tag.toLowerCase()}` : undefined}
            variant={variant}
            size={size}
            prefix={prefix}
            highlighted={highlighted ? tag.toLowerCase() === highlighted.toLowerCase() : false}
            onClick={tagBasePath ? handleTagClick : undefined}
          />
        ))}
        {hiddenCount > 0 && (
          <span className="px-3 py-1 text-xs text-gray-500">
            +{hiddenCount} more
          </span>
        )}
      </div>
    </div>
  );
}

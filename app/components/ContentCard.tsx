import Link from 'next/link';
import ArchiveSketch from './ArchiveSketch';

interface ContentCardProps<T extends Record<string, unknown>> {
  item: T & { slug: string; title: string; excerpt?: string; date?: string };
  basePath: string;
  tagBasePath: string;
  tagField: keyof T;
  highlightedTag?: string;
  showDate?: boolean;
  variant?: 'default' | 'portfolio' | 'blog';
  index?: number;
}

export default function ContentCard<T extends Record<string, unknown>>({ item, basePath, tagBasePath, tagField, highlightedTag, showDate = false, variant = 'default', index = 0 }: ContentCardProps<T>) {
  const tags = Array.isArray(item[tagField]) ? item[tagField] as string[] : [];
  return (
    <article className={`index-card index-card--${variant}`}>
      {variant === 'portfolio' && <ArchiveSketch index={index} label={tags[0] || 'system'} />}
      <div className="index-card__body">
        <div className="index-card__meta"><span>{String(index + 1).padStart(2, '0')}</span>{showDate && item.date && <time>{item.date}</time>}</div>
        <h2><Link href={`${basePath}/${item.slug}`}>{item.title}</Link></h2>
        {item.excerpt && <p>{item.excerpt}</p>}
        <div className="index-card__tags">
          {tags.map((tag) => <Link className={highlightedTag?.toLowerCase() === tag.toLowerCase() ? 'is-active' : ''} key={tag} href={`${tagBasePath}/${tag.toLowerCase()}`}>{tag}</Link>)}
        </div>
      </div>
      <Link className="index-card__arrow" href={`${basePath}/${item.slug}`} aria-label={`Read ${item.title}`}>→</Link>
    </article>
  );
}

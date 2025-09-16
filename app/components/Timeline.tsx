'use client';
import { useRouter } from 'next/navigation';

interface TimelineItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  achievements?: string[];
  type: 'professional' | 'personal';
  slug?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const router = useRouter();

  const handleItemClick = (item: TimelineItem) => {
    if (item.slug) {
      router.push(`/portfolio/${item.slug}`);
    }
  };

  return (
    <div className="relative py-8">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-cyan-600 opacity-30"></div>
      
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`relative mb-12 pl-16 group ${
            item.slug ? 'cursor-pointer' : ''
          }`}
          onClick={() => handleItemClick(item)}
        >
          {/* Timeline marker */}
          <div className="absolute left-3 top-2">
            <div className={`w-6 h-6 rounded-full border-3 ${
              item.type === 'personal' 
                ? 'bg-gradient-to-br from-purple-400 to-purple-600 border-gray-900' 
                : 'bg-gradient-to-br from-cyan-400 to-cyan-600 border-gray-900'
            } flex items-center justify-center ${
              item.slug ? 'group-hover:animate-pulse' : ''
            }`}>
              {item.type === 'personal' && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              )}
            </div>
          </div>

          {/* Timeline content */}
          <div className={`bg-gray-800 border rounded-xl p-6 transition-all duration-300 ${
            item.type === 'personal' 
              ? 'border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-purple-600/5' 
              : 'border-gray-700'
          } ${
            item.slug 
              ? 'hover:border-cyan-400 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/10' 
              : ''
          } ${
            item.type === 'personal' && item.slug 
              ? 'hover:border-purple-400 hover:shadow-purple-400/10' 
              : ''
          }`}>
            
            {/* Header */}
            <div className="flex justify-between items-start mb-4 flex-wrap gap-4 md:flex-nowrap">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold ${
                  item.type === 'personal' 
                    ? 'bg-gradient-to-br from-purple-400 to-purple-600' 
                    : 'bg-gradient-to-br from-cyan-400 to-cyan-600'
                }`}>
                  {item.company.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  <p className={`font-medium ${
                    item.type === 'personal' ? 'text-purple-400' : 'text-cyan-400'
                  }`}>{item.company}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-white font-medium text-sm">{item.duration}</span>
                <span className="text-gray-400 text-xs">{item.location}</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>
            
            {/* Skills */}
            <div className="flex gap-2 flex-wrap">
              {item.skills.slice(0, 4).map((skill) => (
                <span 
                  key={skill} 
                  className="bg-gray-900 text-gray-400 px-3 py-1 rounded-full text-sm font-medium border border-gray-600 hover:text-cyan-400 hover:border-cyan-400 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
              {item.skills.length > 4 && (
                <span className="text-gray-400 text-sm px-3 py-1">
                  +{item.skills.length - 4} more
                </span>
              )}
            </div>

            {/* Click hint */}
            {item.slug && (
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className={`text-sm font-medium flex items-center gap-2 ${
                  item.type === 'personal' ? 'text-purple-400' : 'text-cyan-400'
                }`}>
                  Click to view details →
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

'use client';

interface TimelineItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  achievements?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-content">
            <div className="timeline-header">
              <div className="timeline-company">
                <div className="company-logo-small">
                  {item.company.charAt(0)}
                </div>
                <div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-company-name">{item.company}</p>
                </div>
              </div>
              <div className="timeline-meta">
                <span className="timeline-duration">{item.duration}</span>
                <span className="timeline-location">{item.location}</span>
              </div>
            </div>
            
            <p className="timeline-description">{item.description}</p>
            
            {item.achievements && item.achievements.length > 0 && (
              <div className="timeline-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="timeline-skills">
              {item.skills.slice(0, 5).map((skill) => (
                <span key={skill} className="timeline-skill-tag">
                  {skill}
                </span>
              ))}
              {item.skills.length > 5 && (
                <span className="timeline-skill-more">
                  +{item.skills.length - 5} more
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

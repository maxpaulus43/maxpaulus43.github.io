import Timeline from './Timeline';
import { TimelineItem } from '../../lib/timeline';

interface TimelineSectionProps {
  timelineItems: TimelineItem[];
}

export default function TimelineSection({ timelineItems }: TimelineSectionProps) {
  return (
    <section className="featured-work-section">
      <h2>Professional Experience</h2>
      
      <div className="my-8">
        <Timeline items={timelineItems} />
      </div>

      <div className="section-cta">
        <a href="/portfolio" className="btn-secondary">
          <i className="fa fa-arrow-right"></i>
          View All Experience
        </a>
      </div>
    </section>
  );
}

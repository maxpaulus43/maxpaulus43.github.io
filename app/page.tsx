import HomeContent from './components/HomeContent';
import { getMergedTimelineData } from '../lib/timeline';

export default function Home() {
  const timelineItems = getMergedTimelineData();

  return <HomeContent timelineItems={timelineItems} />;
}

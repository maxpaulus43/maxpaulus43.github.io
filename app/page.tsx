import HomeContent from './components/HomeContent';
import { getTimelineData } from '../lib/timeline';

export default function Home() {
  const timelineItems = getTimelineData();

  return <HomeContent timelineItems={timelineItems} />;
}

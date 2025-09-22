'use client';

import { useState } from 'react';
import Layout from './Layout';
import HeroSection from './HeroSection';
import TimelineSection from './TimelineSection';
import LatestThoughts from './LatestThoughts';
import { TimelineItem } from '../../lib/timeline';

interface HomeContentProps {
  timelineItems: TimelineItem[];
}

export default function HomeContent({ timelineItems }: HomeContentProps) {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const handleContactModalClose = () => {
    setShowContactModal(false);
  };

  return (
    <Layout
      showContactModal={showContactModal}
      onContactModalClose={handleContactModalClose}
      onContactClick={handleContactClick}
    >
      <div className="max-w-5xl mx-auto px-2 md:px-4">
        <HeroSection onContactClick={handleContactClick} />
        <TimelineSection timelineItems={timelineItems} />
        <LatestThoughts />
      </div>
    </Layout>
  );
}

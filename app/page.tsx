'use client';

import { useState } from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import FeaturedWork from './components/FeaturedWork';
import LatestThoughts from './components/LatestThoughts';

export default function Home() {
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
      <div className="homepage-container">
        <HeroSection onContactClick={handleContactClick} />
        <FeaturedWork />
        <LatestThoughts />
      </div>
    </Layout>
  );
}

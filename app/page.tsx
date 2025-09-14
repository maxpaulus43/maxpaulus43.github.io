import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import FeaturedWork from './components/FeaturedWork';
import LatestThoughts from './components/LatestThoughts';

export default function Home() {
  return (
    <Layout>
      <div className="homepage-container">
        <HeroSection />
        <FeaturedWork />
        <LatestThoughts />
      </div>
    </Layout>
  );
}

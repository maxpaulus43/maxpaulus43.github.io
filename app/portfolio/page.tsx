import { getSortedPortfolioData } from '../../lib/portfolio';
import PortfolioContent from '../components/PortfolioContent';

export default function Portfolio() {
  const projects = getSortedPortfolioData();
  return <PortfolioContent projects={projects} />
}

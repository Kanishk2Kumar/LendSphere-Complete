
import Hero from '@/components/Hero';
// import TopInvestor from '@/components/Topinvestor';
// import OurSupportedAssets from '@/components/SupportedAssets';
import { Scope } from '@/components/Scope';
import DownloadApp from './DownloadApp';
import Footer from './Footer';
import { FeaturesSection } from './Features';

function App() {
  return (
    <div>
      <Hero />
      <Scope />
      <FeaturesSection />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;


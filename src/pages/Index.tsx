import { useState } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import HeroSection from '@/components/HeroSection';
import EngineSection from '@/components/EngineSection';
import ObjectivesSection from '@/components/ObjectivesSection';
import ModelsSection from '@/components/ModelsSection';
import FeaturesSection from '@/components/FeaturesSection';
import PredictionDemo from '@/components/PredictionDemo';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}
      
      <main className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <HeroSection />
        <EngineSection />
        <ObjectivesSection />
        <ModelsSection />
        <FeaturesSection />
        <PredictionDemo />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;

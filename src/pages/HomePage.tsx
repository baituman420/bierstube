import React from 'react';
import { Hero } from '../components/Hero';
import { GastronomiaSection } from '../components/GastronomiaSection';
import { CervezaAmbienteSection } from '../components/CervezaAmbienteSection';
import { DeporteBilbaoSection } from '../components/DeporteBilbaoSection';
import { LocalSection } from '../components/LocalSection';
import { UbicacionSection } from '../components/UbicacionSection';

interface HomePageProps {
  onNavigateToCarta: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToCarta }) => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <Hero
        onNavigateToCarta={onNavigateToCarta}
        onDiscoverClick={() => scrollToSection('gastronomia')}
      />
      <GastronomiaSection onNavigateToCarta={onNavigateToCarta} />
      <CervezaAmbienteSection />
      <DeporteBilbaoSection />
      <LocalSection />
      <UbicacionSection />
    </div>
  );
};

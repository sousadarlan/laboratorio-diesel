import React from 'react';
import { Hero } from '../components/Hero';
import { CategoriesSection } from '../components/CategoriesSection';
import { SymptomsSection } from '../components/SymptomsSection';
import { ServicesSection } from '../components/ServicesSection';
import { WorkshopPartnerSection } from '../components/WorkshopPartnerSection';
import { LaboratoryAuthority } from '../components/LaboratoryAuthority';
import { BrandPartners } from '../components/BrandPartners';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { LocationSection } from '../components/LocationSection';
import { FinalCTA } from '../components/FinalCTA';
import { ActivePage, ServiceItem } from '../types';

interface HomePageProps {
  setActivePage: (page: ActivePage) => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenDiagnostic: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onSelectService,
  onOpenDiagnostic,
}) => {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <Hero setActivePage={setActivePage} onOpenDiagnostic={onOpenDiagnostic} />

      {/* 2. Categorias e Soluções (Slider 4 em 4) */}
      <CategoriesSection />

      {/* 3. Sintomas e Falhas Comuns no Diesel */}
      <SymptomsSection onOpenDiagnostic={onOpenDiagnostic} />

      {/* 4. Serviços de Laboratório */}
      <ServicesSection
        onSelectService={onSelectService}
        setActivePage={setActivePage}
      />

      {/* 5. Para Oficinas (B2B) */}
      <WorkshopPartnerSection setActivePage={setActivePage} />

      {/* 6. Autoridade Técnica & Bancadas Digitais */}
      <LaboratoryAuthority />

      {/* 7. Marcas Atendidas */}
      <BrandPartners />

      {/* 8. Depoimentos */}
      <TestimonialsSection />

      {/* 9. Localização & Rotas (Várzea Grande - MT) */}
      <LocationSection />

      {/* 10. CTA Final */}
      <FinalCTA />
    </div>
  );
};

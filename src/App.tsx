/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActivePage, ServiceItem } from './types';
import { SERVICES_DATA } from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { DiagnosticModal } from './components/DiagnosticModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(SERVICES_DATA[0]);

  // Modal states
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  // Navigations
  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setActivePage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F6F8] text-[#161A23] font-body selection:bg-[#1824E8] selection:text-white">
      {/* 1. Header Navigation */}
      <Header
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        openDiagnosticModal={() => setIsDiagnosticOpen(true)}
      />

      {/* 2. Main Page Render */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onSelectService={handleSelectService}
            onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onSelectService={handleSelectService}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'service-detail' && selectedService && (
          <ServiceDetailPage
            service={selectedService}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'for-workshops' && (
          <WorkshopsPage setActivePage={setActivePage} />
        )}

        {activePage === 'about' && (
          <AboutPage setActivePage={setActivePage} />
        )}

        {activePage === 'contact' && (
          <ContactPage setActivePage={setActivePage} />
        )}

        {activePage === 'privacy' && (
          <PrivacyPage setActivePage={setActivePage} />
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        setActivePage={(page) => {
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 4. Floating WhatsApp Action Center */}
      <WhatsAppFloat />

      {/* 5. Diagnostic Interactive Modal */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />
    </div>
  );
}

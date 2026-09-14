import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/mockData';
import { ActivePage } from '../types';
import {
  Phone,
  Menu,
  X,
  Clock,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  quoteCount?: number;
  openQuoteDrawer?: () => void;
  openDiagnosticModal?: () => void;
  onSearchClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  openDiagnosticModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: ActivePage }[] = [
    { label: 'Início', page: 'home' },
    { label: 'Serviços', page: 'services' },
    { label: 'Para Oficinas', page: 'for-workshops' },
    { label: 'Sobre', page: 'about' },
    { label: 'Contato', page: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Technical Bar */}
      <div className="bg-[#0A1233] text-white text-xs border-b border-slate-800/80 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-300">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1824E8]" />
              <span>Laboratório com Bancadas Digitais Homologadas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.hours}</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-slate-400">{COMPANY_INFO.servingRegion}</span>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-white font-medium hover:text-[#E8ECFF] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#1824E8]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
            : 'bg-white py-4 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => setActivePage('home')}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1824E8] rounded-lg p-1"
          >
            <BrandLogo size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => {
                    setActivePage(item.page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-sm font-semibold tracking-wide transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#1824E8] font-bold'
                      : 'text-[#161A23] hover:text-[#1824E8]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1824E8] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* WhatsApp CTA Button with FontAwesome Icon */}
            <a
              href={createWhatsAppUrl(
                'Olá! Gostaria de falar com o atendimento técnico do Laboratório Diesel.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 bg-[#1824E8] hover:bg-[#1235A8] text-white text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-[#1824E8]/25 hover:shadow-md active:scale-95"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-white" />
              <span>Falar no WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-[#F5F6F8] lg:hidden"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl p-4 transition-all duration-300 z-50 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1 divide-y divide-slate-100">
            <div className="py-2 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setActivePage(item.page);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center justify-center w-full text-center px-3 py-3 rounded-lg text-base font-semibold transition-colors ${
                    activePage === item.page
                      ? 'bg-[#E8ECFF] text-[#1824E8]'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-3 pb-2 flex flex-col gap-2">
              <a
                href={createWhatsAppUrl(
                  'Olá! Gostaria de falar com o atendimento técnico do Laboratório Diesel.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#1824E8] text-white font-bold text-sm shadow-md"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-white" />
                <span>Atendimento no WhatsApp</span>
              </a>
            </div>

            <div className="pt-3 text-xs text-slate-500 space-y-1 text-center">
              <p className="font-semibold text-slate-700">Laboratório Diesel — MT</p>
              <p>{COMPANY_INFO.address}, {COMPANY_INFO.city} - {COMPANY_INFO.state}</p>
              <p>Telefone: {COMPANY_INFO.phone}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

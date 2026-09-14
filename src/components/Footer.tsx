import React from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, CATEGORIES_DATA } from '../data/mockData';
import { ActivePage, ProductCategory } from '../types';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, FileText } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onSelectCategory?: (category: ProductCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onSelectCategory }) => {
  return (
    <footer className="bg-[#070D24] text-slate-300 border-t border-slate-800">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand & Presentation */}
          <div className="lg:col-span-2 space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <BrandLogo variant="white" size="lg" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-md pt-2">
              Laboratório técnico de referência em tecnologia de injeção diesel e sistemas Common Rail.
              Diagnóstico computadorizado de precisão, recondicionamento com laudo de bancada EPS e
              fornecimento de componentes originais para proprietários e oficinas mecânicas.
            </p>

            <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800/80 text-blue-300 border border-slate-700/60 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1824E8]" />
                Bancadas Digitais EPS 708
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800/80 text-blue-300 border border-slate-700/60 font-medium">
                Codificação IMA/ISA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800/80 text-blue-300 border border-slate-700/60 font-medium">
                Padrão ISO 4113
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Início', page: 'home' as ActivePage },
                { label: 'Serviços de Laboratório', page: 'services' as ActivePage },
                { label: 'Portal para Oficinas', page: 'for-workshops' as ActivePage },
                { label: 'Sobre o Laboratório', page: 'about' as ActivePage },
                { label: 'Fale Conosco', page: 'contact' as ActivePage },
                { label: 'Política de Privacidade', page: 'privacy' as ActivePage },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => {
                      setActivePage(item.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center justify-center md:justify-start gap-1"
                  >
                    <ArrowRight className="w-3 h-3 text-[#1824E8] opacity-70" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sistemas Atendidos */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider">
              Sistemas Atendidos
            </h3>
            <ul className="space-y-2 text-sm">
              {CATEGORIES_DATA.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(`Olá! Gostaria de informações técnicas e testes sobre ${cat.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[#E8ECFF] hover:translate-x-1 transition-all block text-xs sm:text-sm"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Atendimento & Localização */}
          <div className="space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider">
              Atendimento Técnico
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1824E8] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{COMPANY_INFO.address}</p>
                  <p className="text-slate-400">{COMPANY_INFO.city} - {COMPANY_INFO.state} | CEP {COMPANY_INFO.cep}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#1824E8] flex-shrink-0" />
                <span className="text-slate-400">CNPJ: <span className="text-slate-300">42.078.149/0001-33</span></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1824E8] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={createWhatsAppUrl('Olá! Gostaria de atendimento técnico do Laboratório Diesel.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-emerald-300 transition-colors font-medium"
                >
                  WhatsApp: {COMPANY_INFO.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1824E8] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white text-slate-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col items-center gap-4 text-xs text-slate-500 text-center">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                setActivePage('privacy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-300 transition-colors"
            >
              Termos e Privacidade LGPD
            </button>
            <span className="text-slate-700">|</span>
            <span>Mato Grosso • Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

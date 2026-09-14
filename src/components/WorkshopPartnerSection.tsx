import React from 'react';
import { WORKSHOP_BENEFITS } from '../data/mockData';
import { ActivePage } from '../types';
import {
  Clock,
  FileText,
  Headphones,
  Building2,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWorkshopWhatsAppUrl } from '../utils/whatsapp';

interface WorkshopPartnerSectionProps {
  setActivePage: (page: ActivePage) => void;
}

export const WorkshopPartnerSection: React.FC<WorkshopPartnerSectionProps> = ({ setActivePage }) => {
  const iconMap: Record<string, React.ElementType> = {
    Clock,
    FileText,
    Headphones,
    Building2,
    Truck,
    ShieldCheck,
  };

  return (
    <section className="py-20 bg-[#0A1233] text-white relative overflow-hidden border-y border-slate-800">
      {/* Precision grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, #1824E8 2px, transparent 0%)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: B2B Value Proposition */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1824E8]/20 border border-[#1824E8]/40 text-[#E8ECFF] text-xs font-bold tracking-wider uppercase">
              <span>CANAL EXCLUSIVO B2B</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Sua oficina precisa de um parceiro especialista em diesel?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Conte com nosso laboratório para diagnóstico, testes, reparação e fornecimento de
              componentes para sistemas de injeção diesel com rapidez e precisão de fábrica.
            </p>

            {/* Checklist of Core Benefits */}
            <div className="space-y-2.5 pt-2">
              {[
                'Atendimento especializado para mecânicos e autopeças',
                'Diagnóstico técnico em bancadas digitais computadorizadas',
                'Testes e reparação com laudos gráficos para seu cliente',
                'Fornecimento de componentes originais a pronta entrega',
                'Suporte técnico e consultoria em códigos de falha',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1824E8] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getWorkshopWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1824E8] hover:bg-[#1235A8] text-white font-heading font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#1824E8]/30 transition-all text-center"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-base text-white" />
                <span>FALAR COM O LABORATÓRIO</span>
              </a>

              <button
                onClick={() => {
                  setActivePage('for-workshops');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-slate-700 text-xs font-bold tracking-wider uppercase transition-colors text-center"
              >
                <span>Condições para Parceiros</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 6 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WORKSHOP_BENEFITS.map((benefit, idx) => {
              const Icon = iconMap[benefit.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#1824E8]/60 transition-all hover:bg-slate-900 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0A1233] border border-slate-700 flex items-center justify-center text-[#1824E8] mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-sm text-white mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

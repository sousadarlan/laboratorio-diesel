import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { COMPANY_INFO } from '../data/mockData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#1824E8] text-white relative overflow-hidden">
      {/* Precision ambient graphics */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-[#0A1233]/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
          Atendimento Técnico Imediato
        </span>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
          Precisa de uma peça ou diagnóstico?
        </h2>

        <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Fale com nossa equipe técnica e encontre a melhor solução para seu veículo ou oficina.
          Disponibilidade imediata e envio para todo o país.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={createWhatsAppUrl('Olá! Gostaria de uma consultoria ou orçamento rápido no Laboratório Diesel.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-[#1824E8] font-heading font-extrabold text-sm tracking-wider uppercase px-8 py-4 rounded-xl shadow-xl shadow-blue-900/30 transition-all hover:scale-105 active:scale-95 text-center"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-[#1824E8]" />
            <span>FALAR NO WHATSAPP</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A1233] hover:bg-[#070D24] text-white font-heading font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-xl transition-all border border-blue-400/30 text-center"
          >
            <Phone className="w-4 h-4" />
            <span>LIGAR: {COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

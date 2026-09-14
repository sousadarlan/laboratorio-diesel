import React, { useState, useEffect } from 'react';
import { ActivePage } from '../types';
import { ArrowRight } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  setActivePage: (page: ActivePage) => void;
  onOpenDiagnostic: () => void;
}

const HIGHLIGHT_PHRASES = [
  'Bancadas Digitais EPS 708',
  'Codificação IMA / ISA',
  'Atendimento para Oficinas',
];

export const Hero: React.FC<HeroProps> = ({ setActivePage, onOpenDiagnostic }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = HIGHLIGHT_PHRASES[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 55); // Digitando letra por letra
      } else {
        // Pausa quando completa a digitação antes de apagar/trocar
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, 30); // Apagando suavemente
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % HIGHLIGHT_PHRASES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <section className="relative bg-[#0A1233] text-white overflow-hidden border-b border-slate-800">
      {/* Precision Background Pattern & Ambient Lighting */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #1824E8 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1235A8 2%, transparent 0%)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Subtle Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#1824E8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1235A8]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#1824E8]/20 border border-[#1824E8]/40 text-[#E8ECFF] text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider uppercase whitespace-nowrap">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1824E8] animate-pulse"></span>
              LABORATÓRIO ESPECIALIZADO EM SISTEMAS DIESEL
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Especialistas em <br />
              <span className="text-[#1824E8] drop-shadow-[0_2px_15px_rgba(24,36,232,0.4)]">
                Injeção Diesel.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              Diagnóstico, reparação e componentes para sistemas de injeção diesel com precisão,
              tecnologia e atendimento especializado.
            </p>

            {/* Typewriter Highlight Box */}
            <div className="pt-1">
              <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-lg shadow-black/20">
                <div className="flex items-center min-h-[22px]">
                  <span className="text-sm font-semibold text-slate-100 font-mono tracking-wide">
                    {displayedText}
                  </span>
                  <span className="w-0.5 h-4 bg-[#1824E8] ml-1.5 animate-pulse inline-block shadow-[0_0_8px_#1824E8]" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA */}
              <a
                href={createWhatsAppUrl(
                  'Olá! Gostaria de solicitar um orçamento no Laboratório Diesel.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#1824E8] hover:bg-[#1235A8] text-white font-heading font-bold text-sm tracking-wider uppercase px-7 py-4 rounded-xl shadow-lg shadow-[#1824E8]/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>SOLICITAR ORÇAMENTO</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA */}
              <button
                onClick={() => {
                  setActivePage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-slate-700/80 font-heading font-bold text-sm tracking-wider uppercase px-7 py-4 rounded-xl transition-all duration-200 hover:border-slate-500 text-center backdrop-blur-sm"
              >
                <span>CONHECER SERVIÇOS</span>
              </button>
            </div>

            {/* Quick Diagnostic helper trigger */}
            <div className="pt-2">
              <button
                onClick={onOpenDiagnostic}
                className="text-xs text-blue-300 hover:text-white underline underline-offset-4 flex items-center gap-1.5 transition-colors"
              >
                <span>Seu diesel perdeu força ou está fumaçando? Faça uma triagem rápida online</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Laboratory Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl shadow-black/50 p-1 group">
              <div className="relative h-80 sm:h-96 lg:h-[420px] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="Laboratório de Injeção Diesel e Bancada de Testes de Alta Precisão"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

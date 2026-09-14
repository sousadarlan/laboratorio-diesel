import React, { useState, useEffect } from 'react';
import { X, Wrench, Fuel, Stethoscope, ChevronRight, Sparkles, MessageCircle } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { COMPANY_INFO } from '../data/mockData';
import { createWhatsAppUrl } from '../utils/whatsapp';

const ATTENTION_MESSAGES = [
  {
    tag: 'Técnico Online',
    title: 'Consultoria Especializada',
    text: 'Precisa de bico injetor, bomba ou sensor diesel?',
  },
  {
    tag: 'Orçamento Imediato',
    title: 'Atendimento Rápido',
    text: 'Consulte preços e disponibilidade de peças agora!',
  },
  {
    tag: 'Bancada Digital',
    title: 'Diagnóstico & Testes',
    text: 'Motor falhando ou fumaça preta? Fale com nosso técnico.',
  },
  {
    tag: 'Parceria B2B',
    title: 'Para Mecânicos e Oficinas',
    text: 'Condições exclusivas e laudos para sua oficina.',
  },
  {
    tag: 'Pronta Entrega',
    title: 'Envio para Todo Brasil',
    text: 'Peças testadas e homologadas para envio hoje.',
  },
];

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [isBadgeVisible, setIsBadgeVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  // Rotating attention messages cycle (every 6 seconds for a calm, noticeable pace)
  useEffect(() => {
    if (!isBadgeVisible || isOpen) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentMsgIndex((prev) => (prev + 1) % ATTENTION_MESSAGES.length);
        setIsFading(false);
      }, 400);
    }, 6000);

    return () => clearInterval(interval);
  }, [isBadgeVisible, isOpen]);

  const quickActions = [
    {
      label: 'Consultar Preço & Peças',
      desc: 'Bicos injetores, bombas e sensores',
      icon: Fuel,
      msg: 'Olá! Gostaria de consultar disponibilidade e valor de peças diesel.',
    },
    {
      label: 'Agendar Diagnóstico Diesel',
      desc: 'Perda de força, fumaça ou falha',
      icon: Stethoscope,
      msg: 'Olá! Gostaria de agendar um diagnóstico de injeção diesel no laboratório.',
    },
    {
      label: 'Sou Mecânico / Oficina',
      desc: 'Condições especiais e fila prioritária',
      icon: Wrench,
      msg: 'Olá! Sou mecânico/proprietário de oficina e gostaria de atendimento B2B.',
    },
    {
      label: 'Tirar Dúvida Técnica Geral',
      desc: 'Fale com um dos nossos técnicos',
      icon: () => <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-emerald-600" />,
      msg: 'Olá! Tenho uma dúvida técnica sobre meu sistema diesel.',
    },
  ];

  const currentMsg = ATTENTION_MESSAGES[currentMsgIndex];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Floating Rotating Attention Badge (when popup is closed) */}
      {!isOpen && isBadgeVisible && (
        <div className="mb-3 relative max-w-[280px] sm:max-w-xs transition-all duration-500 ease-out animate-fade-in">
          <div
            onClick={() => setIsOpen(true)}
            className="group cursor-pointer bg-white text-slate-800 p-3.5 rounded-2xl shadow-xl shadow-slate-900/15 border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-0.5"
          >
            {/* Header with pill tag and close */}
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                {currentMsg.tag}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBadgeVisible(false);
                }}
                className="text-slate-400 hover:text-slate-600 p-0.5 rounded-md hover:bg-slate-100 transition-colors"
                title="Fechar aviso"
                aria-label="Fechar aviso"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Content with animated fade transition */}
            <div
              className={`transition-all duration-400 ease-in-out ${
                isFading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
              }`}
            >
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {currentMsg.title}
              </p>
              <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                {currentMsg.text}
              </p>
            </div>

            <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-emerald-600 font-bold group-hover:translate-x-0.5 transition-transform">
              <span>Clique para falar agora</span>
              <ChevronRight className="w-3 h-3 text-emerald-500" />
            </div>
          </div>

          {/* Balloon pointing triangle */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-emerald-100 rotate-45"></div>
        </div>
      )}

      {/* Floating Popup Card (when opened) */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-scale-in">
          {/* Card Header with WhatsApp Green highlight */}
          <div className="bg-[#0A1233] p-4 text-white flex items-start justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md shadow-emerald-600/30">
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-white" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">Laboratório Diesel</h4>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                  Especialistas Online no WhatsApp
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Questions / Topics */}
          <div className="p-3 bg-slate-50 border-b border-slate-100 text-xs text-slate-600 font-medium">
            Como podemos ajudar você agora?
          </div>

          <div className="p-2 space-y-1.5 max-h-72 overflow-y-auto">
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <a
                  key={idx}
                  href={createWhatsAppUrl(action.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50/70 transition-all border border-transparent hover:border-emerald-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-xs border border-slate-200 flex items-center justify-center text-emerald-600 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                        {action.label}
                      </p>
                      <p className="text-[11px] text-slate-500">{action.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                </a>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="p-3 bg-white border-t border-slate-100 text-[11px] text-center text-slate-500">
            Atendimento técnico em Mato Grosso & todo Brasil
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button: Round Green Button with White WhatsApp Icon Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Atendimento WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl sm:text-3xl text-white" />
      </button>
    </div>
  );
};

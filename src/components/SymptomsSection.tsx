import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface SymptomsSectionProps {
  onOpenDiagnostic: () => void;
}

interface SimpleSymptom {
  id: string;
  name: string;
  cause: string;
  whatsappMessage: string;
}

const SIMPLE_SYMPTOMS: SimpleSymptom[] = [
  {
    id: '1',
    name: 'Perda de Potência e Força',
    cause: 'Retorno excessivo nos bicos injetores ou bomba de alta sem vazão.',
    whatsappMessage: 'Olá! Meu veículo está com perda de potência e falha ao acelerar. Gostaria de uma avaliação do laboratório.',
  },
  {
    id: '2',
    name: 'Fumaça Excessiva (Preta ou Branca)',
    cause: 'Toberas desgastadas, bico injetor gotejando ou travado aberto.',
    whatsappMessage: 'Olá! Meu veículo está emitindo fumaça excessiva. Gostaria de orientação para teste dos bicos.',
  },
  {
    id: '3',
    name: 'Dificuldade na Partida',
    cause: 'Fuga de pressão no sistema Common Rail ou retorno aberto dos bicos.',
    whatsappMessage: 'Olá! Meu motor está demorando muito para dar a partida. Preciso de suporte do laboratório.',
  },
  {
    id: '4',
    name: 'Consumo Elevado de Diesel',
    cause: 'Bicos descalibrados, toberas ovalizadas ou injeção fora dos parâmetros.',
    whatsappMessage: 'Olá! Notei consumo excessivo de diesel no meu veículo. Gostaria de agendar teste em bancada.',
  },
  {
    id: '5',
    name: 'Motor Trepidando / Falhando',
    cause: 'Falha na pré-injeção piloto ou desbalanceamento entre os cilindros.',
    whatsappMessage: 'Olá! O motor do meu diesel está trepidando em marcha lenta. Como posso enviar para teste?',
  },
  {
    id: '6',
    name: 'Luz da Injeção Acesa (ex: P0087)',
    cause: 'Baixa pressão de combustível detectada na linha de alta pressão.',
    whatsappMessage: 'Olá! Acendeu a luz de injeção no painel (baixa pressão de combustível). Gostaria de auxílio técnico.',
  },
];

export const SymptomsSection: React.FC<SymptomsSectionProps> = ({ onOpenDiagnostic }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Alinhado com as demais seções */}
        <div className="flex flex-col items-center mb-10 gap-4">
          <div className="text-center">
            <span className="text-xs font-bold text-[#1824E8] tracking-widest uppercase mb-1.5 block">
              Guia Rápido de Falhas
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#161A23] tracking-tight">
              Sintomas no Sistema Diesel
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="text-xs font-bold text-[#1824E8] hover:text-[#1235A8] flex items-center gap-1.5 py-1 transition-colors"
            >
              <span>Fazer triagem guiada completa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Grade Perfeitamente Alinhada com a Largura da Página (3 colunas x 2 linhas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SIMPLE_SYMPTOMS.map((item) => {
            const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(item.whatsappMessage)}`;

            return (
              <a
                key={item.id}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl border border-slate-200/90 hover:border-[#1824E8] bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-[#161A23] group-hover:text-[#1824E8] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <span className="font-semibold text-slate-700">Causa:</span> {item.cause}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1824E8]">
                  <span>Consultar diagnóstico</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Rodapé Alinhado */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col items-center gap-3 text-xs text-slate-500 text-center">
          <p>
            Laboratório próprio com bancadas computadorizadas em Várzea Grande – MT.
          </p>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida técnica sobre meu veículo diesel.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#1824E8] hover:text-[#1235A8] flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-emerald-600 text-sm" />
            <span>Falar com o laboratório: {COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ActivePage } from '../types';
import { ShieldCheck, ArrowLeft, Award, Cpu, CheckCircle2, Factory, Microscope, Gauge } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';
import cleanRoomImg from '../../assets/clean-room.png';

interface AboutPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActivePage }) => {
  return (
    <div className="min-h-screen bg-[#F5F6F8] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#1824E8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para Início</span>
          </button>
        </div>

        {/* Hero with Logo & Narrative */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
          <BrandLogo size="lg" />
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#161A23] tracking-tight">
            Laboratório Técnico Especializado em Injeção Diesel
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            O <strong>Laboratório Diesel — LB Distribuidora Ltda</strong> nasceu com a missão de transformar o diagnóstico e o reparo de sistemas de injeção diesel através da aplicação rigorosa de engenharia, bancadas eletrônicas computadorizadas e venda de peças de alta precisão (Bicos, Bombas, Turbinas, Tubo Rail novos ou remanufaturados).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 w-full">
            <div className="p-4 rounded-xl bg-[#F5F6F8] border border-slate-200 text-center">
              <span className="font-heading font-extrabold text-2xl text-[#1824E8] block">2500 Bar</span>
              <span className="text-xs text-slate-600 font-medium">Bancadas Digitais EPS 708</span>
            </div>
            <div className="p-4 rounded-xl bg-[#F5F6F8] border border-slate-200 text-center">
              <span className="font-heading font-extrabold text-2xl text-[#1824E8] block">ISO 4113</span>
              <span className="text-xs text-slate-600 font-medium">Fluidos Oficiais de Calibração</span>
            </div>
            <div className="p-4 rounded-xl bg-[#F5F6F8] border border-slate-200 text-center">
              <span className="font-heading font-extrabold text-2xl text-[#1824E8] block">100%</span>
              <span className="text-xs text-slate-600 font-medium">Laudo Gráfico de Entrega</span>
            </div>
          </div>
        </div>

        {/* Laboratory Photos Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 relative h-64 group shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
              alt="Bancada de teste digital de injetores diesel"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-heading font-bold text-sm">Bancadas Computadorizadas</p>
              <p className="text-[11px] text-slate-300">Simulação real de pressão de trabalho até 2.500 bar</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 relative h-64 group shadow-sm">
            <img
                  src={cleanRoomImg}
                  alt="Ambiente estéril para montagem de componentes de precisão"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-heading font-bold text-sm">Montagem em Ambiente Estéril</p>
              <p className="text-[11px] text-slate-300">Filtragem de ar e controle rigoroso contra microcontaminantes</p>
            </div>
          </div>
        </div>

        {/* Difference: Garage vs Laboratory */}
        <div className="bg-[#0A1233] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-6">
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start w-full">
            <span className="text-xs font-bold text-[#1824E8] uppercase tracking-wider block">
              Por que um laboratório?
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              A diferença entre uma oficina genérica e um laboratório diesel.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <p className="font-bold text-rose-400">Oficina Tradicional:</p>
              <ul className="space-y-1 text-slate-300">
                <li>• Troca de peças por tentativa e erro</li>
                <li>• Ausência de bancada digital para teste de débito</li>
                <li>• Não gera novo código IMA para codificação</li>
                <li>• Risco de contaminação por poeira e limalha</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900 border border-[#1824E8]/50 space-y-2">
              <p className="font-bold text-emerald-400">Laboratório Diesel:</p>
              <ul className="space-y-1 text-slate-300">
                <li>• Diagnóstico exato comprovado por gráfico</li>
                <li>• Bancadas Bosch e simuladores de 2500 bar</li>
                <li>• Geração oficial de código IMA/ISA</li>
                <li>• Montagem em ambiente limpo com garantia real</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

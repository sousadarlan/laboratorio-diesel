import React from 'react';
import { ActivePage } from '../types';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface PrivacyPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ setActivePage }) => {
  return (
    <div className="min-h-screen bg-[#F5F6F8] py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
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

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8ECFF] text-[#1824E8] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#161A23]">
                Política de Privacidade & Termos de Uso
              </h1>
              <p className="text-xs text-slate-500">
                Conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 space-y-4 pt-4 border-t border-slate-100 leading-relaxed">
            <h3 className="font-heading font-bold text-base text-[#161A23]">1. Coleta de Informações</h3>
            <p>
              A <strong>{COMPANY_INFO.name}</strong> coleta exclusivamente dados estritamente necessários para a prestação de serviços de diagnóstico, emissão de orçamentos técnicos e fornecimento de componentes automotivos diesel (tais como nome, telefone de contato, dados de veículo ou razão social para faturamento B2B).
            </p>

            <h3 className="font-heading font-bold text-base text-[#161A23]">2. Uso dos Dados</h3>
            <p>
              As informações fornecidas voluntariamente através de nossos canais de atendimento ou WhatsApp são utilizadas unicamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Elaboração e envio de propostas comerciais e laudos técnicos;</li>
              <li>Atendimento e esclarecimento de dúvidas técnicas sobre componentes;</li>
              <li>Emissão de notas fiscais e certificados de garantia;</li>
              <li>Comunicação sobre o andamento dos testes em bancada.</li>
            </ul>

            <h3 className="font-heading font-bold text-base text-[#161A23]">3. Compartilhamento e Segurança</h3>
            <p>
              Não comercializamos, transferimos ou compartilhamos informações pessoais de clientes com terceiros para fins de marketing. Todos os laudos e dados de ensaio são armazenados sob rígidos padrões de segurança digital.
            </p>

            <h3 className="font-heading font-bold text-base text-[#161A23]">4. Contato do Encarregado de Dados</h3>
            <p>
              Para solicitar a exclusão, retificação ou esclarecimentos sobre o tratamento de seus dados pessoais, entre em contato através do e-mail: <strong>{COMPANY_INFO.email}</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

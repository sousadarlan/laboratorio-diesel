import React, { useState } from 'react';
import { WORKSHOP_BENEFITS, COMPANY_INFO } from '../data/mockData';
import { ActivePage } from '../types';
import {
  Wrench,
  Clock,
  FileText,
  Headphones,
  Building2,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getWorkshopWhatsAppUrl, createWhatsAppUrl } from '../utils/whatsapp';

interface WorkshopsPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const WorkshopsPage: React.FC<WorkshopsPageProps> = ({ setActivePage }) => {
  const [workshopName, setWorkshopName] = useState('');
  const [contactName, setContactName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const iconMap: Record<string, React.ElementType> = {
    Clock,
    FileText,
    Headphones,
    Building2,
    Truck,
    ShieldCheck,
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Sou da oficina *${workshopName}* (Responsável: ${contactName}, Cidade: ${city}, Tel: ${phone}). Gostaria de cadastrar nossa oficina para a parceria B2B e fila prioritária de testes do Laboratório Diesel.`;
    window.open(createWhatsAppUrl(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* Hero Section B2B with Laboratory Photo Backdrop */}
        <div className="bg-[#0A1233] text-white rounded-3xl p-8 sm:p-14 mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="inline-block px-3 py-1 rounded-md bg-[#1824E8]/20 border border-[#1824E8]/40 text-[#E8ECFF] text-xs font-bold uppercase tracking-wider">
                PROGRAMA DE PARCERIA B2B
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                O Laboratório Técnico de Confiança da Sua Oficina.
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Você cuida da mecânica geral do veículo e nós cuidamos da injeção diesel com bancadas computadorizadas, laudos com sua marca e envio expresso para todo o Mato Grosso e Brasil.
              </p>
              <div className="pt-2 flex justify-center lg:justify-start items-center gap-4 w-full">
                <a
                  href={getWorkshopWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1824E8] hover:bg-[#1235A8] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#1824E8]/30 transition-all w-full sm:w-auto"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-base text-white" />
                  <span>Atendimento Direto para Oficinas</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative h-64 sm:h-72 group">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Laboratório Diesel atendendo oficinas mecânicas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8ECFF] bg-[#1824E8] px-2 py-0.5 rounded">
                    Bancadas Digitais EPS 708
                  </span>
                  <p className="text-xs font-semibold mt-1">Laudos técnicos impressos para seus clientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Advantages Cards */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#161A23]">
              Vantagens Exclusivas para Oficinas e Mecânicos
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Desenhado para evitar carro parado no seu elevador e aumentar a lucratividade da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKSHOP_BENEFITS.map((benefit, idx) => {
              const Icon = iconMap[benefit.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E8ECFF] text-[#1824E8] flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#161A23]">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Registration Form Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-3xl mx-auto">
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="text-xs font-bold text-[#1824E8] uppercase tracking-wider block mb-1">
              Cadastro Rápido B2B
            </span>
            <h3 className="font-heading font-bold text-2xl text-[#161A23]">
              Cadastre sua Oficina no Laboratório Diesel
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Preencha os dados da sua empresa para liberar tabela diferenciada e canal prioritário no WhatsApp.
            </p>
          </div>

          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nome da Oficina / Razão Social
                </label>
                <input
                  type="text"
                  required
                  value={workshopName}
                  onChange={(e) => setWorkshopName(e.target.value)}
                  placeholder="Ex: Auto Mecânica Centro Diesel"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1824E8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nome do Contato / Responsável
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Ex: Carlos Mecânico"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1824E8]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Cidade / UF
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ex: Cuiabá - MT"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1824E8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  WhatsApp / Celular com DDD
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: (65) 99999-9999"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#1824E8]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#1824E8] hover:bg-[#1235A8] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all mt-4 cursor-pointer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-base text-white" />
              <span>ENVIAR CADASTRO VIA WHATSAPP</span>
            </button>
          </form>

          {submitted && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-center">
              Cadastro enviado! Redirecionando para o WhatsApp do nosso departamento comercial.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

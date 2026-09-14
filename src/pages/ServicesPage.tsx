import React from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem, ActivePage } from '../types';
import { Laptop, Gauge, Wrench, ShieldCheck, Cpu, Sparkles, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  setActivePage: (page: ActivePage) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, setActivePage }) => {
  const iconMap: Record<string, React.ElementType> = {
    Laptop,
    Gauge,
    Wrench,
    ShieldCheck,
    Cpu,
    Sparkles,
  };

  const handleServiceClick = (service: ServiceItem) => {
    onSelectService(service);
    setActivePage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

        {/* Hero Banner */}
        <div className="bg-[#0A1233] text-white rounded-3xl p-8 sm:p-12 mb-12 relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <span className="inline-block px-3 py-1 rounded-md bg-[#1824E8]/20 border border-[#1824E8]/40 text-[#E8ECFF] text-xs font-bold uppercase tracking-wider">
              TECNOLOGIA DE LABORATÓRIO DIESEL
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Serviços de Diagnóstico e Reparação Common Rail
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Equipamentos computadorizados de última geração para teste, calibração micrométrica e recondicionamento de sistemas de injeção diesel com certificação.
            </p>
          </div>
        </div>

        {/* Services Full List with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Wrench;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Service Photo Banner */}
                <div 
                  onClick={() => handleServiceClick(service)}
                  className="relative h-48 w-full overflow-hidden bg-slate-900 cursor-pointer"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute top-4 left-4 w-10 h-10 rounded-2xl bg-white/95 backdrop-blur-xs text-[#1824E8] flex items-center justify-center font-bold shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full bg-[#1824E8] text-white shadow-xs">
                    {service.turnaroundTime}
                  </span>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => handleServiceClick(service)}
                      className="font-heading font-bold text-xl text-[#161A23] hover:text-[#1824E8] cursor-pointer transition-colors mb-3"
                    >
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                      <p className="text-xs font-bold text-slate-700">Diferenciais do Procedimento:</p>
                      {service.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1824E8] flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => handleServiceClick(service)}
                      className="text-xs font-bold text-[#1824E8] hover:text-[#1235A8] flex items-center gap-1"
                    >
                      <span>Ver procedimento completo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={getServiceWhatsAppUrl(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-xs"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="text-sm text-white" />
                      <span>Agendar</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

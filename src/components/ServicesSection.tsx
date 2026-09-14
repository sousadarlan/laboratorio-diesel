import React from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem, ActivePage } from '../types';
import { Laptop, Gauge, Wrench, ShieldCheck, Cpu, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  setActivePage: (page: ActivePage) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  setActivePage,
}) => {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-14 gap-6">
          <div className="text-center">
            <span className="text-xs font-bold text-[#1824E8] tracking-widest uppercase mb-1.5 block">
              Serviços de Laboratório
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#161A23] tracking-tight leading-tight">
              Tecnologia para diagnosticar. <br />
              <span className="text-[#1824E8]">Experiência para resolver.</span>
            </h2>
          </div>
          <button
            onClick={() => {
              setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1824E8] hover:text-[#1235A8]"
          >
            <span>Conhecer todos os serviços</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Services Cards Grid with High Quality Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Wrench;
            return (
              <div
                key={service.id}
                className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#1824E8]/50 shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Service Photo Banner */}
                <div 
                  onClick={() => handleServiceClick(service)}
                  className="relative h-44 w-full overflow-hidden bg-slate-900 cursor-pointer"
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

                  {/* Icon & Badge on top of image */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-xs text-[#1824E8] flex items-center justify-center shadow-md font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#1824E8] text-white shadow-xs">
                    {service.badge}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => handleServiceClick(service)}
                      className="font-heading font-bold text-base sm:text-lg text-[#161A23] group-hover:text-[#1824E8] transition-colors mb-2 cursor-pointer"
                    >
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-1.5 border-t border-slate-200/60 pt-3">
                      {service.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-[#1824E8] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <button
                      onClick={() => handleServiceClick(service)}
                      className="text-xs font-bold text-[#1824E8] hover:text-[#1235A8] flex items-center gap-1"
                    >
                      <span>Ver detalhes</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <a
                      href={getServiceWhatsAppUrl(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="text-sm text-emerald-600" />
                      <span>Agendar</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

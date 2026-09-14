import React from 'react';
import { ServiceItem, ActivePage } from '../types';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Wrench,
  Cpu,
  AlertCircle,
  FileCheck,
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';

interface ServiceDetailPageProps {
  service: ServiceItem;
  setActivePage: (page: ActivePage) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, setActivePage }) => {
  return (
    <div className="min-h-screen bg-[#F5F6F8] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => {
              setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#1824E8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar aos Serviços de Laboratório</span>
          </button>
        </div>

        {/* Main Service Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm space-y-8">
          {/* Service Image Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#1824E8] text-white text-xs font-bold uppercase tracking-wider">
                  {service.badge}
                </span>
                <span className="px-3 py-1 rounded-md bg-white/20 backdrop-blur-xs text-white text-xs font-medium flex items-center gap-1.5 border border-white/20">
                  <Clock className="w-3.5 h-3.5" />
                  Tempo estimado: {service.turnaroundTime}
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                {service.title}
              </h1>
            </div>
          </div>

          <div className="p-6 sm:p-10 pt-0 space-y-8">
            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Benefits Checklist */}
            <div className="p-6 rounded-2xl bg-[#E8ECFF]/50 border border-blue-200/60 space-y-3">
              <h4 className="font-heading font-bold text-sm text-[#1824E8] uppercase tracking-wider">
                Garantias e Vantagens deste Procedimento
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#1824E8] flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div>
              <h3 className="font-heading font-bold text-lg text-[#161A23] mb-6 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#1824E8]" />
                Etapas do Processo Laboratorial
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-[#F5F6F8] border border-slate-200 relative space-y-1.5"
                  >
                    <span className="text-xs font-mono font-bold text-[#1824E8] uppercase tracking-wider block">
                      Etapa {step.step}
                    </span>
                    <h4 className="font-heading font-bold text-sm text-[#161A23]">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment and Symptoms Handled */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              {/* Equipment */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-sm text-[#161A23] flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#1824E8]" />
                  Equipamentos Utilizados
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  {service.equipmentUsed.map((eq, i) => (
                    <li key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#1824E8] flex-shrink-0" />
                      <span className="font-medium">{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Symptoms Addressed */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-sm text-[#161A23] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Sintomas que este serviço resolve
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  {service.symptomsAddressed.map((sym, i) => (
                    <li key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-50/50 border border-amber-200/60 text-amber-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-8 rounded-3xl bg-[#0A1233] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-left">
                <h4 className="font-heading font-bold text-lg text-white">
                  Precisa agendar este serviço?
                </h4>
                <p className="text-xs text-slate-300">
                  Garantia: <strong>{service.warranty}</strong> com laudo gráfico de bancada.
                </p>
              </div>

              <a
                href={getServiceWhatsAppUrl(service)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-4 px-8 rounded-xl bg-[#1824E8] hover:bg-[#1235A8] text-white font-heading font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-lg shadow-[#1824E8]/30 transition-all text-center"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-base text-white" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { MapPin, Phone, Clock, Navigation, ShieldCheck, FileText } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${COMPANY_INFO.name}, ${COMPANY_INFO.address}, ${COMPANY_INFO.city} - ${COMPANY_INFO.state}`
  )}`;

  return (
    <section className="py-20 bg-[#F5F6F8] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#1824E8] tracking-widest uppercase mb-1 block">
            Estrutura Física & Atendimento
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#161A23] tracking-tight">
            Estamos prontos para atender você.
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Venha conhecer nosso laboratório ou envie seus componentes para teste em bancada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact & Laboratory Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8ECFF] text-[#1824E8] text-xs font-bold uppercase mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Laboratório Homologado</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-[#161A23] mb-2">
                Laboratório Diesel
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Especialistas em diagnóstico, recondicionamento e componentes para sistemas Common Rail.
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1824E8] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#161A23]">{COMPANY_INFO.address}</p>
                    <p className="text-xs text-slate-500">{COMPANY_INFO.city} / {COMPANY_INFO.state} • CEP {COMPANY_INFO.cep}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#1824E8] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#161A23]">CNPJ: 42.078.149/0001-33</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#1824E8] flex-shrink-0" />
                  <div>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} className="font-bold hover:text-[#1824E8]">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <a
                      href={createWhatsAppUrl('Olá! Gostaria de falar com o Laboratório Diesel.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:underline"
                    >
                      WhatsApp: {COMPANY_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <Clock className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-700">Horário de Funcionamento:</p>
                    <p>{COMPANY_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-[#1824E8] hover:bg-[#1235A8] text-white font-heading font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>TRAÇAR ROTA NO MAPA</span>
              </a>
            </div>
          </div>

          {/* Right: Modern Stylized Interactive Map Mockup */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative min-h-[380px] flex flex-col">
            {/* Visual map preview canvas */}
            <div className="relative flex-1 bg-slate-100 overflow-hidden flex items-center justify-center p-6">
              {/* Map background illustration */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `radial-gradient(#1824E8 1px, transparent 1px), radial-gradient(#1235A8 1px, #f8fafc 1px)`,
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 12px 12px',
                }}
              />

              {/* Map graphic layout */}
              <div className="relative z-10 text-center max-w-sm p-6 bg-white/95 rounded-2xl shadow-xl border border-slate-200 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-[#1824E8] text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#1824E8]/30 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-extrabold text-base text-[#161A23]">
                  Laboratório Diesel — Várzea Grande / MT
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {COMPANY_INFO.address}, {COMPANY_INFO.city} - {COMPANY_INFO.state}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-4 text-xs font-semibold text-[#1824E8]">
                  <span>Estacionamento Próprio</span>
                  <span>•</span>
                  <span>Recepção Climatizada</span>
                </div>
              </div>
            </div>

            {/* Bottom info banner */}
            <div className="p-4 bg-slate-900 text-white text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-slate-300">Envio diário para o interior do MT e outros estados</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-300 hover:text-white font-bold underline"
              >
                Abrir no Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

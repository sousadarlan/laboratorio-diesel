import React from 'react';
import { Microscope, Gauge, Cpu, CheckCircle2, Shield, Activity } from 'lucide-react';

export const LaboratoryAuthority: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Laboratory Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-4/5 relative group">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Técnico operando bancada de injeção diesel digital"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-[#0A1233]/90 text-white text-[11px] font-medium backdrop-blur-xs">
                  Bancada Bosch EPS Digital
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#E8ECFF] border border-blue-200/80">
                <div className="font-heading font-extrabold text-2xl text-[#1824E8]">2500 Bar</div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">Capacidade de Ensaio de Alta Pressão</div>
                <p className="text-[11px] text-slate-500 mt-1">Homologado para as mais recentes gerações Common Rail Euro 6.</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-5 rounded-2xl bg-[#0A1233] text-white border border-slate-800">
                <div className="font-heading font-extrabold text-2xl text-emerald-400">± 0.05 mm³</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">Precisão Micrométrica de Calibração</div>
                <p className="text-[11px] text-slate-400 mt-1">Garante queima limpa e ausência de fumaça.</p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-4/5 relative group">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                  alt="Sala limpa de montagem de bicos injetores"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-[#0A1233]/90 text-white text-[11px] font-medium backdrop-blur-xs">
                  Ambiente com Filtragem Estéril
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative of Precision */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="text-xs font-bold text-[#1824E8] tracking-widest uppercase mb-1 block">
              Rigor Técnico & Engenharia
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#161A23] tracking-tight leading-tight">
              Precisão em cada diagnóstico.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Sistemas de injeção diesel operam sob pressões extremas de até 2.500 bar, onde folgas de
              apenas 2 micrômetros determinam a vida útil do motor. Por isso, não realizamos reparos
              por tentativa.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F5F6F8] border border-slate-200 flex items-center justify-center text-[#1824E8] flex-shrink-0">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#161A23]">Fluidos e Padrões ISO 4113</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Ensaio computadorizado com temperatura controlada e óleo de calibração padrão mundial de montadora.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F5F6F8] border border-slate-200 flex items-center justify-center text-[#1824E8] flex-shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#161A23]">Geração Oficial de Código IMA</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Todo injetor reparado sai com novo mapa digital para aprendizado pela central eletrônica (ECU) do veículo.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F5F6F8] border border-slate-200 flex items-center justify-center text-[#1824E8] flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#161A23]">Laudo Gráfico de Entrega</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Entregamos o relatório impresso com os débitos de pré-injeção, vazão total e estanqueidade comprovados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

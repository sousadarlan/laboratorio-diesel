import React from 'react';
import { SUPPORTED_BRANDS } from '../data/mockData';

export const BrandPartners: React.FC = () => {
  return (
    <section className="py-14 bg-[#F5F6F8] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-[#1824E8] tracking-widest uppercase mb-1 block">
            Homologação & Compatibilidade
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#161A23] tracking-tight">
            Tecnologia das principais marcas do mercado.
          </h2>
        </div>

        {/* Clean, Minimalist Monochromatic Brand Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {SUPPORTED_BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#1824E8]/50 shadow-2xs hover:shadow-md transition-all text-center flex flex-col items-center justify-center group"
            >
              <span className="font-heading font-extrabold text-lg text-slate-800 group-hover:text-[#1824E8] transition-colors tracking-tight">
                {brand.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                {brand.specialty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

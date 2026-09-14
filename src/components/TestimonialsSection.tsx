import React from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#1824E8] tracking-widest uppercase mb-1 block">
            Avaliações & Experiência Real
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#161A23] tracking-tight">
            Confiança construída na prática.
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Depoimentos de proprietários de picapes, frotistas e mecânicos parceiros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#F5F6F8] rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/70">
                <p className="font-heading font-bold text-xs text-[#161A23]">{t.name}</p>
                <p className="text-[11px] text-slate-500">{t.role}</p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="text-[#1824E8] font-medium">{t.location}</span>
                  <span>{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

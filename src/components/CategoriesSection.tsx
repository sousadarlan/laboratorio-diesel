import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import {
  Fuel,
  Gauge,
  Disc,
  Activity,
  SlidersHorizontal,
  Cpu,
  Layers,
  Settings2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface CategoryItem {
  id: string;
  name: string;
  count: number;
  description: string;
  icon: string;
  image: string;
}

export const CategoriesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const iconMap: Record<string, React.ElementType> = {
    Fuel,
    Gauge,
    Disc,
    Activity,
    SlidersHorizontal,
    Cpu,
    Layers,
    Settings2,
  };

  const allCategories: CategoryItem[] = [
    {
      id: 'Bicos Injetores',
      name: 'Bicos Injetores Common Rail',
      count: 48,
      description: 'Injetores indutivos e piezoelétricos Bosch, Denso, Delphi e Continental.',
      icon: 'Fuel',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'Bombas de Alta Pressao',
      name: 'Bombas de Alta Pressão',
      count: 26,
      description: 'Bombas CP1, CP3, CP4, Denso HP3 e Delphi para picapes e caminhões.',
      icon: 'Gauge',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'Turbinas',
      name: 'Turbinas e Conjuntos Rotativos',
      count: 18,
      description: 'Turbos completos e conjuntos rotativos balanceados Garrett, BorgWarner e Holset.',
      icon: 'Disc',
      image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'Tubo Rail',
      name: 'Tubo Common Rail & Flautas',
      count: 14,
      description: 'Flautas forjadas de alta pressão com sensores e válvulas limitadoras aferidas.',
      icon: 'Activity',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'Valvulas e Reguladores',
      name: 'Válvulas Reguladoras & MPROP',
      count: 32,
      description: 'Válvulas dosadoras PWM, PCV, SCV e reguladores de pressão de alta precisão.',
      icon: 'SlidersHorizontal',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'Sensores',
      name: 'Sensores de Pressão & Rotação',
      count: 24,
      description: 'Sensores piezoresistivos de 0 a 2500 bar e sensores de fase/rotação originais.',
      icon: 'Cpu',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'Unidades Injetoras',
      name: 'Unidades Injetoras (UI / UP)',
      count: 22,
      description: 'Testes e reparação eletrônica para Scania, Volvo FH, Iveco e Mercedes Actros.',
      icon: 'Layers',
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'Reparos e Vedacoes',
      name: 'Reparos, Toberas & Vedações',
      count: 35,
      description: 'Jogos de juntas, esferas de vedação, toberas novas e calços micrométricos.',
      icon: 'Settings2',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.ceil(allCategories.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleCategories = allCategories.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading & Slide Navigation Controls */}
        <div className="flex flex-col items-center mb-8 gap-4 pb-4 border-b border-slate-100">
          <div className="text-center">
            <span className="text-xs font-bold text-[#1824E8] tracking-widest uppercase mb-1 block">
              Sistemas Especializados
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#161A23] tracking-tight">
              Soluções para sistemas diesel
            </h2>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Pagination dots indicator */}
            <div className="flex items-center gap-1.5 mr-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-[#1824E8]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Carousel Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Slide anterior"
                className="w-9 h-9 rounded-xl border border-slate-200 hover:border-[#1824E8] bg-white hover:bg-[#E8ECFF] text-slate-700 hover:text-[#1824E8] flex items-center justify-center transition-all shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Próximo slide"
                className="w-9 h-9 rounded-xl border border-slate-200 hover:border-[#1824E8] bg-white hover:bg-[#E8ECFF] text-slate-700 hover:text-[#1824E8] flex items-center justify-center transition-all shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4-Item Grid Slider with Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Fuel;
            const whatsappMsg = `Olá! Gostaria de consultar sobre disponibilidade ou reparo de ${category.name} no Laboratório Diesel.`;
            const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <a
                key={category.id}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F8FAFC] hover:bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#1824E8] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo Banner with Icon Overlay */}
                <div className="relative h-36 w-full overflow-hidden bg-slate-900">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Floating Icon and Status Badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs text-[#1824E8] flex items-center justify-center shadow-xs">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-white bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                    Disponível
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-[#161A23] group-hover:text-[#1824E8] transition-colors mb-1 line-clamp-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                      {category.description}
                    </p>
                  </div>

                  {/* WhatsApp Consultation Action */}
                  <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-[#1824E8] group-hover:text-[#1235A8]">
                    <span className="flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faWhatsapp} className="text-emerald-600 text-sm" />
                      <span>Consultar</span>
                    </span>
                    <span className="text-slate-400 group-hover:text-[#1824E8] text-[11px] font-medium">Novo / Reman</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

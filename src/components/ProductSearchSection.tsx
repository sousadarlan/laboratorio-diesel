import React, { useState } from 'react';
import { Search, ArrowRight, Fuel, Gauge, SlidersHorizontal, Sparkles } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/mockData';
import { Product, ActivePage } from '../types';

interface ProductSearchSectionProps {
  onSearchSubmit: (query: string) => void;
  onSelectProduct: (product: Product) => void;
  setActivePage: (page: ActivePage) => void;
}

export const ProductSearchSection: React.FC<ProductSearchSectionProps> = ({
  onSearchSubmit,
  onSelectProduct,
  setActivePage,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const quickTags = [
    'Hilux 3.0',
    'Amarok 2.0',
    'Ranger 3.2',
    'S10 2.8',
    'Bico injetor',
    'Bomba CP4',
    '0445110305',
    'RAM 2500',
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearchSubmit(searchTerm.trim());
      setActivePage('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag);
    onSearchSubmit(tag);
    setActivePage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Instant matching products for live dropdown preview
  const liveResults = searchTerm.trim().length >= 2
    ? PRODUCTS_DATA.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.oemCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.vehicleApplication.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <section className="relative z-20 -mt-8 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/90 p-6 sm:p-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#161A23] tracking-tight">
            Encontre a peça que precisa.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-1">
            Busque pelo veículo, componente ou código da peça (Bosch, Denso, Delphi).
          </p>
        </div>

        {/* Big Search Form */}
        <form onSubmit={handleSearch} className="relative">
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 250)}
                placeholder="Digite veículo, peça ou código... (Ex: Hilux 3.0, Amarok, 044511...)"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 text-base text-[#161A23] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1824E8] focus:border-transparent transition-all shadow-xs"
              />
            </div>

            <button
              type="submit"
              className="bg-[#1824E8] hover:bg-[#1235A8] text-white font-heading font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-xl transition-all shadow-md shadow-[#1824E8]/25 flex items-center justify-center gap-2"
            >
              <span>BUSCAR</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Live Search Instant Preview Dropdown */}
          {isFocused && liveResults.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden divide-y divide-slate-100">
              <div className="p-2.5 bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Resultados rápidos correspondentes
              </div>
              {liveResults.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => {
                    onSelectProduct(product);
                    setActivePage('product-detail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full p-3 text-left hover:bg-[#E8ECFF]/50 transition-colors flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded-lg border border-slate-200"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#161A23]">{product.name}</p>
                      <p className="text-[11px] text-slate-500">
                        Cód: <span className="font-mono text-[#1824E8] font-semibold">{product.code}</span> • {product.vehicleApplication}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#1824E8] flex-shrink-0">
                    Ver detalhes →
                  </span>
                </button>
              ))}
            </div>
          )}
        </form>

        {/* Quick Search Tag Suggestions */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400">Sugestões rápidas:</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#F5F6F8] hover:bg-[#E8ECFF] text-slate-700 hover:text-[#1824E8] border border-slate-200/80 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

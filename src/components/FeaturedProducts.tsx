import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/mockData';
import { Product, ActivePage, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  quoteItems: { product: Product }[];
  setActivePage: (page: ActivePage) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onAddToQuote,
  quoteItems,
  setActivePage,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');

  const filterTabs = ['Todos', 'Bicos Injetores', 'Bombas de Alta Pressão', 'Turbinas', 'Tubo Rail', 'Válvulas e Reguladores'];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    if (selectedFilter === 'Todos') return p.featured || p.isPopular;
    return p.category === selectedFilter;
  }).slice(0, 6);

  const quoteProductIds = new Set(quoteItems.map((item) => item.product.id));

  return (
    <section className="py-20 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with Title and Category Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1824E8] tracking-widest uppercase mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Estoque de Precisão</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#161A23] tracking-tight">
              Produtos em destaque
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Componentes rigorosamente aferidos em bancadas digitais com garantia de laboratório.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all ${
                  selectedFilter === tab
                    ? 'bg-[#1824E8] text-white shadow-md shadow-[#1824E8]/20'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToQuote={onAddToQuote}
              isAddedToQuote={quoteProductIds.has(product.id)}
            />
          ))}
        </div>

        {/* View Full Catalog CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setActivePage('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#161A23] hover:text-[#1824E8] font-heading font-bold text-sm border border-slate-300 shadow-sm transition-all hover:border-[#1824E8]"
          >
            <span>Explorar catálogo completo de componentes ({PRODUCTS_DATA.length}+ itens)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

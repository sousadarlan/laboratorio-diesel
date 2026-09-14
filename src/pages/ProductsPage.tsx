import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, CATEGORIES_DATA } from '../data/mockData';
import { Product, ProductCategory, ActivePage } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Search, Filter, SlidersHorizontal, ArrowLeft, Fuel, Check } from 'lucide-react';

interface ProductsPageProps {
  selectedCategory: ProductCategory | 'Todas';
  setSelectedCategory: (cat: ProductCategory | 'Todas') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  quoteItems: { product: Product }[];
  setActivePage: (page: ActivePage) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onSelectProduct,
  onAddToQuote,
  quoteItems,
  setActivePage,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('Todas');
  const [selectedCondition, setSelectedCondition] = useState<string>('Todas');
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'relevance' | 'name' | 'brand'>('relevance');

  const brands = ['Todas', 'Bosch', 'Denso', 'Delphi', 'Continental', 'Siemens VDO', 'Garrett', 'Holset', 'Master Power'];
  const conditions = ['Todas', 'Novo Original', 'Recondicionado com Laudo'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      // Category filter
      if (selectedCategory !== 'Todas' && p.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'Todas' && p.brand !== selectedBrand) {
        return false;
      }
      // Condition filter
      if (selectedCondition !== 'Todas' && p.condition !== selectedCondition) {
        return false;
      }
      // In stock
      if (onlyInStock && !p.inStock) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchCode = p.code.toLowerCase().includes(q);
        const matchOem = p.oemCode.toLowerCase().includes(q);
        const matchApp = p.vehicleApplication.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        if (!matchName && !matchCode && !matchOem && !matchApp && !matchBrand) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'brand') return a.brand.localeCompare(b.brand);
      return 0;
    });
  }, [selectedCategory, selectedBrand, selectedCondition, onlyInStock, searchQuery, sortBy]);

  const quoteProductIds = new Set(quoteItems.map((item) => item.product.id));

  return (
    <div className="min-h-screen bg-[#F5F6F8] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb & Navigation */}
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
          <span className="text-xs text-slate-500 font-mono">
            {filteredProducts.length} itens encontrados
          </span>
        </div>

        {/* Page Title & Search Bar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#1824E8] uppercase tracking-widest block mb-1">
              Catálogo Laboratorial
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#161A23] tracking-tight">
              Componentes para Sistemas Diesel
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Bicos injetores Common Rail, bombas de alta pressão, válvulas e componentes originais testados.
            </p>
          </div>

          {/* Search bar */}
          <div className="mt-6 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome, veículo (ex: Hilux 3.0, Amarok, Ranger) ou código de peça..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 text-sm text-[#161A23] focus:outline-none focus:ring-2 focus:ring-[#1824E8]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('Todas')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'Todas'
                ? 'bg-[#1824E8] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Todas as Categorias
          </button>
          {CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ProductCategory)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#1824E8] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Filters and Product Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-heading font-bold text-sm text-[#161A23] flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#1824E8]" />
                  Filtros
                </span>
                {(selectedBrand !== 'Todas' || selectedCondition !== 'Todas' || onlyInStock || selectedCategory !== 'Todas') && (
                  <button
                    onClick={() => {
                      setSelectedBrand('Todas');
                      setSelectedCondition('Todas');
                      setSelectedCategory('Todas');
                      setOnlyInStock(false);
                      setSearchQuery('');
                    }}
                    className="text-[11px] font-bold text-[#1824E8] hover:underline"
                  >
                    Limpar tudo
                  </button>
                )}
              </div>

              {/* Fabricante / Marca */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Fabricante
                </label>
                <div className="space-y-1">
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => setSelectedBrand(b)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                        selectedBrand === b
                          ? 'bg-[#E8ECFF] text-[#1824E8] font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{b}</span>
                      {selectedBrand === b && <Check className="w-3.5 h-3.5 text-[#1824E8]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Condição */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Condição
                </label>
                <div className="space-y-1">
                  {conditions.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCondition(c)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                        selectedCondition === c
                          ? 'bg-[#E8ECFF] text-[#1824E8] font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{c}</span>
                      {selectedCondition === c && <Check className="w-3.5 h-3.5 text-[#1824E8]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Apenas em estoque */}
              <div className="pt-2 border-t border-slate-100">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                    className="rounded text-[#1824E8] focus:ring-[#1824E8]"
                  />
                  <span>Apenas itens em estoque</span>
                </label>
              </div>
            </div>
          </div>

          {/* Product Cards Container */}
          <div className="lg:col-span-9 space-y-6">
            {/* Sort toolbar */}
            <div className="bg-white rounded-xl px-4 py-3 border border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">
                Mostrando <strong className="text-slate-800">{filteredProducts.length}</strong> de {PRODUCTS_DATA.length} peças
              </span>

              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-medium">Ordenar por:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#F5F6F8] border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#1824E8]"
                >
                  <option value="relevance">Mais Relevantes</option>
                  <option value="name">Nome (A - Z)</option>
                  <option value="brand">Fabricante (A - Z)</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
                <Fuel className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="font-heading font-bold text-lg text-slate-800">
                  Nenhum componente encontrado
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Não encontramos peças correspondentes aos filtros selecionados. Tente limpar os filtros ou fale com nosso laboratório para buscar sob encomenda.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('Todas');
                    setSelectedBrand('Todas');
                    setSelectedCondition('Todas');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#1824E8] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Ver Todos os Produtos
                </button>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

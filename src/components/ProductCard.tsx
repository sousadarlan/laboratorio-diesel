import React from 'react';
import { Product } from '../types';
import { ShieldCheck, Plus, Check, Eye } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToQuote?: (product: Product) => void;
  isAddedToQuote?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToQuote,
  isAddedToQuote,
}) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 hover:border-[#1824E8]/40 shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Product Image Container */}
      <div className="relative aspect-4/3 bg-slate-50 overflow-hidden border-b border-slate-100 cursor-pointer" onClick={() => onSelect(product)}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* Brand & Category badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none">
          <span className="px-2.5 py-0.5 rounded-md bg-[#0A1233]/90 text-white font-mono text-[10px] font-bold tracking-wider uppercase backdrop-blur-xs">
            {product.brand}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-white/95 text-slate-700 text-[10px] font-semibold border border-slate-200/80 shadow-2xs">
            {product.condition}
          </span>
        </div>

        {/* Stock Status Badge */}
        <div className="absolute top-3 right-3 pointer-events-none">
          {product.inStock ? (
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200/80 flex items-center gap-1 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Em Estoque
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-200">
              Sob Encomenda
            </span>
          )}
        </div>

        {/* Quick View Hover overlay */}
        <div className="absolute inset-0 bg-[#0A1233]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#161A23] text-xs font-bold shadow-lg">
            <Eye className="w-3.5 h-3.5 text-[#1824E8]" />
            Ver Ficha Técnica
          </span>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span className="uppercase tracking-wider font-semibold text-[#1824E8]">{product.category}</span>
            <span className="font-mono text-slate-500 font-medium">Cód: {product.code}</span>
          </div>

          <h3
            onClick={() => onSelect(product)}
            className="font-heading font-bold text-base text-[#161A23] group-hover:text-[#1824E8] transition-colors line-clamp-2 cursor-pointer mb-2"
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 mb-3">
            <span className="font-semibold text-slate-700">Aplicação:</span> {product.vehicleApplication}
          </p>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-4 bg-slate-50 p-2 rounded-lg border border-slate-100">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1824E8] flex-shrink-0" />
            <span className="line-clamp-1">{product.warranty}</span>
          </div>
        </div>

        {/* Availability & Actions */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1824E8]"></span>
              <span className="font-heading font-bold text-xs text-slate-700">
                Disponível Novo / Reman
              </span>
            </div>

            {onAddToQuote && (
              <button
                onClick={() => onAddToQuote(product)}
                title={isAddedToQuote ? 'Adicionado à cotação' : 'Adicionar à lista de cotação'}
                className={`p-1.5 px-2.5 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${
                  isAddedToQuote
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                    : 'bg-slate-50 hover:bg-[#E8ECFF] border-slate-200 text-slate-700 hover:text-[#1824E8]'
                }`}
              >
                {isAddedToQuote ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Plus className="w-3.5 h-3.5" />}
                <span className="text-[11px]">
                  {isAddedToQuote ? 'Na Lista' : 'Lista'}
                </span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelect(product)}
              className="w-full py-2.5 px-2 rounded-xl bg-[#F5F6F8] hover:bg-slate-200/80 text-[#161A23] text-xs font-bold tracking-wide transition-colors text-center"
            >
              Ficha Técnica
            </button>

            <a
              href={getProductWhatsAppUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-2 rounded-xl bg-[#1824E8] hover:bg-[#1235A8] text-white text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-1.5 text-center shadow-xs"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-sm text-white" />
              <span>Cotar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

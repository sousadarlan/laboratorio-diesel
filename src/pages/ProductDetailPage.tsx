import React, { useState } from 'react';
import { Product, ActivePage } from '../types';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  ShoppingBag,
  Cpu,
  Truck,
  Check,
  Info,
  Layers,
  Wrench,
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductDetailPageProps {
  product: Product;
  onAddToQuote: (product: Product) => void;
  isAddedToQuote: boolean;
  setActivePage: (page: ActivePage) => void;
  onSelectRelatedProduct: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onAddToQuote,
  isAddedToQuote,
  setActivePage,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#F5F6F8] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Navigation / Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => {
              setActivePage('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#1824E8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Catálogo de Produtos</span>
          </button>

          <span className="text-xs text-slate-500 font-mono">
            Código: <strong className="text-[#1824E8]">{product.code}</strong>
          </span>
        </div>

        {/* Product Main Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-4/3 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <img
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80';
                  }}
                />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <span className="px-3 py-1 rounded-md bg-[#0A1233]/90 text-white font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                    {product.brand}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white text-slate-800 text-xs font-semibold shadow-xs border border-slate-200">
                    {product.condition}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  {product.inStock ? (
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1.5 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Em Estoque
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
                      Sob Encomenda
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Selector */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImageIndex === idx
                          ? 'border-[#1824E8] shadow-md scale-95'
                          : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Laboratory Quality Guarantee Box */}
              <div className="p-4 rounded-2xl bg-[#E8ECFF] border border-blue-200/80 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#1824E8] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 space-y-0.5">
                  <p className="font-heading font-bold text-[#1235A8]">
                    Garantia e Laudo de Bancada EPS
                  </p>
                  <p>
                    Componente aferido em ambiente controlado. Acompanha laudo gráfico com os parâmetros de injeção e código IMA quando aplicável.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Product Technical & Commercial Info */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#1824E8] uppercase tracking-wider mb-2">
                  <span>{product.category}</span>
                  <span>•</span>
                  <span>{product.brand}</span>
                </div>

                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#161A23] tracking-tight leading-snug mb-3">
                  {product.name}
                </h1>

                {/* Codes Box */}
                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs mb-4">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Código Fabricante:</span>
                    <span className="font-mono font-bold text-[#1824E8] text-sm">{product.code}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Código OEM / Montadora:</span>
                    <span className="font-mono font-bold text-slate-800 text-sm">{product.oemCode}</span>
                  </div>
                </div>

                {/* Commercial Availability Status */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#1824E8]"></span>
                      <span className="font-heading font-bold text-lg text-[#161A23]">
                        Disponível Novo ou Remanufaturado
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Consulte nossa equipe técnica para confirmar aplicação exata, estoque imediato e condições para Mato Grosso e todo o Brasil.
                    </p>
                  </div>
                </div>

                {/* Short Description */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-heading font-bold text-xs text-slate-700 uppercase tracking-wider">
                    Descrição do Componente
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Vehicle Applications */}
                <div className="space-y-2 mb-6">
                  <h3 className="font-heading font-bold text-xs text-slate-700 uppercase tracking-wider">
                    Veículos Compatíveis
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {product.compatibleVehicles.map((veh, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#F5F6F8] text-slate-800 border border-slate-200"
                      >
                        {veh}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  {/* WhatsApp CTA */}
                  <a
                    href={getProductWhatsAppUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:col-span-8 py-4 px-6 rounded-xl bg-[#1824E8] hover:bg-[#1235A8] text-white font-heading font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-lg shadow-[#1824E8]/25 transition-all text-center"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-base text-white" />
                    <span>SOLICITAR PELO WHATSAPP</span>
                  </a>

                  {/* Add to Quote */}
                  <button
                    onClick={() => onAddToQuote(product)}
                    className={`sm:col-span-4 py-4 px-4 rounded-xl border text-xs font-heading font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors ${
                      isAddedToQuote
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                        : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800'
                    }`}
                  >
                    {isAddedToQuote ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Adicionado</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-[#1824E8]" />
                        <span>+ Cotação</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#1824E8]" />
                    Despacho diário para MT e Brasil
                  </span>
                  <span>Garantia: {product.warranty}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Deep Table */}
          <div className="mt-12 pt-10 border-t border-slate-200">
            <h3 className="font-heading font-bold text-lg text-[#161A23] mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#1824E8]" />
              Especificações Técnicas de Engenharia
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr className="bg-slate-50/70">
                    <td className="px-4 py-3 font-semibold text-slate-700 w-1/3">Tipo de Sistema:</td>
                    <td className="px-4 py-3 text-slate-800 font-mono">{product.technicalSpecs.systemType}</td>
                  </tr>
                  {product.technicalSpecs.pressure && (
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-700">Pressão Máxima de Ensaio:</td>
                      <td className="px-4 py-3 text-slate-800 font-mono">{product.technicalSpecs.pressure}</td>
                    </tr>
                  )}
                  {product.technicalSpecs.cylinders && (
                    <tr className="bg-slate-50/70">
                      <td className="px-4 py-3 font-semibold text-slate-700">Cilindros / Motor:</td>
                      <td className="px-4 py-3 text-slate-800">{product.technicalSpecs.cylinders}</td>
                    </tr>
                  )}
                  {product.technicalSpecs.voltage && (
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-700">Tensão / Atuador:</td>
                      <td className="px-4 py-3 text-slate-800">{product.technicalSpecs.voltage}</td>
                    </tr>
                  )}
                  {product.technicalSpecs.calibrationStd && (
                    <tr className="bg-slate-50/70">
                      <td className="px-4 py-3 font-semibold text-slate-700">Padrão de Calibração:</td>
                      <td className="px-4 py-3 text-emerald-700 font-semibold">{product.technicalSpecs.calibrationStd}</td>
                    </tr>
                  )}
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-700">Garantia Técnica:</td>
                    <td className="px-4 py-3 text-slate-800">{product.warranty}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

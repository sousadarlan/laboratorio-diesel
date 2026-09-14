import React, { useState } from 'react';
import { QuoteItem, Product } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { getQuoteBagWhatsAppUrl } from '../utils/whatsapp';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearQuote: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearQuote,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [vehicle, setVehicle] = useState('');

  if (!isOpen) return null;

  const totalEstimated = items.reduce((acc, item) => {
    return acc + (item.product.price ? item.product.price * item.quantity : 0);
  }, 0);

  const handleWhatsAppSend = () => {
    const url = getQuoteBagWhatsAppUrl(items, customerName, vehicle);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 bg-[#0A1233] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#1824E8]" />
              <div>
                <h3 className="font-heading font-bold text-base text-white">
                  Lista de Cotação de Peças
                </h3>
                <p className="text-xs text-slate-300">
                  {items.length} {items.length === 1 ? 'item selecionado' : 'itens selecionados'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body items */}
          <div className="p-5 flex-1 overflow-y-auto space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="font-heading font-bold text-sm text-slate-800">
                  Sua lista de cotação está vazia
                </p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Navegue pelo catálogo e clique em "Adicionar à Cotação" para solicitar orçamento conjunto de componentes.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3.5 rounded-xl bg-[#F5F6F8] border border-slate-200 flex items-center justify-between gap-3"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-12 h-12 rounded-lg object-cover border border-slate-200 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-bold text-xs text-[#161A23] truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-[11px] font-mono text-[#1824E8]">
                          Cód: {item.product.code}
                        </p>
                        <p className="text-[11px] text-slate-500 truncate">
                          {item.product.vehicleApplication}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="p-1 text-slate-600 hover:text-slate-900"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-slate-600 hover:text-slate-900"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[11px] text-rose-500 hover:text-rose-700 flex items-center gap-0.5"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Remover</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Optional Customer Identification */}
                <div className="pt-3 border-t border-slate-200 space-y-2.5">
                  <p className="text-xs font-bold text-slate-700">Identificação para Cotação (Opcional):</p>
                  <input
                    type="text"
                    placeholder="Seu nome ou Oficina"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-[#1824E8]"
                  />
                  <input
                    type="text"
                    placeholder="Modelo e ano do veículo (Ex: Hilux 2018 2.8)"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-[#1824E8]"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer CTA */}
          {items.length > 0 && (
            <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-3">
              <div className="p-3 bg-[#E8ECFF] rounded-xl text-xs text-[#1235A8] border border-blue-200">
                <p className="font-semibold">Cotação Rápida no Laboratório</p>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Nossa equipe técnica responderá com a disponibilidade em estoque (peças Novas ou Reman) e condições de envio para MT e Brasil.
                </p>
              </div>

              <button
                onClick={handleWhatsAppSend}
                className="w-full py-3.5 rounded-xl bg-[#1824E8] hover:bg-[#1235A8] text-white font-heading font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#1824E8]/25 transition-all"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-base text-white" />
                <span>Enviar Cotação pelo WhatsApp</span>
              </button>

              <button
                onClick={onClearQuote}
                className="w-full text-center text-xs text-slate-400 hover:text-slate-600 py-1"
              >
                Limpar toda a lista
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

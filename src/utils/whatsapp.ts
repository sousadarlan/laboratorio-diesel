import { COMPANY_INFO } from '../data/mockData';
import { Product, ServiceItem, DieselSymptom, QuoteItem } from '../types';

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(product: Product): string {
  const msg = `Olá! Gostaria de consultar disponibilidade e valor do produto: *${product.name}* (Código: ${product.code} | OEM: ${product.oemCode}). Aplicação: ${product.vehicleApplication}.`;
  return createWhatsAppUrl(msg);
}

export function getServiceWhatsAppUrl(service: ServiceItem): string {
  const msg = `Olá! Gostaria de solicitar um orçamento para o serviço especializado: *${service.title}* no Laboratório Diesel.`;
  return createWhatsAppUrl(msg);
}

export function getSymptomWhatsAppUrl(symptom: DieselSymptom, vehicle?: string): string {
  const vText = vehicle ? ` no veículo ${vehicle}` : '';
  const msg = `Olá! Meu veículo está apresentando o sintoma: *${symptom.title}*${vText}. Gostaria de agendar uma avaliação e teste de injeção no laboratório.`;
  return createWhatsAppUrl(msg);
}

export function getWorkshopWhatsAppUrl(): string {
  const msg = `Olá! Sou mecânico/proprietário de oficina e gostaria de conhecer as condições de parceria B2B, fila prioritária de testes e fornecimento de peças do Laboratório Diesel.`;
  return createWhatsAppUrl(msg);
}

export function getQuoteBagWhatsAppUrl(items: QuoteItem[], customerName?: string, vehicle?: string): string {
  let msg = `Olá! Gostaria de solicitar uma cotação técnica consolidada no Laboratório Diesel:\n\n`;
  if (customerName) msg += `*Cliente:* ${customerName}\n`;
  if (vehicle) msg += `*Veículo:* ${vehicle}\n`;
  msg += `\n*Peças Solicitadas:*\n`;
  items.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.quantity}x ${item.product.name} (Cód: ${item.product.code})\n`;
  });
  msg += `\nFavor informar disponibilidade e condições de envio para Mato Grosso / Brasil.`;
  return createWhatsAppUrl(msg);
}

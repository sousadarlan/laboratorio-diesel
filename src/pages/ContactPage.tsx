import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { ActivePage } from '../types';
import { MapPin, Phone, Mail, Clock, Navigation, Send, ArrowLeft, ShieldCheck, FileText } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface ContactPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setActivePage }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [subject, setSubject] = useState('Orçamento de Peças');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `Olá! Meu nome é *${name}* (Tel: ${phone}). Assunto: *${subject}*. Veículo: ${vehicle || 'Não informado'}.\nMensagem: ${message}`;
    window.open(createWhatsAppUrl(formattedMsg), '_blank');
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${COMPANY_INFO.name}, ${COMPANY_INFO.address}, ${COMPANY_INFO.city} - ${COMPANY_INFO.state}`
  )}`;

  return (
    <div className="min-h-screen bg-[#F5F6F8] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="text-center lg:text-left">
                <span className="text-xs font-bold text-[#1824E8] uppercase tracking-wider block mb-1">
                  Atendimento Especializado
                </span>
                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#161A23] tracking-tight">
                  Fale com o Laboratório Diesel
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-2">
                  Atendimento técnico para proprietários de caminhonetes, utilitários, frotistas e mecânicos.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-2xl bg-[#F5F6F8] border border-slate-200 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1824E8] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#161A23]">Endereço:</p>
                    <p>{COMPANY_INFO.address}</p>
                    <p className="text-slate-500">{COMPANY_INFO.city} - {COMPANY_INFO.state} | CEP {COMPANY_INFO.cep}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F6F8] border border-slate-200 flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#1824E8] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#161A23]">CNPJ:</p>
                    <p className="font-medium text-slate-700">42.078.149/0001-33</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F6F8] border border-slate-200 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#1824E8] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#161A23]">Telefone:</p>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-[#1824E8] font-semibold">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xl text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-emerald-900">WhatsApp Técnico:</p>
                    <a
                      href={createWhatsAppUrl('Olá! Gostaria de falar com o Laboratório Diesel.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:underline"
                    >
                      {COMPANY_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F6F8] border border-slate-200 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1824E8] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-[#161A23]">E-mail:</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#1824E8]">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F6F8] border border-slate-200 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#161A23]">Horário de Funcionamento:</p>
                    <p className="text-slate-500">{COMPANY_INFO.hours}</p>
                  </div>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#0A1233] hover:bg-[#070D24] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-center"
              >
                <Navigation className="w-4 h-4 text-[#1824E8]" />
                <span>Abrir Rota no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="text-center lg:text-left">
                <span className="text-xs font-bold text-[#1824E8] uppercase tracking-wider block mb-1">
                  Mensagem Direta
                </span>
                <h2 className="font-heading font-bold text-2xl text-[#161A23]">
                  Solicite um Orçamento ou Tire sua Dúvida
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Envie os detalhes do seu veículo ou peça. Responderemos imediatamente via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Eduardo"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1824E8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Seu WhatsApp / Telefone
                    </label>
                    <input
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(65) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1824E8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Modelo e Ano do Veículo
                    </label>
                    <input
                      type="text"
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      placeholder="Ex: Hilux 2.8 2019 / Amarok 2.0"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1824E8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Finalidade do Contato
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1824E8] bg-white font-medium"
                    >
                      <option value="Orçamento de Peças">Orçamento de Peças</option>
                      <option value="Agendamento de Teste em Bancada">Agendamento de Teste em Bancada</option>
                      <option value="Diagnóstico de Falha/Fumaça">Diagnóstico de Falha/Fumaça</option>
                      <option value="Parceria para Oficinas (B2B)">Parceria para Oficinas (B2B)</option>
                      <option value="Outro Assunto">Outro Assunto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Descrição do Problema ou Peça Solicitada
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descreva o sintoma (ex: fumaça preta, código P0087, bico injetor travado) ou informe o código da peça..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#1824E8]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#1824E8] hover:bg-[#1235A8] text-white font-heading font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-lg shadow-[#1824E8]/25 transition-all"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-base text-white" />
                  <span>ENVIAR SOLICITAÇÃO PELO WHATSAPP</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

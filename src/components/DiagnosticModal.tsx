import React, { useState } from 'react';
import { X, Stethoscope, AlertTriangle, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { DIESEL_SYMPTOMS } from '../data/mockData';
import { DieselSymptom } from '../types';
import { getSymptomWhatsAppUrl } from '../utils/whatsapp';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [vehicle, setVehicle] = useState('');
  const [year, setYear] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState<DieselSymptom | null>(null);

  if (!isOpen) return null;

  const popularVehicles = [
    'Toyota Hilux 2.8 / 3.0',
    'VW Amarok 2.0 TDI',
    'Ford Ranger 3.2 / 2.2',
    'Chevrolet S10 2.8 CTDI',
    'Nissan Frontier 2.5',
    'Mitsubishi L200 Triton',
    'RAM 2500 Cummins',
    'Mercedes-Benz Sprinter',
    'Fiat Toro / Renegade Diesel',
    'Outro Veículo Diesel',
  ];

  const handleReset = () => {
    setStep(1);
    setVehicle('');
    setYear('');
    setSelectedSymptom(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden my-8 animate-scale-in">
        {/* Header */}
        <div className="bg-[#0A1233] text-white p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1824E8] flex items-center justify-center text-white shadow-md">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-white">
                Assistente de Diagnóstico Diesel
              </h3>
              <p className="text-xs text-slate-300">
                Triagem técnica orientada para sistemas Common Rail e injeção eletrônica
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-100 h-1.5 w-full">
          <div
            className="bg-[#1824E8] h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Body Steps */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#1824E8] uppercase tracking-wider">Passo 1 de 3</span>
                <h4 className="font-heading font-bold text-xl text-[#161A23] mt-1">
                  Qual é o seu veículo diesel?
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Selecione seu modelo ou digite abaixo para identificar o sistema de injeção correspondente.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                {popularVehicles.map((veh) => (
                  <button
                    key={veh}
                    type="button"
                    onClick={() => {
                      setVehicle(veh);
                      setStep(2);
                    }}
                    className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all ${
                      vehicle === veh
                        ? 'bg-[#1824E8] text-white border-[#1824E8] shadow-md'
                        : 'bg-[#F5F6F8] text-slate-700 hover:bg-[#E8ECFF] border-slate-200'
                    }`}
                  >
                    {veh}
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Ou digite modelo/ano (Ex: Master 2.3, Daily 3.0...)"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1824E8]"
                />
                {vehicle && (
                  <button
                    onClick={() => setStep(2)}
                    className="px-5 py-3 rounded-xl bg-[#1824E8] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Avançar
                  </button>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#1824E8] uppercase tracking-wider">Passo 2 de 3</span>
                <h4 className="font-heading font-bold text-xl text-[#161A23] mt-1">
                  Qual sintoma principal seu veículo apresenta?
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Veículo: <span className="font-bold text-[#1824E8]">{vehicle}</span>
                </p>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {DIESEL_SYMPTOMS.map((symptom) => (
                  <div
                    key={symptom.id}
                    onClick={() => {
                      setSelectedSymptom(symptom);
                      setStep(3);
                    }}
                    className="p-3.5 rounded-xl bg-[#F5F6F8] hover:bg-[#E8ECFF] border border-slate-200 hover:border-blue-300 cursor-pointer transition-all flex items-center justify-between gap-3"
                  >
                    <div>
                      <h5 className="font-heading font-bold text-xs sm:text-sm text-[#161A23]">
                        {symptom.title}
                      </h5>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{symptom.shortDesc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#1824E8] flex-shrink-0" />
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  ← Voltar para veículo
                </button>
              </div>
            </div>
          )}

          {step === 3 && selectedSymptom && (
            <div className="space-y-6">
              <div className="bg-[#E8ECFF] p-4 rounded-2xl border border-blue-200 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#1824E8] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#1235A8]">
                    Hipótese Técnica Preliminar
                  </h4>
                  <p className="text-xs text-slate-700 mt-1">
                    Veículo: <strong>{vehicle}</strong> | Sintoma: <strong>{selectedSymptom.title}</strong>
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <p className="font-bold text-slate-800">Possíveis Causas no Sistema de Injeção:</p>
                  <ul className="space-y-1">
                    {selectedSymptom.probableCauses.map((cause, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1824E8] flex-shrink-0 mt-0.5" />
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-slate-800">Recomendação do Laboratório:</p>
                  <p className="text-slate-600">{selectedSymptom.recommendedLaboratoryAction}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={getSymptomWhatsAppUrl(selectedSymptom, vehicle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#1824E8] hover:bg-[#1235A8] text-white font-heading font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#1824E8]/25 transition-all text-center"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-base text-white" />
                  <span>Agendar Teste pelo WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Nova Triagem</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

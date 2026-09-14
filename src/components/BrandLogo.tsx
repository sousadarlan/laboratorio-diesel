import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'symbol' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
  };

  const isLightOnDark = variant === 'white';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Modern High-Tech Vector Shield / Gear Symbol inspired by original mark */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className={`${sizeClasses[size]} w-auto drop-shadow-sm transition-transform duration-300 hover:scale-105`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Technical Gear teeth */}
          <g className="text-[#1824E8]">
            <path
              d="M45 5H55V14H45V5ZM45 86H55V95H45V86ZM14 45V55H5V45H14ZM95 45V55H86V45H95ZM20 20L27 27L21 33L14 26L20 20ZM79 79L86 86L80 92L73 85L79 79ZM20 80L14 74L21 67L27 73L20 80ZM80 20L86 26L79 33L73 27L80 20Z"
              fill="currentColor"
            />
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="4" fill="#0A1233" />
          </g>

          {/* Precision Globe Grid */}
          <g opacity="0.85">
            <circle cx="50" cy="50" r="34" fill="#1235A8" />
            <ellipse cx="50" cy="50" rx="16" ry="33" stroke="#E8ECFF" strokeWidth="1.2" fill="none" opacity="0.6" />
            <line x1="17" y1="50" x2="83" y2="50" stroke="#E8ECFF" strokeWidth="1.2" opacity="0.6" />
            <line x1="22" y1="35" x2="78" y2="35" stroke="#E8ECFF" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
            <line x1="22" y1="65" x2="78" y2="65" stroke="#E8ECFF" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
            
            {/* Stylized Continents / Precision Nodes */}
            <circle cx="48" cy="42" r="3" fill="#FFFFFF" opacity="0.9" />
            <circle cx="58" cy="48" r="2.5" fill="#FFFFFF" opacity="0.9" />
            <circle cx="43" cy="62" r="2.5" fill="#FFFFFF" opacity="0.9" />
            <path d="M48 42L58 48L43 62" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
          </g>

          {/* Central Banner / Precision Caliper Element */}
          <rect x="8" y="42" width="84" height="16" rx="3" fill="#1824E8" stroke="#FFFFFF" strokeWidth="1.5" />
          
          {/* Banner Text: DIESEL */}
          <text
            x="50"
            y="53.5"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Manrope', sans-serif"
            fontWeight="800"
            fontSize="8.5"
            letterSpacing="1.5"
          >
            LABORATÓRIO
          </text>

          {/* Curved Header & Footer labels */}
          <path id="curveTop" d="M 24 34 A 30 30 0 0 1 76 34" fill="none" />
          <text fontSize="5.5" fontWeight="700" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
            <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
              TECNOLOGIA DIESEL
            </textPath>
          </text>

          <path id="curveBottom" d="M 76 66 A 30 30 0 0 1 24 66" fill="none" />
          <text fontSize="5.5" fontWeight="700" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
            <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
              INJEÇÃO ELETRÔNICA
            </textPath>
          </text>
        </svg>
      </div>

      {variant !== 'symbol' && (
        <div className="flex flex-col justify-center whitespace-nowrap">
          <span
            className={`font-heading font-black tracking-tight leading-none ${
              isLightOnDark ? 'text-white' : 'text-black'
            } ${size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}
          >
            Laboratório Diesel
          </span>
        </div>
      )}
    </div>
  );
};

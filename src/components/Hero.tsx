import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigateToCarta: () => void;
  onDiscoverClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToCarta, onDiscoverClick }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#051945]"
      aria-label="Portada Bierstube - La cerveza nos reúne"
    >
      {/* Background Layer: High-Res Clean Artwork (Giant Beer Stein, Splatters, Guggenheim) */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="./images/hero/hero-bg-clean.jpg" type="image/jpeg" />
          <img
            src="./images/hero/hero-bg-clean.jpg"
            alt="Jarra de cerveza espumosa Bierstube cayendo con salpicaduras sobre fondo azul cobalto e ilustración de Bilbao"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-[25%_center] sm:object-[35%_center] md:object-left-top select-none pointer-events-none"
          />
        </picture>

        {/* Future Video Integration Slot (Prepared for Flow/Remotion loop) */}
        {/*
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="./images/hero/hero-bg-clean.jpg"
            className="hidden absolute inset-0 w-full h-full object-cover object-left"
          >
            <source src="./videos/hero-beer-loop.mp4" type="video/mp4" />
          </video>
        */}

        {/* Mobile Gradient Overlay for Readability on small devices */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051945]/50 via-transparent to-transparent md:hidden pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-36 lg:pt-40 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Spacer: Preserves visual space for the giant beer stein (~55% width on desktop) */}
          <div className="hidden lg:block lg:col-span-6 pointer-events-none min-h-[380px]" aria-hidden="true" />

          {/* Right Column: Live HTML Typography & Interactive Elements with High Transparency on Mobile */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-4 sm:space-y-6 lg:pl-4 xl:pl-8 bg-[#051945]/25 sm:bg-[#051945]/35 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none p-4 sm:p-6 md:p-0 rounded-2xl md:rounded-none border border-white/10 md:border-none shadow-xl md:shadow-none max-w-xl mx-auto lg:mx-0">

            
            {/* Main Headline reproducing reference with exact typographic hierarchy */}
            <div className="flex flex-col space-y-1 sm:space-y-2">
              <h1 className="flex flex-col tracking-tight">
                <span className="font-gothic text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] font-bold leading-[0.9] text-woodcut uppercase">
                  LA CERVEZA
                </span>
                <span className="font-fraktur text-fraktur-gold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-bold leading-[0.95] mt-1 sm:mt-2">
                  Nos reúne.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="font-sans text-white/95 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Cerveza, sabor alemán y buenos momentos en el corazón de Pozas.
            </p>

            {/* Call To Actions */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
              {/* Primary CTA: Artisanal Yellow Brush Button */}
              <button
                onClick={onDiscoverClick}
                className="btn-brush-yellow group flex items-center justify-center space-x-3 px-8 py-3.5 text-sm sm:text-base uppercase tracking-wider font-extrabold text-[#051945] cursor-pointer"
              >
                <span>DESCUBRE BIERSTUBE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
              </button>

              {/* Secondary CTA: Clean Underlined Text Link */}
              <button
                onClick={onNavigateToCarta}
                className="group flex items-center justify-center space-x-2 text-white font-grotesk text-xs sm:text-sm font-bold tracking-widest uppercase hover:text-[#f4be58] transition-colors py-2 cursor-pointer"
              >
                <span className="border-b-2 border-white/80 group-hover:border-[#f4be58] pb-0.5 transition-colors">
                  VER NUESTRA CARTA
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Area: Bilbao POZAS Enamel Plaque & Coordinates Bar */}
      <div className="relative z-10 w-full mt-8 md:mt-12">
        
        {/* Bilbao Enamelled Street Sign Plaque (Positioned precisely over the right stone base) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end pb-3 sm:pb-4">
          <div
            className="plaque-pozas inline-flex items-center justify-center px-4 py-1.5 sm:px-6 sm:py-2 rounded-sm shadow-2xl transform rotate-[-2deg] select-none"
            title="Licenciado Poza, Bilbao"
          >
            <div className="flex items-center space-x-1.5">
              <span className="text-white text-xs sm:text-base font-extrabold tracking-[0.2em]">
                POZAS
              </span>
            </div>
          </div>
        </div>

        {/* Lower Coordinates Divider Bar */}
        <div className="w-full border-t border-white/20 bg-[#051945]/70 backdrop-blur-xs py-3 px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-center text-center">
            <p className="font-grotesk text-[10px] sm:text-xs tracking-[0.25em] text-white/80 uppercase font-semibold">
              — BILBAO • LICENCIADO POZA 50 • BIERSTUBE BY H. THATE —
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

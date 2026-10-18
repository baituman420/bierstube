import React from 'react';
import { ArrowRight, Utensils } from 'lucide-react';

interface GastronomiaProps {
  onNavigateToCarta: () => void;
}

export const GastronomiaSection: React.FC<GastronomiaProps> = ({ onNavigateToCarta }) => {
  return (
    <section
      id="gastronomia"
      className="relative py-24 sm:py-32 bg-transparent text-white overflow-hidden"
      aria-label="Gastronomía tradicional alemana en Bierstube"
    >
      {/* Background Decorative Cobalt Splashes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0d3da3]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#1b4cd6]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-white/15">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#f4be58] font-grotesk text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3">
              <Utensils className="w-4 h-4" />
              <span>COCINA TRADICIONAL & RECETA DE LA CASA</span>
            </div>
            <h2 className="font-grotesk font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              SABOR ALEMÁN <br className="hidden sm:inline" />
              <span className="text-[#f4be58]">CON ALMA DE POZAS.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-sans text-white/75 text-sm sm:text-base max-w-md leading-relaxed">
            Especialidades bávaras auténticas elaboradas con recetas tradicionales. Raciones contundentes pensadas para disfrutar y compartir en el corazón de Bilbao.
          </p>
        </div>

        {/* Editorial Asymmetric Composition 1: The Schweinehaxe (Codillo) Giant Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 sm:mb-28">
          
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] sm:aspect-[16/10]">
              <img
                src="./images/food/schweinehaxe-codillo.webp"
                alt="Codillo asado Schweinehaxe de 650g con chucrut tradicional y puré de patata casero"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051945]/90 via-[#051945]/20 to-transparent" />
              
              {/* Floating Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[#f4be58] font-grotesk text-xs tracking-widest uppercase font-bold">
                    PLATO EMBLEMÁTICO
                  </span>
                  <h3 className="font-grotesk font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase mt-1">
                    Schweinehaxe
                  </h3>
                </div>
                <span className="font-grotesk text-xs sm:text-sm font-extrabold text-white/90 bg-[#051945]/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/20">
                  650g Asado
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-4">
            <div className="space-y-3">
              <span className="font-grotesk text-xs font-bold tracking-[0.2em] text-[#f4be58] uppercase">
                HORNO LENTO Y CRUJIENTE
              </span>
              <h4 className="font-grotesk font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
                Codillo Asado con Chucrut y Puré
              </h4>
            </div>

            <p className="font-sans text-white/80 text-base leading-relaxed">
              650 gramos de codillo de cerdo asado pacientemente hasta conseguir una piel dorada y crujiente con carne tierna y jugosa en su interior. Servido según la tradición alemana con chucrut y suave puré de patata casero.
            </p>

            <div className="pt-2">
              <button
                onClick={onNavigateToCarta}
                className="group inline-flex items-center space-x-3 text-[#f4be58] hover:text-white font-grotesk text-sm font-bold tracking-widest uppercase transition-colors"
              >
                <span className="border-b-2 border-[#f4be58] group-hover:border-white pb-1 transition-colors">
                  VER ESTE PLATO EN LA CARTA
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Editorial Asymmetric Composition 2: Surtido Bremen & Blutwurst Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
          
          {/* Left Feature: Surtido Bremen with offset framing */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#082260]/75 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 shadow-xl group">
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="font-grotesk text-xs font-bold tracking-[0.2em] text-[#f4be58] uppercase">
                  TRILOGÍA DE LA CASA
                </span>
                <span className="font-grotesk text-xs tracking-widest text-white/60 uppercase">
                  PARA COMPARTIR
                </span>
              </div>
              <h3 className="font-grotesk font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                Surtido Bremen
              </h3>
              <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed">
                Selección de tres de nuestras salchichas artesanas de elaboración propia: Bratwurst, Frankfurt y Alfred, acompañadas de chucrut tradicional y auténtica ensalada alemana de patata.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 mt-auto">
              <img
                src="./images/food/surtido-salchichas-chucrut.webp"
                alt="Plato de Surtido Bremen con tres salchichas alemanas, chucrut y ensalada de patata"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Right Dual Column: Blutwurst & Artisanal Heritage */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            
            {/* Top item: Blutwurst */}
            <div className="bg-[#082260]/75 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 shadow-xl flex flex-col sm:flex-row items-center gap-6 group">
              <div className="w-full sm:w-1/2 aspect-square rounded-2xl overflow-hidden border border-white/10 shrink-0">
                <img
                  src="./images/food/blutwurst-morcilla-pimientos.webp"
                  alt="Ración de Blutwurst con pimientos asados"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="space-y-3">
                <span className="font-grotesk text-xs font-bold tracking-[0.2em] text-[#f4be58] uppercase">
                  OTRAS ESPECIALIDADES
                </span>
                <h4 className="font-grotesk font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Blutwurst
                </h4>
                <p className="font-sans text-white/80 text-sm leading-relaxed">
                  Morcilla alemana pasada por la plancha, servida con pimientos rojos asados. Una combinación de texturas e intensidad que marida a la perfección con la cerveza tostada HB Dunkel.
                </p>
              </div>
            </div>

            {/* Bottom item: Embutidos y Elaboración Artesanal */}
            <div className="bg-gradient-to-r from-[#0d3da3]/50 to-[#082260]/85 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 shadow-xl flex flex-col sm:flex-row items-center gap-6 group">
              <div className="w-full sm:w-1/2 aspect-square rounded-2xl overflow-hidden border border-white/10 shrink-0">
                <img
                  src="./images/food/embutidos-thate-artesanal.webp"
                  alt="Elaboración artesanal de embutidos y Fleischkäse en Bierstube"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="space-y-3">
                <span className="font-grotesk text-xs font-bold tracking-[0.2em] text-[#f4be58] uppercase">
                  CHARCUTERÍA ARTESANA
                </span>
                <h4 className="font-grotesk font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Fleischkäse & Salchichas
                </h4>
                <p className="font-sans text-white/80 text-sm leading-relaxed">
                  Pastel de carne Fleischkäse, variedad de salchichas de receta propia y aperitivos fríos y calientes preparados al momento para disfrutar en la barra o en la mesa.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Action Banner to Full Menu */}
        <div className="text-center pt-8">
          <button
            onClick={onNavigateToCarta}
            className="btn-brush-yellow inline-flex items-center space-x-3 px-10 py-4 text-sm sm:text-base uppercase tracking-widest font-extrabold text-[#051945] cursor-pointer"
          >
            <span>VER NUESTRA CARTA COMPLETA</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};

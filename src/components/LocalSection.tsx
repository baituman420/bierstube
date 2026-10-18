import React from 'react';
import { Store, MapPin } from 'lucide-react';

export const LocalSection: React.FC = () => {
  return (
    <section
      id="local"
      className="relative py-24 sm:py-32 bg-transparent text-white overflow-hidden"
      aria-label="El local y la fachada de Bierstube en Licenciado Poza 50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[#f4be58] font-grotesk text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3">
            <Store className="w-4 h-4" />
            <span>ESPACIO, TERRAZA Y BARRA</span>
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.05]">
            Un Rincón Bávaro en <span className="text-[#f4be58]">Pozas 50</span>
          </h2>
          <p className="mt-4 font-sans text-white/80 text-base sm:text-lg leading-relaxed">
            La fachada azul cobalto de Licenciado Poza 50 da paso a un espacio acogedor con barra cervecera, mesas altas de terraza y comedor interior con carácter propio.
          </p>
        </div>

        {/* Grand Facade Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="./images/establishment/bierstube-fachada.webp"
                alt="Fachada azul cobalto de Bierstube by H. Thate en Licenciado Poza 50, Bilbao con terraza exterior"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051945]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="font-grotesk text-xs sm:text-sm font-extrabold uppercase text-white bg-[#051945]/85 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                  Licenciado Poza 50, Bilbao
                </span>
                <span className="font-grotesk text-xs text-[#f4be58] font-bold uppercase tracking-wider">
                  Terraza en Pozas
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="font-grotesk text-xs font-bold tracking-[0.2em] text-[#f4be58] uppercase">
              EL AMBIENTE
            </span>
            <h3 className="font-grotesk font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
              Terraza, Barra y Comedor para Cada Ocasión
            </h3>
            <p className="font-sans text-white/80 text-base leading-relaxed">
              Diseñado tanto para quienes buscan disfrutar de una cerveza rápida al aire libre en la icónica calle Pozas, como para quienes prefieren sentarse a degustar con calma nuestras salchichas artesanas y codillo asado.
            </p>
            
            <div className="border-t border-white/10 pt-6 space-y-3">
              <div className="flex items-center space-x-3 text-white/90">
                <MapPin className="w-5 h-5 text-[#f4be58] shrink-0" />
                <span className="font-sans text-sm">A pocos pasos del metro Indautxu y en ruta directa hacia San Mamés.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dual Detail Shots: Bar Counter & Entrance View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#082260]/75 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 shadow-xl group">
            <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 mb-6">
              <img
                src="./images/establishment/barra-bierstube-hb.webp"
                alt="Frontal del mostrador de madera de Bierstube con logotipo de Hofbräu München"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="font-grotesk font-black text-2xl text-white uppercase tracking-tight mb-2">
              Mostrador con Identidad Thate
            </h4>
            <p className="font-sans text-white/80 text-sm leading-relaxed">
              El frontal de la barra rinde homenaje a la alianza cervecera con Hofbräu München, creando un punto focal cálido donde pedir en la barra o esperar a tu cuadrilla.
            </p>
          </div>

          <div className="bg-[#082260]/75 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 shadow-xl group">
            <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 mb-6">
              <img
                src="./images/establishment/interior-vitrina-puerta.webp"
                alt="Perspectiva del interior hacia la puerta con vitrina de pintxos y mesas altas"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="font-grotesk font-black text-2xl text-white uppercase tracking-tight mb-2">
              Luz Natural y Calidez de Taberna
            </h4>
            <p className="font-sans text-white/80 text-sm leading-relaxed">
              Grandes ventanales a la calle, vigas de madera y vitrina de pintxos y raciones frías que dan la bienvenida nada más cruzar la puerta.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

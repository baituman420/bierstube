import React from 'react';
import { Sparkles, Beer, Users } from 'lucide-react';

export const CervezaAmbienteSection: React.FC = () => {
  return (
    <section
      id="cerveza-ambiente"
      className="relative py-24 sm:py-32 bg-transparent text-white overflow-hidden"
      aria-label="La Cerveza y el Ambiente en Bierstube"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[#f4be58] font-grotesk text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3">
            <Beer className="w-4 h-4" />
            <span>HOFBRÄU MÜNCHEN EN BILBAO</span>
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.05]">
            El Ritual del <span className="text-[#f4be58]">Tiraje Perfecto</span>
          </h2>
          <p className="mt-4 font-sans text-white/80 text-base sm:text-lg leading-relaxed">
            Una cerveza recién servida no es solo una bebida: es el pretexto para sentarse a la mesa, chocar las jarras y compartir buenos momentos con amigos en Licenciado Poza.
          </p>
        </div>

        {/* Feature 1: The Massive Toast (Main Photo) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 mb-12 sm:mb-16 group">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full">
            <img
              src="./images/beer/brindis-jarras-hb.webp"
              alt="Brindis con grandes jarras de cerveza Hofbräu München en la taberna Bierstube"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051945] via-[#051945]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#051945]/60 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 max-w-xl">
            <span className="font-grotesk text-xs font-bold tracking-[0.2em] text-[#f4be58] uppercase">
              CULTURA DE TABERNA
            </span>
            <h3 className="font-grotesk font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase mt-1 drop-shadow-md tracking-tight leading-tight">
              Prost! La Reunión Comienza Aquí.
            </h3>
            <p className="font-sans text-white/90 text-sm sm:text-base mt-2 drop-shadow">
              Jarras frías de cerveza Hofbräu servidas con la justa corona de espuma, camaradería y ambiente distendido en el punto de encuentro de Pozas.
            </p>
          </div>
        </div>

        {/* Dynamic 3-Column Editorial Grid: Tap Column, Wooden Keg, and Bottle Variety */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Traditional Wooden Keg (Anstich) */}
          <div className="bg-[#082260]/75 backdrop-blur-md rounded-3xl p-6 border border-white/15 flex flex-col justify-between group shadow-xl">
            <div className="space-y-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#f4be58]/20 flex items-center justify-center text-[#f4be58]">
                <Beer className="w-5 h-5" />
              </div>
              <h4 className="font-grotesk font-black text-2xl text-white uppercase tracking-tight">
                Barril de Madera & Anstich
              </h4>
              <p className="font-sans text-white/80 text-sm leading-relaxed">
                La tradición centenaria de abrir el barril de madera al estilo muniqués. Cerveza pura que cae directamente al vaso para disfrutar del sabor más fresco e intacto.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
              <img
                src="./images/beer/barril-madera-anstich.webp"
                alt="Apertura tradicional de barril de madera de cerveza en Bierstube"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: Hofbräu Tap Column */}
          <div className="bg-[#082260]/75 backdrop-blur-md rounded-3xl p-6 border border-white/15 flex flex-col justify-between group shadow-xl">
            <div className="space-y-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#f4be58]/20 flex items-center justify-center text-[#f4be58]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-grotesk font-black text-2xl text-white uppercase tracking-tight">
                Grifos Hofbräu München
              </h4>
              <p className="font-sans text-white/80 text-sm leading-relaxed">
                Nuestra columna de grifos azul cobalto sirve HB Original rubia brillante y HB Dunkel con notas maltosas y tostadas, tiradas con presión y temperatura calibradas.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
              <img
                src="./images/establishment/tirador-hb-bar.webp"
                alt="Columna de tiradores azul de cerveza Hofbräu München en la barra"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 3: The Gathering Vibe & Pintxos */}
          <div className="bg-[#082260]/75 backdrop-blur-md rounded-3xl p-6 border border-white/15 flex flex-col justify-between group shadow-xl">
            <div className="space-y-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#f4be58]/20 flex items-center justify-center text-[#f4be58]">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-grotesk font-black text-2xl text-white uppercase tracking-tight">
                Copas y Tapeo en Barra
              </h4>
              <p className="font-sans text-white/80 text-sm leading-relaxed">
                Cerveza de calidad para acompañar raciones y pintxos en la barra. Una fusión natural entre la maestría cervecera alemana y el ambiente social de Bilbao.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
              <img
                src="./images/beer/copas-hb-tortilla.jpeg"
                alt="Copas de cerveza tostada y rubia HB acompañadas de pintxos"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

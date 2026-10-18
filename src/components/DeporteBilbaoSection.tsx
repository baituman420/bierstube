import React from 'react';
import { Trophy, Tv, HeartHandshake } from 'lucide-react';

export const DeporteBilbaoSection: React.FC = () => {
  return (
    <section
      id="deporte"
      className="relative py-24 sm:py-32 text-white overflow-hidden"
      aria-label="Cultura deportiva de Bilbao y Pozas en Bierstube"
    >
      {/* Athletic Club & Bilbao Basket Custom Artwork Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./images/sports/pasion-deportiva-bilbao.png')" }}
      />
      {/* Calibrated Dark Cobalt Overlay for high contrast and readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#051945]/85 via-[#051945]/75 to-[#051945]/90" />
      <div className="absolute inset-0 z-0 backdrop-blur-[0.5px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-white/15">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#f4be58] font-grotesk text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3">
              <Trophy className="w-4 h-4" />
              <span>PASIÓN POR EL DEPORTE EN LICENCIADO POZA</span>
            </div>
            <h2 className="font-grotesk font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.05]">
              El Latido de Pozas <br className="hidden sm:inline" />
              <span className="text-[#f4be58]">en cada partido.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-sans text-white/80 text-sm sm:text-base max-w-md leading-relaxed">
            Pozas es la arteria donde se concentra la emoción deportiva de Bilbao. Un espacio de encuentro natural para las aficiones del Athletic Club y del Bilbao Basket en las horas previas y posteriores a cada cita deportiva.
          </p>
        </div>

        {/* Dynamic Split Layout: All Iron Shelf & Match Atmosphere */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Main Photo: Authentic All Iron Scarf & Multilingual Welcome */}
          <div className="lg:col-span-7 group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 aspect-[4/3] sm:aspect-[16/10]">
              <img
                src="./images/sports/all-iron-estante-bierstube.webp"
                alt="Bufanda All Iron Mr Pentland Club y letreros de bienvenida Herzlich Willkommen y Ongi Etorri en la barra de Bierstube"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051945]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-grotesk text-xs font-bold tracking-[0.2em] text-[#f4be58] uppercase">
                  IDENTIDAD Y HOSPITALIDAD
                </span>
                <p className="font-grotesk font-extrabold text-xl sm:text-2xl text-white tracking-wide mt-1">
                  «Herzlich Willkommen • Ongi Etorri • Bienvenidos»
                </p>
              </div>
            </div>
          </div>

          {/* Right Narrative Card */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#082260]/75 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 text-[#f4be58]">
                <HeartHandshake className="w-5 h-5" />
                <h3 className="font-grotesk text-xs sm:text-sm font-bold tracking-widest uppercase">
                  CULTURA DE CALLE Y GRADA
                </h3>
              </div>
              <h4 className="font-grotesk font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-snug">
                El Pre y Postpartido en Indautxu
              </h4>
              <p className="font-sans text-white/85 text-sm sm:text-base leading-relaxed">
                Situados en Licenciado Poza 50, somos parada habitual de aficionados que comparten el camino hacia San Mamés y disfrutan de la jornada deportiva en cuadrilla, con bufandas colgadas y conversación en la barra.
              </p>
            </div>

            <div className="bg-[#082260]/75 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 text-[#f4be58]">
                <Tv className="w-5 h-5" />
                <h3 className="font-grotesk text-xs sm:text-sm font-bold tracking-widest uppercase">
                  PUNTO DE REUNIÓN
                </h3>
              </div>
              <h4 className="font-grotesk font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-snug">
                Baloncesto y Fútbol con Ambiente Cercano
              </h4>
              <p className="font-sans text-white/85 text-sm sm:text-base leading-relaxed">
                Pantallas en el comedor para seguir las competiciones con amigos, jarras de cerveza recién tirada y raciones generosas para no perderse ni un minuto de juego.
              </p>
            </div>

          </div>

        </div>

        {/* Atmosphere Photo Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] relative group">
            <img
              src="./images/establishment/comedor-perspectiva.webp"
              alt="Comedor de Bierstube con bufandas del Athletic Club y pantallas de televisión"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051945]/80 via-transparent to-transparent flex items-end p-5">
              <span className="font-grotesk text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                Ambiente de taberna y deporte en el comedor
              </span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] relative group">
            <img
              src="./images/beer/ambiente-partido-copa.jpeg"
              alt="Cerveza y retransmisión deportiva en directo con amigos"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051945]/80 via-transparent to-transparent flex items-end p-5">
              <span className="font-grotesk text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                Brindis y seguimiento de los partidos
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

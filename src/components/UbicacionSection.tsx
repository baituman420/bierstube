import React from 'react';
import { MapPin, Navigation, Train, Info } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const UbicacionSection: React.FC = () => {
  return (
    <section
      id="ubicacion"
      className="relative py-24 sm:py-32 bg-transparent text-white overflow-hidden border-t border-white/10"
      aria-label="Ubicación y cómo llegar a Bierstube en Bilbao"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-[#f4be58] font-grotesk text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3">
            <MapPin className="w-4 h-4" />
            <span>BILBAO • INDAUTXU</span>
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.05]">
            Cómo <span className="text-[#f4be58]">Llegar</span>
          </h2>
          <p className="mt-4 font-sans text-white/80 text-base sm:text-lg leading-relaxed">
            Te esperamos en Licenciado Poza 50, en pleno centro neurálgico de Indautxu.
          </p>
        </div>

        {/* Location Info & Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact & Access Card */}
          <div className="lg:col-span-5 bg-[#082260]/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/15 flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-8">
              <div>
                <span className="text-xs font-grotesk font-bold tracking-[0.2em] text-[#f4be58] uppercase">
                  DIRECCIÓN POSTAL
                </span>
                <p className="font-grotesk font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mt-2">
                  Licenciado Poza 50
                </p>
                <p className="font-sans text-white/80 text-base">
                  48011 Bilbao, Bizkaia
                </p>
              </div>

              {/* Public Transport */}
              <div className="space-y-4 border-t border-white/10 pt-6">
                <span className="text-xs font-grotesk font-bold tracking-[0.2em] text-[#f4be58] uppercase">
                  TRANSPORTE PÚBLICO
                </span>
                
                <div className="flex items-start space-x-3 text-white/85 text-sm">
                  <Train className="w-5 h-5 text-[#f4be58] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-grotesk">Metro Bilbao (Indautxu)</strong>
                    <span>A 3 minutos a pie (salida Dr. Areilza / Alameda Urquijo).</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-white/85 text-sm">
                  <MapPin className="w-5 h-5 text-[#f4be58] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-grotesk">San Mamés (Intermodal)</strong>
                    <span>A 6 minutos a pie siguiendo el trazado recto de Pozas.</span>
                  </div>
                </div>
              </div>

              {/* Note on Schedule & Real-Time Updates */}
              <div className="bg-[#051945]/80 p-4 rounded-xl border border-white/10 flex items-start space-x-3 text-xs text-white/70">
                <Info className="w-4 h-4 text-[#f4be58] shrink-0 mt-0.5" />
                <span>
                  Consulta horarios actualizados de cocina y eventos en directo en nuestro canal oficial de Instagram.
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bierstube+Licenciado+Poza+50+Bilbao"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brush-yellow flex-1 flex items-center justify-center space-x-2 py-3.5 px-4 text-xs sm:text-sm uppercase tracking-wider font-extrabold text-[#051945]"
              >
                <Navigation className="w-4 h-4 stroke-[2.5]" />
                <span>ABRIR EN GOOGLE MAPS</span>
              </a>

              <a
                href="https://www.instagram.com/bierstube_bilbao/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl border-2 border-white/30 text-white hover:border-[#f4be58] hover:text-[#f4be58] font-grotesk text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>INSTAGRAM</span>
              </a>
            </div>

          </div>

          {/* Right: Map Graphic Presentation */}
          <div className="lg:col-span-7 bg-[#082260]/50 rounded-3xl overflow-hidden border border-white/15 relative min-h-[380px] flex flex-col justify-between shadow-2xl">
            
            {/* Styled Map Background Representation */}
            <div className="absolute inset-0 bg-[#082260] overflow-hidden">
              <iframe
                title="Mapa de localización de Bierstube en Licenciado Poza 50 Bilbao"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.427845780183!2d-2.946342!3d43.261278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4fd88989505d%3A0x6b45a9992e541b!2sPoza+Lizentziatuaren+Kalea%2C+50%2C+Abando%2C+48011+Bilbo%2C+Bizkaia!5e0!3m2!1ses!2ses!4v1700000000000"
                className="w-full h-full border-0 filter contrast-125 saturate-50 opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Floating Street Plaque Overlay */}
            <div className="relative z-10 p-6 flex justify-end pointer-events-none">
              <div className="plaque-pozas inline-flex items-center px-5 py-2 rounded shadow-2xl">
                <span className="text-white text-xs sm:text-sm font-extrabold tracking-[0.2em]">
                  POZAS • 50
                </span>
              </div>
            </div>

            <div className="relative z-10 p-6 bg-gradient-to-t from-[#051945] via-[#051945]/90 to-transparent pointer-events-none">
              <p className="font-grotesk text-xs tracking-widest text-[#f4be58] font-bold uppercase">
                BIERSTUBE BY H. THATE
              </p>
              <p className="font-sans text-xs text-white/80">
                Punto de reunión cervecero en el tramo clásico de Licenciado Poza.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

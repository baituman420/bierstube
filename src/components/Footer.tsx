import React from 'react';

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

interface FooterProps {
  onNavigate: (page: 'home' | 'carta', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#030e28] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-fraktur text-3xl sm:text-4xl font-bold tracking-wide text-white">
                Bierstube
              </span>
              <div className="flex items-center space-x-2 text-xs font-grotesk tracking-widest uppercase font-semibold text-white/90 mt-1">
                <span>BY <strong className="text-white">H. THATE</strong></span>
                <span className="text-[#f4be58]">•</span>
                <span className="text-[#f4be58]">BEER HB.</span>
              </div>
            </div>

            <p className="font-sans text-white/70 text-sm max-w-sm leading-relaxed">
              Cerveza fresca recién tirada de barril, sabor tradicional alemán y el punto de encuentro por excelencia en la calle más futbolera y viva de Bilbao.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-grotesk text-xs font-bold tracking-[0.2em] text-[#f4be58] uppercase block">
              NAVEGACIÓN
            </span>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <button
                  onClick={() => onNavigate('home', 'hero')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('carta')}
                  className="text-white/70 hover:text-[#f4be58] transition-colors"
                >
                  Nuestra Carta
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'gastronomia')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Gastronomía
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'local')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  El Local & Terraza
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'deporte')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Bilbao & Deporte
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'ubicacion')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Cómo Llegar
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Social */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-grotesk text-xs font-bold tracking-[0.2em] text-[#f4be58] uppercase block">
              DÓNDE ESTAMOS
            </span>
            <p className="font-sans text-sm text-white/80 leading-relaxed">
              Licenciado Poza 50<br />
              48011 Bilbao, Bizkaia<br />
              Indautxu
            </p>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/bierstube_bilbao/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-grotesk font-bold tracking-wider uppercase text-[#f4be58] hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@bierstube_bilbao</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-white/50 space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} Bierstube by H. Thate. Todos los derechos reservados.</p>
          <p className="font-grotesk text-[11px] tracking-wider uppercase">
            Licenciado Poza 50 • Bilbao
          </p>
        </div>

      </div>
    </footer>
  );
};

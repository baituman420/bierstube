import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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


interface NavbarProps {
  currentPage: 'home' | 'carta';
  onNavigate: (page: 'home' | 'carta', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: 'home' | 'carta', sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#051945]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10'
          : 'bg-gradient-to-b from-black/60 via-[#051945]/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex flex-col text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4be58] rounded p-1"
            aria-label="Bierstube by H. Thate - Ir a inicio"
          >
            <div className="flex items-baseline space-x-1">
              <span className="font-fraktur text-3xl sm:text-4xl font-bold tracking-wide text-white group-hover:text-[#f4be58] transition-colors drop-shadow">
                Bierstube
              </span>
            </div>
            <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-grotesk tracking-widest uppercase font-semibold text-white/90">
              <span>BY <strong className="text-white">H. THATE</strong></span>
              <span className="text-[#f4be58]">•</span>
              <span className="text-[#f4be58]">BEER HB.</span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegación principal">
            <button
              onClick={() => handleLinkClick('home', 'hero')}
              className={`text-xs font-grotesk tracking-widest font-bold uppercase transition-colors relative py-1 ${
                currentPage === 'home' ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              INICIO
              {currentPage === 'home' && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[#f4be58] rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleLinkClick('carta')}
              className={`text-xs font-grotesk tracking-widest font-bold uppercase transition-colors relative py-1 ${
                currentPage === 'carta' ? 'text-[#f4be58]' : 'text-white/70 hover:text-white'
              }`}
            >
              NUESTRA CARTA
              {currentPage === 'carta' && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[#f4be58] rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleLinkClick('home', 'local')}
              className="text-xs font-grotesk tracking-widest font-bold uppercase text-white/70 hover:text-white transition-colors py-1"
            >
              EL LOCAL
            </button>

            <button
              onClick={() => handleLinkClick('home', 'deporte')}
              className="text-xs font-grotesk tracking-widest font-bold uppercase text-white/70 hover:text-white transition-colors py-1"
            >
              EL DEPORTE
            </button>

            <button
              onClick={() => handleLinkClick('home', 'ubicacion')}
              className="text-xs font-grotesk tracking-widest font-bold uppercase text-white/70 hover:text-white transition-colors py-1"
            >
              CÓMO LLEGAR
            </button>
          </nav>

          {/* Instagram Button on Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="https://www.instagram.com/bierstube_bilbao/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brush-yellow inline-flex items-center space-x-2 px-5 py-2 text-xs uppercase tracking-wider font-extrabold text-[#051945] hover:text-black shadow-md cursor-pointer"
              aria-label="Abrir Instagram de Bierstube en nueva pestaña"
            >
              <InstagramIcon className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>INSTAGRAM</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href="https://www.instagram.com/bierstube_bilbao/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#f4be58] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#f4be58] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4be58] rounded"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#051945]/98 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-8 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4 pt-2">
            <button
              onClick={() => handleLinkClick('home', 'hero')}
              className="text-left font-grotesk text-sm font-bold tracking-widest uppercase py-2 border-b border-white/10 text-white flex items-center justify-between"
            >
              <span>INICIO</span>
              {currentPage === 'home' && <span className="text-[#f4be58] text-xs">●</span>}
            </button>

            <button
              onClick={() => handleLinkClick('carta')}
              className="text-left font-grotesk text-sm font-bold tracking-widest uppercase py-2 border-b border-white/10 text-[#f4be58] flex items-center justify-between"
            >
              <span>NUESTRA CARTA</span>
              {currentPage === 'carta' && <span className="text-[#f4be58] text-xs">●</span>}
            </button>

            <button
              onClick={() => handleLinkClick('home', 'local')}
              className="text-left font-grotesk text-sm font-bold tracking-widest uppercase py-2 border-b border-white/10 text-white/80 hover:text-white"
            >
              EL LOCAL
            </button>

            <button
              onClick={() => handleLinkClick('home', 'deporte')}
              className="text-left font-grotesk text-sm font-bold tracking-widest uppercase py-2 border-b border-white/10 text-white/80 hover:text-white"
            >
              EL DEPORTE
            </button>

            <button
              onClick={() => handleLinkClick('home', 'ubicacion')}
              className="text-left font-grotesk text-sm font-bold tracking-widest uppercase py-2 border-b border-white/10 text-white/80 hover:text-white"
            >
              CÓMO LLEGAR
            </button>
          </nav>

          <div className="pt-2">
            <a
              href="https://www.instagram.com/bierstube_bilbao/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brush-yellow w-full flex items-center justify-center space-x-2 py-3 text-xs uppercase tracking-wider font-extrabold text-[#051945]"
            >
              <InstagramIcon className="w-4 h-4 stroke-[2.5]" />
              <span>SEGUIR EN INSTAGRAM</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

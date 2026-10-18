import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { CartaPage } from './pages/CartaPage';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'carta'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.toLowerCase();
      if (rawHash === '#carta' || rawHash === '#/carta') {
        setCurrentPage('carta');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        if (rawHash && rawHash !== '#inicio' && rawHash !== '#home' && rawHash !== '#') {
          const sectionId = rawHash.replace(/^#\/?/, '');
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: 'home' | 'carta', sectionId?: string) => {
    if (page === 'carta') {
      window.location.hash = 'carta';
      setCurrentPage('carta');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentPage !== 'home') {
        setCurrentPage('home');
      }
      if (sectionId) {
        window.location.hash = sectionId;
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.location.hash = 'inicio';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#051945] text-white flex flex-col font-sans selection:bg-[#F4BE58] selection:text-[#0D1733] relative">
      {/* Recreated Bilbao & Pozas panoramic background layer across the entire page */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-40 md:opacity-50"
        style={{ backgroundImage: "url('./images/brand/bilbao-pozas-bg.jpg')" }}
      />
      {/* Calibrated Dark Cobalt overlay for contrast and content readability */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#051945]/70 via-[#051945]/40 to-[#051945]/80" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        
        <main className="flex-1 w-full">
        {currentPage === 'home' ? (
          <HomePage onNavigateToCarta={() => handleNavigate('carta')} />
        ) : (
          <CartaPage onBackToHome={() => handleNavigate('home', 'hero')} />
        )}
      </main>

        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
};

export default App;

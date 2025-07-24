import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fechar o menu ao redimensionar a tela para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Verificar scroll para adicionar sombra ao header
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header 
      className={`fixed w-full bg-opacity-90 bg-gray-900 backdrop-blur-sm z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="HL Car Detail Logo" 
            className="h-10 w-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150x40?text=HL+Car+Detail';
            }}
          />
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#inicio" 
            className="text-white hover:text-amber-500 transition-colors duration-300 font-medium"
          >
            Início
          </a>
          <a 
            href="#servicos" 
            className="text-white hover:text-amber-500 transition-colors duration-300 font-medium"
          >
            Serviços
          </a>
          <a 
            href="#galeria" 
            className="text-white hover:text-amber-500 transition-colors duration-300 font-medium"
          >
            Galeria
          </a>
          <a 
            href="#contato" 
            className="text-white hover:text-amber-500 transition-colors duration-300 font-medium"
          >
            Contato
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md p-1"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="px-4 space-y-3">
          <a 
            href="#inicio" 
            className="block px-4 py-3 text-white hover:bg-gray-800 rounded-md text-base font-medium transition-colors duration-200"
            onClick={closeMenu}
          >
            Início
          </a>
          <a 
            href="#servicos" 
            className="block px-4 py-3 text-white hover:bg-gray-800 rounded-md text-base font-medium transition-colors duration-200"
            onClick={closeMenu}
          >
            Serviços
          </a>
          <a 
            href="#galeria" 
            className="block px-4 py-3 text-white hover:bg-gray-800 rounded-md text-base font-medium transition-colors duration-200"
            onClick={closeMenu}
          >
            Galeria
          </a>
          <a 
            href="#contato" 
            className="block px-4 py-3 text-white hover:bg-gray-800 rounded-md text-base font-medium transition-colors duration-200"
            onClick={closeMenu}
          >
            Contato
          </a>
          <a 
            href="https://wa.me/+554196003019" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block px-4 py-3 bg-amber-600 text-white rounded-md text-center font-medium hover:bg-amber-700 transition-colors duration-200"
            onClick={closeMenu}
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  // Carregamento otimizado da imagem de fundo
  useEffect(() => {
    const img = new Image();
    img.src = 'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1600';
    img.onload = () => {
      setBackgroundLoaded(true);
      // Pequeno atraso para garantir que a transição seja suave
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100);
      return () => clearTimeout(timer);
    };
  }, []);

  // Animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const scrollIndicatorVariants = {
    hidden: { y: 0 },
    visible: {
      y: [0, 10, 0],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };
  if (!backgroundLoaded) {
    return (
      <div className="h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-white">
          <div className="w-32 h-32 mx-auto mb-4 bg-gray-800 rounded-full"></div>
          <div className="h-4 bg-gray-800 rounded w-48 mx-auto"></div>
        </div>
      </div>
    );
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.section 
      id="inicio" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isLoaded ? '0.7' : '0.9'}), rgba(0, 0, 0, ${isLoaded ? '0.7' : '0.9'})), url('https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        transition: 'background-image 0.8s ease-in-out',
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif"
          variants={itemVariants}
        >
          HL Car Detail
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Excelência em estética automotiva. Seu carro merece o melhor tratamento.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a 
            href="#servicos" 
            onClick={(e) => scrollToSection(e, '#servicos')}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nossos Serviços
          </motion.a>
          
          <motion.a 
            href="#contato" 
            className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white font-bold py-3 px-8 border-2 border-white rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Agora
          </motion.a>
        </motion.div>
      </div>
      
      {/* Scroll indicator animado */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <a 
          href="#servicos" 
          className="text-white inline-block focus:outline-none"
          aria-label="Rolar para a próxima seção"
        >
          <svg 
            className="w-10 h-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </motion.div>
      
      {/* Overlay de carregamento suave */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />
    </motion.section>
  );
};

export default Hero;

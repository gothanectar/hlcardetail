import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaCalendarAlt, FaTimes } from 'react-icons/fa';

const FloatingButtons = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {/* Botão WhatsApp */}
      <a 
        href="https://wa.me/+554196003019" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-green-600 transition-colors duration-300 z-40"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Botão Instagram */}
      <a 
        href="https://www.instagram.com/p/C51E7L4PRy6/?utm_source=ig_web_copy_link" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:opacity-90 transition-opacity duration-300 z-40"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      {/* Botão Facebook */}
      <a 
        href="https://www.facebook.com/hllavacaresteticaautomotiva" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-[11.5rem] right-6 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-blue-700 transition-colors duration-300 z-40"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>

      {/* Botão Agendar */}
      <button 
        onClick={togglePopup}
        className="fixed bottom-[15rem] right-6 w-14 h-14 bg-gold-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-gold-700 transition-colors duration-300 z-40"
        aria-label="Agendar serviço"
      >
        <FaCalendarAlt />
      </button>

      {/* Popup de Agendamento */}
      {showPopup && (
        <div className="fixed bottom-28 right-24 bg-white rounded-lg shadow-xl p-6 max-w-sm z-50 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Agendar Serviço</h3>
            <button 
              onClick={togglePopup}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Fechar"
            >
              <FaTimes />
            </button>
          </div>
          <p className="mb-4 text-gray-700">
            Olá! Gostaria de agendar um serviço na HL Car Detail. Por favor, me informe as opções e horários disponíveis. 😊
          </p>
          <a 
            href="https://wa.me/+554196003019?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o%20na%20HL%20Car%20Detail.%20Por%20favor,%20me%20informe%20as%20op%C3%A7%C3%B5es%20e%20hor%C3%A1rios%20dispon%C3%ADveis.%20%F0%9F%98%8A" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gold-600 hover:bg-gold-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
          >
            Enviar via WhatsApp
          </a>
        </div>
      )}

      {/* Overlay quando o popup estiver aberto */}
      {showPopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={togglePopup}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default FloatingButtons;

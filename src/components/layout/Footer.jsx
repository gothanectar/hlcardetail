import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Sobre Nós */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold text-white mb-4 font-serif">Sobre Nós</h3>
            <p className="mb-4">
              A HL Car Detail é especializada em serviços premium de estética automotiva, oferecendo qualidade e excelência no cuidado do seu veículo.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/hllavacaresteticaautomotiva" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-white transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/p/C51E7L4PRy6/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-white transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/554196003019" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-white transition-colors duration-300">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold text-white mb-4 font-serif">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-amber-500 transition-colors duration-300">Início</a></li>
              <li><a href="#servicos" className="hover:text-amber-500 transition-colors duration-300">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-amber-500 transition-colors duration-300">Galeria</a></li>
              <li><a href="#sobre" className="hover:text-amber-500 transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-amber-500 transition-colors duration-300">Contato</a></li>
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold text-white mb-4 font-serif">Horário de Atendimento</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaClock className="mt-1 mr-2 text-amber-500" />
                <div>
                  <p className="font-medium">Segunda a Sexta</p>
                  <p>08:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-2 text-amber-500" />
                <div>
                  <p className="font-medium">Sábado</p>
                  <p>09:00 - 13:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-2 text-amber-500" />
                <div>
                  <p className="font-medium">Domingo</p>
                  <p>Fechado</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-serif">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-amber-500" />
                <span>Rua José de Alencar, 1550 - Cristo Rei - Curitiba - PR, 80040-070</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-2 text-amber-500" />
                <a href="tel:+554196003019" className="hover:text-amber-500 transition-colors duration-300">(41) 9600-3019</a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-2 text-amber-500" />
                <a href="mailto:contato@hlcardetail.com.br" className="hover:text-amber-500 transition-colors duration-300">contato@hlcardetail.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; {currentYear} HL Car Detail. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-500 mt-2">Desenvolvido por Base Quatro</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

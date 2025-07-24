import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 font-serif">Entre em Contato</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Entre em contato conosco através dos nossos canais de atendimento.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 font-serif">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-600">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500">Endereço</h4>
                  <p className="mt-1 text-gray-700">Rua José de Alencar, 1550 - Cristo Rei - Curitiba - PR, 80040-070</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-600">
                  <FaPhone size={18} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500">Telefone</h4>
                  <p className="mt-1 text-gray-700">
                    <a href="tel:+554196003019" className="hover:text-amber-600 transition-colors duration-300">
                      (41) 9600-3019
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-600">
                  <FaEnvelope size={18} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500">E-mail</h4>
                  <p className="mt-1 text-gray-700">
                    <a href="mailto:contato@hlcardetail.com.br" className="hover:text-amber-600 transition-colors duration-300">
                      contato@hlcardetail.com.br
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full text-amber-600">
                  <FaClock size={18} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500">Horário de Atendimento</h4>
                  <p className="mt-1 text-gray-700">Segunda a Sexta: 08:00 - 18:00</p>
                  <p className="text-gray-700">Sábado: 09:00 - 13:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-medium text-gray-500 mb-3">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/hllavacaresteticaautomotiva" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition-colors duration-300">
                  <FaFacebook size={18} />
                </a>
                <a href="https://www.instagram.com/p/C51E7L4PRy6/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition-colors duration-300">
                  <FaInstagram size={18} />
                </a>
                <a href="https://wa.me/554196003019" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition-colors duration-300">
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 font-serif">Nossa Localização</h3>
            
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965343120584!2d-49.28410772445834!3d-25.42844332653333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce472f8a3f6b5%3A0x4e8e6a3e5a8e6a3e!2sRua%20Jos%C3%A9%20de%20Alencar%2C%201550%20-%20Cristo%20Rei%2C%20Curitiba%20-%20PR%2C%2080040-070!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                className="w-full h-full min-h-[300px]"
                title="Localização da HL Car Detail no mapa"
              ></iframe>
            </div>

            <a
              href="https://www.google.com/maps/dir//Rua+Jos%C3%A9+de+Alencar,+1550+-+Cristo+Rei,+Curitiba+-+PR,+80040-070/@-25.4284433,-49.2841077,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94dce472f8a3f6b5:0x4e8e6a3e5a8e6a3e!2m2!1d-49.2815328!2d-25.4284486!3e0!5i2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-300"
            >
              <FaMapMarkerAlt className="mr-2" />
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

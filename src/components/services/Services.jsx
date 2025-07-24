import React from 'react';
import ServiceTabs from './ServiceTabs';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nossos Serviços de Luxo</h2>
        <div className="w-20 h-1 bg-gold-600 mx-auto mb-12"></div>
        
        <div className="mb-16">
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
            Oferecemos uma variedade de serviços de estética automotiva para atender todas as necessidades do seu veículo. 
            Nossos serviços são realizados por profissionais qualificados utilizando produtos de alta qualidade.
          </p>
          
          <ServiceTabs />
        </div>
        
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold text-center text-gold-500 mb-6">Por que escolher nossos serviços?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="text-gold-500 text-4xl mb-3">🏆</div>
              <h4 className="text-xl font-semibold mb-2">Qualidade Garantida</h4>
              <p className="text-gray-300">Utilizamos apenas produtos premium e técnicas profissionais para garantir o melhor resultado.</p>
            </div>
            <div className="text-center p-4">
              <div className="text-gold-500 text-4xl mb-3">⏱️</div>
              <h4 className="text-xl font-semibold mb-2">Agendamento Flexível</h4>
              <p className="text-gray-300">Atendimento personalizado de acordo com sua disponibilidade.</p>
            </div>
            <div className="text-center p-4">
              <div className="text-gold-500 text-4xl mb-3">🔧</div>
              <h4 className="text-xl font-semibold mb-2">Profissionais Certificados</h4>
              <p className="text-gray-300">Equipe especializada e treinada para cuidar do seu veículo com excelência.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gold-400">Interessado em nossos serviços?</h3>
          <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
            Entre em contato agora mesmo e agende o melhor cuidado para o seu veículo.
          </p>
          <a 
            href="#contato" 
            className="inline-block bg-gold-600 hover:bg-gold-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
          >
            Agendar Serviço
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

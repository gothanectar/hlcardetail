import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Silva',
      role: 'Cliente desde 2020',
      content: 'Serviço excepcional! Meu carro nunca pareceu tão novo. A equipe é muito profissional e atenciosa.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Ana Oliveira',
      role: 'Cliente Premium',
      content: 'Adoro o cuidado que têm com os detalhes. Sempre deixo meu carro com eles e nunca me arrependi!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Roberto Santos',
      role: 'Cliente VIP',
      content: 'O melhor serviço de estética automotiva que já encontrei. Profissionais qualificados e produtos de primeira!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <FaStar 
        key={index} 
        className={`${index < rating ? 'text-yellow-400' : 'text-gray-600'} inline-block`} 
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">O que nossos clientes dizem</h2>
        <div className="w-20 h-1 bg-gold-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gold-600"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gold-400">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="text-gold-600 opacity-20 text-4xl absolute -top-2 -left-2" />
                <p className="text-gray-300 italic relative z-10">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gold-400">Quer fazer parte dos nossos clientes satisfeitos?</h3>
          <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
            Agende agora mesmo um horário e descubra por que somos referência em estética automotiva.
          </p>
          <a 
            href="#contato" 
            className="inline-block bg-gold-600 hover:bg-gold-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
          >
            Agendar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

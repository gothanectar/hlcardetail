import React from 'react';
import Services from '../components/services/Services';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h1>
      <Services expanded={true} />
    </div>
  );
};

export default ServicesPage;

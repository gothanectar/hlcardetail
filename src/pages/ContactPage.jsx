import React from 'react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Entre em Contato</h1>
      <div className="max-w-3xl mx-auto">
        <ContactForm expanded={true} />
      </div>
    </div>
  );
};

export default ContactPage;

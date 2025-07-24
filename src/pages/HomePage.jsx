import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/services/Services';
import Testimonials from '../components/testimonials/Testimonials';
import Gallery from '../components/gallery/Gallery';
import ContactForm from '../components/contact/ContactForm';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
      <ContactForm />
    </>
  );
};

export default HomePage;

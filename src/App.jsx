import React from 'react';
import './App.css';

// Importando componentes
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Gallery from './components/gallery/Gallery';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/ui/FloatingButtons';

function App() {
  return (
    <div className="app bg-gray-50">
      <Header />
      
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Gallery />
        <ContactForm />
      </main>
      
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;

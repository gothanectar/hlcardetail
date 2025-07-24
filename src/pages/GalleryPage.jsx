import React from 'react';
import Gallery from '../components/gallery/Gallery';

const GalleryPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Galeria de Fotos</h1>
      <Gallery expanded={true} />
    </div>
  );
};

export default GalleryPage;

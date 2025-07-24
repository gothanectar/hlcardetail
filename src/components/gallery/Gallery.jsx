import React, { useState, useRef } from 'react';
import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { galleryImages } from '../../config/galleryImages';

// Componente personalizado para as setas de navegação
const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} !right-4 z-10`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <div className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300">
        <FaArrowRight />
      </div>
    </div>
  );
};

const SamplePrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} !left-4 z-10`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <div className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300">
        <FaArrowLeft />
      </div>
    </div>
  );
};

const Gallery = () => {
  // Usando as imagens do arquivo de configuração

  const categories = ['todos', ...new Set(galleryImages.map(image => image.category))];
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const filteredImages = selectedCategory === 'todos' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction) => {
    if (sliderRef.current) {
      direction === 'prev' ? sliderRef.current.slickPrev() : sliderRef.current.slickNext();
    }
  };

  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="galeria" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 font-serif">Nossa Galeria</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Confira alguns dos nossos trabalhos realizados com excelência e dedicação.
        </p>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Carrossel de imagens com react-slick */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="px-2">
            {filteredImages.map((image, index) => (
              <div key={image.id} className="px-2 outline-none">
                <div 
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(image, index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm p-3 rounded-full">
                      <FaSearchPlus className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                    <p className="text-xs opacity-75">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl hover:text-amber-500 transition-colors duration-300"
              aria-label="Fechar"
            >
              <FaTimes />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 text-white text-3xl hover:text-amber-500 transition-colors duration-300"
              aria-label="Imagem anterior"
            >
              <FaChevronLeft />
            </button>
            
            <div className="max-w-4xl w-full">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-h-[80vh] w-auto mx-auto object-contain"
              />
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
            
            <button 
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 text-white text-3xl hover:text-amber-500 transition-colors duration-300"
              aria-label="Próxima imagem"
            >
              <FaChevronRight />
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-sm bg-black bg-opacity-50 inline-block px-3 py-1 rounded-full">
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

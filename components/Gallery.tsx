import React from 'react';
import photo1 from '../Photos/unnamed (1).webp';
import photo2 from '../Photos/unnamed (2).webp';
import photo3 from '../Photos/unnamed (3).webp';
import photo4 from '../Photos/unnamed (4).webp';
import photo5 from '../Photos/unnamed (5).webp';
import photo6 from '../Photos/unnamed (6).webp';
import photo7 from '../Photos/unnamed (7).webp';
import photo8 from '../Photos/unnamed (8).webp';
import photo9 from '../Photos/unnamed (9).webp';
import photo10 from '../Photos/unnamed (10).webp';

const Gallery: React.FC = () => {
  // Using local photos from Photos folder (unique photos only)
  // Optimized grid layout for 10 photos - no empty spaces
  const images = [
    {
      src: photo1,
      alt: "Suare Coffee",
      className: "md:col-span-2 md:row-span-2 h-96 md:h-[500px]"
    },
    {
      src: photo2,
      alt: "Suare Coffee", 
      className: "h-64 md:h-[240px]"
    },
    {
      src: photo3,
      alt: "Suare Coffee", 
      className: "h-64 md:h-[240px]"
    },
    {
      src: photo4,
      alt: "Suare Coffee",
      className: "h-64 md:h-[240px]"
    },
    {
      src: photo5,
      alt: "Suare Coffee", 
      className: "h-64 md:h-[240px]"
    },
    {
      src: photo6,
      alt: "Suare Coffee",
      className: "h-64 md:h-[240px]"
    },
    {
      src: photo7,
      alt: "Suare Coffee",
      className: "h-64 md:h-[240px]"
    },
    {
      src: photo8,
      alt: "Suare Coffee",
      className: "h-64 md:h-[240px]"
    },
    {
      src: photo9,
      alt: "Suare Coffee",
      className: "h-64 md:h-[240px]"
    },
    {
      src: photo10,
      alt: "Suare Coffee",
      className: "h-64 md:h-[240px]"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-4">Galeri</h2>
            <p className="text-coffee-600 max-w-md font-light">
              Suare'den kareler: Lezzetli sunumlar, sıcak detaylar ve sizden gelenler.
            </p>
          </div>
          <a 
            href="https://www.instagram.com/suarecoffee/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center text-coffee-600 hover:text-coffee-900 transition-colors font-medium mt-4 md:mt-0"
          >
            Instagram'da Takip Et →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-2xl group ${img.className}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white/80 font-serif tracking-widest text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                   SUARE
                 </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a 
            href="https://www.instagram.com/suarecoffee/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-coffee-600 font-medium"
          >
            Daha fazlası için Instagram →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
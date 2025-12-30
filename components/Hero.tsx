import React from 'react';
import { ArrowDown } from 'lucide-react';
import heroImage from '../Photos/unnamed.webp';

const Hero: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Suare Coffee Ambience" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto mt-20 md:mt-16">
        <span className="block text-coffee-100 tracking-[0.2em] text-sm md:text-base font-medium mb-4 animate-fade-in-up border-b border-white/20 pb-2 inline-block">
          GÜNÜN EN KEYİFLİ BULUŞMASI
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight tracking-tight shadow-sm">
          Suare
          <br />
          <span className="text-coffee-200">Coffee & Bowl</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Suadiye'nin kalbinde, lezzetli bowl tabakları, özel kahveler ve sıcak bir atmosfer sizi bekliyor.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="px-8 py-4 bg-white text-coffee-900 font-medium rounded-full hover:bg-coffee-50 transition-colors min-w-[160px] cursor-pointer"
          >
            Menüyü İncele
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Suare+Coffee,+Suadiye,+Hakim+Kemal+Sk.+no:11,+34740+Kadıköy/İstanbul"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm min-w-[160px]"
          >
            Yol Tarifi Al
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;



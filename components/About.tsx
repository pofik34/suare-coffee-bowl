import React from 'react';
import { Coffee, Utensils, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-coffee-500 font-bold tracking-widest text-sm uppercase mb-3 block">Hakkımızda</span>
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-6 leading-tight">
              Kahve, Yemek ve Sıcak Bir Dostluk
            </h2>
          </div>
          
          <div className="text-coffee-700 text-lg leading-relaxed font-light space-y-6 text-center md:px-8">
            <p>
              Suadiye'nin en keyifli köşesi Suare, sadece bir kahve dükkanı değil, aynı zamanda lezzetli bir kaçış noktası. 
              Dev ayıcığımızın eşlik ettiği samimi atmosferimizde, ister arkadaşlarınızla "günün en keyifli buluşmasını" gerçekleştirin, 
              ister kış bahçemizde sıcak bir salep eşliğinde kitabınızı okuyun.
            </p>
            <p>
              Özenle hazırladığımız <strong>Bowl</strong> tabaklarımız hem sağlıklı hem doyurucu seçenekler sunarken, 
              <strong> Brezilya'dan taze olarak gelen</strong> nitelikli kahve çekirdeklerimiz eşsiz aromasıyla damak tadınıza hitap ediyor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center text-center p-6 bg-coffee-50 rounded-2xl border border-coffee-100/50 hover:border-coffee-200 transition-colors shadow-sm">
              <Utensils className="text-coffee-600 mb-4" size={32} />
              <h4 className="font-serif font-bold text-xl text-coffee-900">Lezzetli Bowls</h4>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-coffee-50 rounded-2xl border border-coffee-100/50 hover:border-coffee-200 transition-colors shadow-sm">
              <Coffee className="text-coffee-600 mb-4" size={32} />
              <h4 className="font-serif font-bold text-xl text-coffee-900">Brezilya Kahveleri</h4>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-coffee-50 rounded-2xl border border-coffee-100/50 hover:border-coffee-200 transition-colors shadow-sm">
              <Heart className="text-coffee-600 mb-4" size={32} />
              <h4 className="font-serif font-bold text-xl text-coffee-900">Samimi Ortam</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
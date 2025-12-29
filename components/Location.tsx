import React from 'react';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="bg-coffee-900 text-coffee-100 py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Info Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Bizi Ziyaret Edin</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                <MapPin className="text-coffee-300" size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-2">Adres</h4>
                <p className="text-coffee-200 leading-relaxed">
                  Suadiye, Hakim Kemal Sk. no:11<br />
                  34740 Kadıköy/İstanbul
                </p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Suare+Coffee,+Suadiye,+Hakim+Kemal+Sk.+no:11,+34740+Kadıköy/İstanbul" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-coffee-300 hover:text-white border-b border-coffee-300/30 pb-0.5 text-sm transition-colors"
                >
                  Haritada Aç
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                <Clock className="text-coffee-300" size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-2">Çalışma Saatleri</h4>
                <p className="text-coffee-200">
                  Her Gün: 09:00 - 01:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                <Phone className="text-coffee-300" size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-2">Telefon</h4>
                <a href="tel:+905322282440" className="text-coffee-200 hover:text-white transition-colors">
                  0532 228 24 40
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                <Instagram className="text-coffee-300" size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-2">Sosyal Medya</h4>
                <a 
                  href="https://www.instagram.com/suarecoffee/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-coffee-200 hover:text-white transition-colors"
                >
                  @suarecoffee
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Column */}
        <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
           {/* Fallback image if iframe fails or loads slow, mostly aesthetic overlay */}
           <div className="absolute inset-0 bg-coffee-800 animate-pulse" />
           
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.871037678396!2d29.084786215715875!3d40.964586179305195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac77b7540ae95%3A0xe99fb53fa0817a69!2sSuare%20Coffee!5e0!3m2!1sen!2str!4v1675123456789!5m2!1sen!2str" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className="relative z-10 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
             title="Suare Coffee Location"
           />
        </div>

      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-coffee-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Suare Coffee. Tüm hakları saklıdır.</p>
      </div>
    </section>
  );
};

export default Location;
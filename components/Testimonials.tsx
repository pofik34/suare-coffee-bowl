import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Gökçe Ağu",
      text: "Hayatımda geldiğim en tatlı mekan. Çalışanları olsun, yiyecek içeceklerinin tazeliği olsun çok güzel. Izgara tavuk bowl tatmanızı da öneririm :)",
      rating: 5
    },
    {
      name: "Kuzum Kurt",
      text: "Çok tatlı bir mekan, sessiz ve sakin. Kesinlikle bir date mekanı, kahveleri bayağı iyiydi.",
      rating: 5
    },
    {
      name: "Nehir Cenik",
      text: "Izgara köfte deneyimledik, çok hızlı ve taptaze geldi. Çalışanlar ve mekan çok tatlıydı, ikramlarını eksik etmediler, öneririm.",
      rating: 5
    },
    {
      name: "Mabel Pines",
      text: "Taptaze geldi, tam fotoğraf çekilmelik çok tatlı bir mekan. Kesin gelin.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-coffee-50 relative overflow-hidden border-t border-coffee-100">
       {/* Decorative */}
       <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-coffee-900 mb-3">Misafirlerimizden Yorumlar</h2>
          <p className="text-coffee-500 text-sm mb-5 font-light">
            Google Maps üzerinden yapılan gerçek misafir değerlendirmeleri
          </p>
          <div className="flex justify-center items-center gap-2 text-coffee-600 bg-white/50 inline-flex px-4 py-2 rounded-full border border-coffee-100 shadow-sm">
             <span className="font-medium text-sm">Google Puanı: 5.0</span>
             <div className="flex text-yellow-500">
               {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-coffee-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              <div className="mb-4 text-coffee-300">
                <Quote size={28} />
              </div>
              <p className="text-coffee-700 text-sm leading-relaxed mb-6 italic flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between border-t border-coffee-50 pt-4 mt-auto">
                <span className="font-medium text-coffee-900 text-sm">{review.name}</span>
                <div className="flex text-yellow-400">
                   {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
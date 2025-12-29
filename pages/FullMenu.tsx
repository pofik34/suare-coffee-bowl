import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { allCategories } from '../data/menuData';

const FullMenu: React.FC = () => {
  const navigate = useNavigate();

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(`menu-cat-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="bg-white min-h-screen">
      
      <div className="flex flex-col min-h-screen">
        {/* Page Header */}
        <div className="flex-shrink-0 bg-white border-b border-coffee-100 px-6 py-4 flex justify-between items-center shadow-sm">
          <div>
            <h1 className="font-serif font-bold text-2xl md:text-3xl text-coffee-900">Suare Menü</h1>
            <p className="text-xs text-coffee-500">Brezilya'dan taze çekirdekler & Sağlıklı Bowl'lar</p>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 bg-coffee-50 rounded-full hover:bg-coffee-100 text-coffee-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Categories Tab Navigation (Sticky) */}
        <div className="flex-shrink-0 bg-coffee-50 px-6 py-3 flex gap-3 overflow-x-auto hide-scrollbar border-b border-coffee-100 sticky top-0 z-10">
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all bg-white text-coffee-700 border border-coffee-200 hover:border-coffee-400"
            >
              <cat.icon size={16} />
              {cat.title}
            </button>
          ))}
        </div>

        {/* Menu Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto bg-white p-6 pb-20">
          <div className="max-w-3xl mx-auto space-y-16">
            
            {allCategories.map((category) => (
              <div key={category.id} id={`menu-cat-${category.id}`} className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-coffee-100">
                  <category.icon className="text-coffee-600" size={28} />
                  <h2 className="font-serif font-bold text-3xl text-coffee-900">{category.title}</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-coffee-50 transition-colors border border-transparent hover:border-coffee-100 group">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-24 h-24 object-cover rounded-lg shadow-sm flex-shrink-0"
                        />
                      )}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-coffee-900 text-lg group-hover:text-coffee-700">{item.name}</h3>
                          <span className="text-coffee-900 font-semibold">{item.price}</span>
                        </div>
                        <p className="text-coffee-500 text-sm mt-1 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center pt-8 border-t border-coffee-100 text-coffee-400 text-sm">
              <p>* Alerjen uyarısı: Ürünlerimizde glüten, laktoz ve kuruyemiş bulunabilir. Lütfen sipariş verirken belirtiniz.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMenu;


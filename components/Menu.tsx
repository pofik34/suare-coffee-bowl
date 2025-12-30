import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Star, ArrowRight } from 'lucide-react';
import { allCategories } from '../data/menuData';

const Menu: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-scroll loop logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && sliderRef.current) {
        const container = sliderRef.current;
        const firstCard = container.firstElementChild as HTMLElement;
        // gap-6 is 24px (1.5rem)
        const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 300;

        // Just scroll right continuously. The infinite loop logic in onScroll will handle the reset.
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;

    // Check for overflow. If no overflow, no need to loop.
    if (container.scrollWidth <= container.clientWidth) return;

    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;

    // We have 2 identical sets of items.
    // The width of one set is half the total scrollWidth.
    const oneSetWidth = scrollWidth / 2;

    // If we have scrolled past the first set (i.e. we are now seeing the second set)
    // We snap back to the beginning.
    // Use a small threshold (e.g., >= oneSetWidth)
    if (scrollLeft >= oneSetWidth) {
      // Disable smooth scrolling temporarily for the instant jump
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = scrollLeft - oneSetWidth;
      container.style.scrollBehavior = 'smooth';
    }
  };

  const scrollManual = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const firstCard = container.firstElementChild as HTMLElement;
      const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 300;

      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Flatten popular items
  const popularItems = allCategories.flatMap((cat) => cat.items.filter((item) => item.popular));

  // Combine items with a "View All" marker to treat it as a single list
  // Use a type union or just any for the mixed list for simplicity in this component
  const itemsWithViewAll = [...popularItems, { isViewAll: true } as any];

  // Duplicate for infinite loop effect
  const displayItems = [...itemsWithViewAll, ...itemsWithViewAll];

  return (
    <section id="menu" className="py-20 md:py-24 bg-coffee-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-coffee-600 text-sm font-bold tracking-widest uppercase">Favoriler</span>
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mt-2">En Çok Tercih Edilenler</h2>
            <p className="text-coffee-600 mt-3 font-light max-w-xl">
              Misafirlerimizin vazgeçilmezi olan, özenle hazırladığımız imza lezzetlerimiz.
            </p>
          </div>

          <Link
            to="/menu"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-coffee-900 text-white rounded-full hover:bg-coffee-800 transition-all hover:pr-8 group"
          >
            <span>Bütün Menüyü Görüntüle</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Popular Items Slider (Horizontal Scroll) */}
        <div className="relative group/slider">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollManual('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-3 md:-ml-6 z-10 bg-white/90 p-3 rounded-full shadow-lg text-coffee-900 opacity-0 group-hover/slider:opacity-100 transition-opacity disabled:opacity-0 hover:bg-white"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scrollManual('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-3 md:-mr-6 z-10 bg-white/90 p-3 rounded-full shadow-lg text-coffee-900 opacity-0 group-hover/slider:opacity-100 transition-opacity disabled:opacity-0 hover:bg-white"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>

          <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 hide-scrollbar snap-x snap-mandatory"
            >
              {displayItems.map((item, idx) => {
                // Render View All Card
                if ((item as any).isViewAll) {
                  return (
                    <Link
                      key={`view-all-${idx}`}
                      to="/menu"
                      className="min-w-[70vw] sm:min-w-[180px] md:min-w-[200px] bg-coffee-100/50 rounded-2xl flex flex-col items-center justify-center snap-center flex-shrink-0 cursor-pointer hover:bg-coffee-200 transition-colors border-2 border-dashed border-coffee-300 text-coffee-700 gap-3 group"
                    >
                      <div className="p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                        <ArrowRight size={24} />
                      </div>
                      <span className="font-medium">Tümünü Gör</span>
                    </Link>
                  );
                }

                const realItem = item as (typeof popularItems)[number];

                // Render Product Card
                return (
                  <Link
                    key={`prod-${idx}`}
                    to="/menu"
                    className="min-w-[80vw] sm:min-w-[260px] md:min-w-[320px] lg:min-w-[340px] bg-white rounded-2xl shadow-lg shadow-coffee-100/50 overflow-hidden snap-center flex-shrink-0 group cursor-pointer border border-coffee-100 hover:border-coffee-300 transition-all"
                  >
                    <div className="h-48 overflow-hidden relative">
                      {realItem.image && (
                        <img
                          src={realItem.image}
                          alt={realItem.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-coffee-900 shadow-sm flex items-center gap-1">
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        Popüler
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif font-bold text-xl text-coffee-900 group-hover:text-coffee-600 transition-colors">
                          {realItem.name}
                        </h3>
                        <span className="font-medium text-coffee-800 bg-coffee-50 px-2 py-1 rounded-lg text-sm">
                          {realItem.price}
                        </span>
                      </div>
                      <p className="text-coffee-600 text-sm line-clamp-2 leading-relaxed">{realItem.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Button */}
        <Link
          to="/menu"
          className="md:hidden w-full flex items-center justify-center gap-2 px-6 py-4 bg-coffee-900 text-white rounded-xl hover:bg-coffee-800 transition-all mt-4"
        >
          <span>Bütün Menüyü Görüntüle</span>
        </Link>
      </div>
    </section>
  );
};

export default Menu;



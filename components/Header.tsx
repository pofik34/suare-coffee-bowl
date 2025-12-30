import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Menü', href: '#menu' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'İletişim', href: '#location' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="/" 
          onClick={handleLogoClick} 
          className="relative z-50 cursor-pointer"
        >
          <h1 className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-coffee-900' : 'text-coffee-900 md:text-white'}`}>
            SUARE<span className="text-coffee-500">.</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium tracking-wide hover:text-coffee-500 transition-colors ${
                isScrolled ? 'text-coffee-800' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.instagram.com/suarecoffee/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full border transition-all ${
              isScrolled
                ? 'border-coffee-200 text-coffee-800 hover:bg-coffee-50'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            <Instagram size={18} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden relative z-50 p-2 ${isScrolled ? 'text-coffee-900' : 'text-coffee-900'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-coffee-50 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-serif text-coffee-900 hover:text-coffee-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.instagram.com/suarecoffee/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-coffee-600 hover:text-coffee-800"
          >
            <Instagram size={32} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
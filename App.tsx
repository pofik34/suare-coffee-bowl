import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import FullMenu from './pages/FullMenu';

function Home() {
  return (
    <div className="bg-coffee-50 min-h-screen text-coffee-900 font-sans selection:bg-coffee-200 selection:text-coffee-900">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Testimonials />
        <About />
        <Gallery />
        <Location />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<FullMenu />} />
    </Routes>
  );
}

export default App;


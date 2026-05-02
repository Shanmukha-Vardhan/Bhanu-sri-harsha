import React from 'react';
import Hero from './components/Hero';
import AtAGlance from './components/AtAGlance';
import ThePlayer from './components/ThePlayer';
import CareerHighlights from './components/CareerHighlights';
import InTheNews from './components/InTheNews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio">
      <Hero />
      <AtAGlance />
      <ThePlayer />
      <CareerHighlights />
      <InTheNews />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;

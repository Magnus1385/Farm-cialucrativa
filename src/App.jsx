import React from 'react';
import Hero from './components/Hero';
import SocialProofWall from './components/SocialProofWall';
import PainPoints from './components/PainPoints';
import FAQ from './components/FAQ';
import Instructor from './components/Instructor';
import PricingFooter from './components/PricingFooter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SocialProofWall />
      <PainPoints />
      <Instructor />
      <FAQ />
      <PricingFooter />

      {/* Footer simple copyright */}
      <footer className="bg-gray-950 text-gray-400 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Farmácia Lucrativa. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

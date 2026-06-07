import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Press from './pages/Press';

type Page = 'home' | 'contact' | 'press';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const scrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition - bodyRect - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - bodyRect - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  const goToPage = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#171f2c] text-[#f1f5f9]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#171f2c]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => goToPage('home')} 
            className="flex items-center flex-shrink-0"
          >
            <img 
              src="/bastionheader2.png" 
              alt="Bastion Brotherhood" 
              className="h-10 md:h-12 w-auto"
            />
          </button>
          
          <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-medium overflow-x-auto whitespace-nowrap pb-1">
            <button onClick={() => scrollToSection('mission')} className="hover:text-[#c5a46e] transition-colors">Mission</button>
            <button onClick={() => scrollToSection('join')} className="hover:text-[#c5a46e] transition-colors">Join Us</button>
            <button onClick={() => scrollToSection('register')} className="hover:text-[#c5a46e] transition-colors">Register</button>
            <button onClick={() => goToPage('contact')} className="hover:text-[#c5a46e] transition-colors">Contact</button>
            <button onClick={() => goToPage('press')} className="hover:text-[#c5a46e] transition-colors">Press</button>
            
            <button 
              onClick={() => goToPage('contact')}
              className="px-4 md:px-6 py-2 bg-[#c5a46e] hover:bg-[#a67c52] text-[#0a1628] rounded-full text-xs md:text-sm font-semibold transition-all flex items-center gap-2 flex-shrink-0"
            >
              Get In Touch <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && <Home scrollToSection={scrollToSection} />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'press' && <Press />}
    </div>
  );
};

export default App;
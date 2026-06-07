import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Press from './pages/Press';

type Page = 'home' | 'contact' | 'press';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setIsMenuOpen(false);
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
      setIsMenuOpen(false);
    }
  };

  const goToPage = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#171f2c] text-[#f1f5f9]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#171f2c]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => { goToPage('home'); setIsMenuOpen(false); }} 
            className="flex items-center flex-shrink-0"
          >
            <img 
              src="/bastionheader2.png" 
              alt="Bastion Brotherhood" 
              className="h-10 md:h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button onClick={() => scrollToSection('mission')} className="hover:text-[#c5a46e] transition-colors">Mission</button>
            <button onClick={() => scrollToSection('join')} className="hover:text-[#c5a46e] transition-colors">Join Us</button>
            <button onClick={() => scrollToSection('register')} className="hover:text-[#c5a46e] transition-colors">Register</button>
            <button onClick={() => goToPage('contact')} className="hover:text-[#c5a46e] transition-colors">Contact</button>
            <button onClick={() => goToPage('press')} className="hover:text-[#c5a46e] transition-colors">Press</button>
            
            <button 
              onClick={() => goToPage('contact')}
              className="px-6 py-2 bg-[#c5a46e] hover:bg-[#a67c52] text-[#0a1628] rounded-full text-sm font-semibold transition-all flex items-center gap-2"
            >
              Get In Touch <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#f1f5f9] hover:text-[#c5a46e]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#171f2c] border-t border-white/10 px-4 py-4">
            <div className="flex flex-col gap-1 text-sm font-medium">
              <button 
                onClick={() => { scrollToSection('mission'); }} 
                className="py-3 px-2 text-left hover:bg-white/5 rounded-lg transition-colors"
              >
                Mission
              </button>
              <button 
                onClick={() => { scrollToSection('join'); }} 
                className="py-3 px-2 text-left hover:bg-white/5 rounded-lg transition-colors"
              >
                Join Us
              </button>
              <button 
                onClick={() => { scrollToSection('register'); }} 
                className="py-3 px-2 text-left hover:bg-white/5 rounded-lg transition-colors"
              >
                Register Interest
              </button>
              <button 
                onClick={() => { goToPage('contact'); }} 
                className="py-3 px-2 text-left hover:bg-white/5 rounded-lg transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => { goToPage('press'); }} 
                className="py-3 px-2 text-left hover:bg-white/5 rounded-lg transition-colors"
              >
                Press
              </button>
              
              <div className="pt-2 border-t border-white/10 mt-2">
                <button 
                  onClick={() => { goToPage('contact'); }}
                  className="w-full py-3 bg-[#c5a46e] hover:bg-[#a67c52] text-[#0a1628] rounded-full text-sm font-semibold flex items-center justify-center gap-2"
                >
                  Get In Touch <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && <Home scrollToSection={scrollToSection} />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'press' && <Press />}
    </div>
  );
};

export default App;
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import Press from './pages/Press';
import Home from './pages/Home';

const App: React.FC = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#171f2c] text-[#f1f5f9]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#171f2c]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/bastionheader2.png" 
              alt="Bastion Brotherhood" 
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('mission')} className="hover:text-[#c5a46e] transition-colors">Mission</button>
            <button onClick={() => scrollToSection('join')} className="hover:text-[#c5a46e] transition-colors">Join Us</button>
            <button onClick={() => scrollToSection('register')} className="hover:text-[#c5a46e] transition-colors">Register Interest</button>
            <Link to="/contact" className="hover:text-[#c5a46e] transition-colors">Contact</Link>
            <Link to="/press" className="hover:text-[#c5a46e] transition-colors">Press</Link>
            
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-[#c5a46e] hover:bg-[#a67c52] text-[#0a1628] rounded-full text-sm font-semibold transition-all flex items-center gap-2"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home scrollToSection={scrollToSection} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<Press />} />
      </Routes>
    </div>
  );
};

export default App;
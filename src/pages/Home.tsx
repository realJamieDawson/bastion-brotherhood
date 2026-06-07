import React, { useState } from 'react';
import { Users, Award, Heart, Shield, ArrowRight, CheckCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  interestType: string;
}

interface HomeProps {
  scrollToSection: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ scrollToSection }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    interestType: 'member',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xbdegqrk', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          interestType: formData.interestType,
          _subject: 'New Bastion Brotherhood Interest Registration',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            interestType: 'member',
          });
          setIsSubmitted(false);
        }, 4500);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center pt-12 pb-8">
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48">
              <img src="/logo.png" alt="Bastion Brotherhood" className="w-full h-auto" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
            BASTION<br />BROTHERHOOD
          </h1>
          <p className="text-2xl md:text-3xl text-[#c5a46e] font-light tracking-tight mb-8">
            Strength. Support. Solidarity.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-[#94a3b8] leading-relaxed">
              Bastion Brotherhood is a men's mental health support organisation launching soon in St Helens. 
              Please register your interest in attending meetings or becoming a Bastion Ambassador below.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('register')}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#c5a46e] hover:bg-[#a67c52] text-[#0a1628] text-lg font-semibold rounded-2xl transition-all"
            >
              Register Your Interest <ArrowRight />
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/20 hover:bg-white/5 text-lg font-medium rounded-2xl transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="max-w-5xl mx-auto px-6 py-20 border-b border-white/10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-[3px] text-[#c5a46e] text-sm mb-3">Our Purpose</div>
            <h2 className="text-5xl font-bold tracking-tight mb-6">A safe space for men to heal, connect and grow.</h2>
            
            <div className="space-y-6 text-lg text-[#94a3b8]">
              <p>
                Too many men suffer in silence. Bastion Brotherhood exists to change that. 
                We're building a confidential, judgment-free community where men can speak openly about 
                their mental health, share experiences, and find real strength in each other.
              </p>
              <p>
                Launching soon in <span className="text-[#c5a46e]">St Helens</span>, we will run regular 
                in-person meetings, peer support sessions, and create pathways for men who want to go 
                further as Ambassadors in their communities.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="info-card bg-[#1e2937] border border-white/10 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#c5a46e]/10 rounded-2xl">
                  <Shield className="text-[#c5a46e]" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Confidential &amp; Safe</h3>
                  <p className="text-[#94a3b8]">Everything shared stays within the room. No judgment. No stigma. Just brotherhood.</p>
                </div>
              </div>
            </div>
            
            <div className="info-card bg-[#1e2937] border border-white/10 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#c5a46e]/10 rounded-2xl">
                  <Users className="text-[#c5a46e]" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Real Connection</h3>
                  <p className="text-[#94a3b8]">Small groups. Honest conversations. Men supporting men through life's challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="max-w-5xl mx-auto px-6 py-20 border-b border-white/10">
        <div className="text-center mb-14">
          <div className="uppercase tracking-[3px] text-[#c5a46e] text-sm mb-3">Two Ways to Get Involved</div>
          <h2 className="text-5xl font-bold tracking-tight">How will you stand with us?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="info-card bg-[#1e2937] border border-white/10 rounded-3xl p-10 flex flex-col">
            <div className="mb-8">
              <div className="inline-flex p-4 bg-[#c5a46e]/10 rounded-2xl mb-6">
                <Users className="text-[#c5a46e]" size={36} />
              </div>
              <h3 className="text-4xl font-bold tracking-tight mb-4">Attend as a Member</h3>
              <p className="text-[#94a3b8] text-lg">Join our regular meetings and become part of a growing community of men supporting each other.</p>
            </div>
            
            <ul className="space-y-4 text-[#94a3b8] mb-10 flex-1">
              <li className="flex items-start gap-3"><CheckCircle className="text-[#c5a46e] mt-1 flex-shrink-0" size={20} /> Weekly in-person meetings in St Helens</li>
              <li className="flex items-start gap-3"><CheckCircle className="text-[#c5a46e] mt-1 flex-shrink-0" size={20} /> Confidential peer support circles</li>
              <li className="flex items-start gap-3"><CheckCircle className="text-[#c5a46e] mt-1 flex-shrink-0" size={20} /> Guest speakers and practical tools</li>
              <li className="flex items-start gap-3"><CheckCircle className="text-[#c5a46e] mt-1 flex-shrink-0" size={20} /> No cost to attend • Open to all men 18+</li>
            </ul>
            
            <button onClick={() => scrollToSection('register')} className="mt-auto inline-flex items-center justify-center gap-2 w-full py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-2xl font-semibold transition-all">
              I want to attend meetings
            </button>
          </div>

          <div className="info-card bg-[#1e2937] border border-white/10 rounded-3xl p-10 flex flex-col">
            <div className="mb-8">
              <div className="inline-flex p-4 bg-[#c5a46e]/10 rounded-2xl mb-6">
                <Award className="text-[#c5a46e]" size={36} />
              </div>
              <h3 className="text-4xl font-bold tracking-tight mb-4">Become a Bastion Ambassador</h3>
              <p className="text-[#94a3b8] text-lg">Take a leadership role in your community. Help us reach more men who need support.</p>
            </div>
            
            <ul className="space-y-4 text-[#94a3b8] mb-10 flex-1">
              <li className="flex items-start gap-3"><CheckCircle className="text-[#c5a46e] mt-1 flex-shrink-0" size={20} /> Early access to training and resources</li>
              <li className="flex items-start gap-3"><CheckCircle className="text-[#c5a46e] mt-1 flex-shrink-0" size={20} /> Help shape the organisation locally</li>
              <li className="flex items-start gap-3"><CheckCircle className="text-[#c5a46e] mt-1 flex-shrink-0" size={20} /> Support peers and promote meetings</li>
              <li className="flex items-start gap-3"><CheckCircle className="text-[#c5a46e] mt-1 flex-shrink-0" size={20} /> Be part of something bigger from day one</li>
            </ul>
            
            <button onClick={() => scrollToSection('register')} className="mt-auto inline-flex items-center justify-center gap-2 w-full py-4 bg-[#c5a46e] hover:bg-[#a67c52] text-[#0a1628] font-semibold rounded-2xl transition-all">
              I want to become an Ambassador <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Register Form */}
      <section id="register" className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[3px] text-[#c5a46e] text-sm mb-3">Pre-Launch Registration</div>
          <h2 className="text-5xl font-bold tracking-tight">Register Your Interest</h2>
          <p className="mt-4 text-xl text-[#94a3b8]">We'll be in touch as soon as we have dates and venues confirmed.</p>
        </div>

        {!isSubmitted ? (
          <div className="bg-[#1e2937] border border-white/10 rounded-3xl p-10 md:p-14">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full bg-[#0a1628] border border-white/20 focus:border-[#c5a46e] rounded-2xl px-6 py-4 text-lg" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full bg-[#0a1628] border border-white/20 focus:border-[#c5a46e] rounded-2xl px-6 py-4 text-lg" placeholder="Smith" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-[#0a1628] border border-white/20 focus:border-[#c5a46e] rounded-2xl px-6 py-4 text-lg" placeholder="you@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#94a3b8] mb-2">I am interested in...</label>
                <select 
                  name="interestType" 
                  value={formData.interestType} 
                  onChange={handleInputChange} 
                  className="w-full bg-[#0a1628] border border-white/20 focus:border-[#c5a46e] rounded-2xl px-6 py-4 text-lg appearance-none cursor-pointer"
                >
                  <option value="member">Attending meetings as a Member</option>
                  <option value="ambassador">Becoming a Bastion Ambassador</option>
                </select>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-5 text-xl font-semibold bg-[#c5a46e] hover:bg-[#a67c52] disabled:opacity-70 text-[#0a1628] rounded-2xl flex items-center justify-center gap-3 mt-4">
                {isSubmitting ? 'Submitting...' : 'Register My Interest'}
                {!isSubmitting && <ArrowRight size={22} />}
              </button>

              <p className="text-center text-sm text-[#64748b]">
                Your information is confidential. We will only use it to contact you about Bastion Brotherhood.
              </p>
            </form>
          </div>
        ) : (
          <div className="bg-[#1e2937] border border-[#c5a46e]/30 rounded-3xl p-16 text-center">
            <div className="inline-flex p-5 bg-[#c5a46e]/10 rounded-full mb-8">
              <CheckCircle className="text-[#c5a46e]" size={56} />
            </div>
            <h3 className="text-4xl font-bold tracking-tight mb-4">Thank you. We've got you.</h3>
            <p className="text-xl text-[#94a3b8] max-w-md mx-auto">
              Your interest has been registered. We'll be in touch very soon with details about our launch in St Helens.
            </p>
          </div>
        )}
      </section>

      {/* Final CTA */}
      <section className="bg-[#1e2937] border-t border-white/10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl text-[#94a3b8] italic">"You don't have to face it alone. We're building this together."</p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#c5a46e]">
              <Heart size={16} /> St Helens, Merseyside • Launching 2026
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center text-sm text-[#64748b] border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-4">
          <div>© {new Date().getFullYear()} Bastion Brotherhood. All rights reserved.</div>
          <div>
            <span>Confidential • Supportive • For Men</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
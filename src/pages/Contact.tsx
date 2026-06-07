import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Spam protection

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check (spam protection)
    if (honeypot) {
      alert('Spam detected. Submission blocked.');
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
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
          ...formData,
          _subject: 'New Contact Form Submission - Bastion Brotherhood',
          formType: 'Contact Us',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitted(false);
        }, 4000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#171f2c] text-[#f1f5f9] pt-20">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Contact Us</h1>
          <p className="text-lg text-[#94a3b8]">We'd love to hear from you.</p>
        </div>

        {!isSubmitted ? (
          <div className="bg-[#1e2937] border border-white/10 rounded-3xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from real users */}
              <input
                type="text"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#0a1628] border border-white/20 focus:border-[#c5a46e] rounded-2xl px-6 py-4 text-lg"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#0a1628] border border-white/20 focus:border-[#c5a46e] rounded-2xl px-6 py-4 text-lg"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-[#0a1628] border border-white/20 focus:border-[#c5a46e] rounded-2xl px-6 py-4 text-lg"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-[#0a1628] border border-white/20 focus:border-[#c5a46e] rounded-3xl px-6 py-4 text-lg resize-y"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-semibold bg-[#c5a46e] hover:bg-[#a67c52] disabled:opacity-70 text-[#0a1628] rounded-2xl flex items-center justify-center gap-3 mt-2 transition-all"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRight size={20} />}
              </button>

              <p className="text-center text-sm text-[#64748b] mt-3">
                We usually respond within 48 hours.
              </p>
            </form>
          </div>
        ) : (
          <div className="bg-[#1e2937] border border-[#c5a46e]/30 rounded-3xl p-12 text-center">
            <div className="inline-flex p-4 bg-[#c5a46e]/10 rounded-full mb-6">
              <CheckCircle className="text-[#c5a46e]" size={48} />
            </div>
            <h3 className="text-3xl font-bold tracking-tight mb-3">Thank you for reaching out.</h3>
            <p className="text-lg text-[#94a3b8]">We've received your message and will get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
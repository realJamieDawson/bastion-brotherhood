import React from 'react';

const Press: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#171f2c] text-[#f1f5f9] pt-20">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <div className="uppercase tracking-[3px] text-[#c5a46e] text-sm mb-2">Media</div>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Press</h1>
          <p className="text-lg text-[#94a3b8]">
            For all press and media enquiries, please contact our press team.
          </p>
        </div>

        <div className="bg-[#1e2937] border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Press Enquiries</h2>
          
          <div className="max-w-md mx-auto">
            <p className="text-lg text-[#94a3b8] mb-8">
              We're happy to provide information, interviews, or assets for media coverage.
            </p>

            <div className="bg-[#0a1628] border border-white/10 rounded-2xl p-5 mx-auto max-w-xs w-full">
              <p className="text-sm text-[#64748b] mb-1">Press Contact</p>
              <a 
                href="mailto:press@bastionbrotherhood.co.uk" 
                className="text-lg md:text-xl font-semibold text-[#c5a46e] hover:underline whitespace-nowrap"
              >
                press@bastionbrotherhood.co.uk
              </a>
            </div>

            <p className="mt-8 text-sm text-[#64748b]">
              We aim to respond to all press enquiries within 24 hours.
            </p>
          </div>
        </div>

        {/* Press Releases Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold tracking-tight mb-6 text-center">Press Releases</h3>
          <div className="bg-[#1e2937] border border-white/10 rounded-3xl p-8 text-center">
            <p className="text-[#94a3b8]">
              Official press releases from Bastion Brotherhood will be published here.
            </p>
            <p className="mt-2 text-sm text-[#64748b]">
              Check back soon for our first announcements.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold tracking-tight mb-3">About Bastion Brotherhood</h3>
          <p className="text-[#94a3b8] text-sm max-w-2xl mx-auto">
            Bastion Brotherhood is a men's mental health support organisation launching in St Helens, Merseyside. 
            We provide confidential peer support meetings and community for men who want to talk openly about their mental health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Press;
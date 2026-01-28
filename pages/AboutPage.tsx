
import React from 'react';
import { History, ShieldCheck, Award, Heart, Tool } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-zinc-900 border-b border-zinc-800 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h1 className="text-5xl md:text-8xl font-heading font-black italic tracking-tighter uppercase">THE CAR KINGS STORY</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            Defining automotive luxury in Bangalore since 2009. We don't just customize cars; we craft experiences.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-black">DRIVEN BY PASSION</h2>
            <p className="text-zinc-400 leading-relaxed">
              Founded in the heart of BTM Layout, Car Kings started as a small workshop for audiophiles. Over the last decade, we have grown into Bangalore's premier full-service customization studio, specializing in high-end Paint Protection and complex electronic upgrades.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Our philosophy is simple: Treat every car like it's our own. Whether it's a hatchback or a luxury sedan, our commitment to quality remains uncompromising.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-zinc-900 rounded-3xl border border-zinc-800 text-center">
                <div className="text-4xl font-heading font-black text-orange-500 mb-1">15+</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">Years of Legacy</div>
              </div>
              <div className="p-6 bg-zinc-900 rounded-3xl border border-zinc-800 text-center">
                <div className="text-4xl font-heading font-black text-orange-500 mb-1">5k+</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">Cars Customized</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-500/10 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" 
              alt="Owner" 
              className="relative z-10 rounded-3xl border-2 border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-black mb-16 text-center italic uppercase">OUR JOURNEY</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-500 before:via-zinc-800 before:to-zinc-800">
            {[
              { year: '2009', title: 'The Garage Begins', desc: 'Started with basic car audio and interior detailing.' },
              { year: '2013', title: 'Studio Expansion', desc: 'Moved to our current 4000 sq ft facility in BTM Layout.' },
              { year: '2017', title: 'PPF Pioneers', desc: 'Introduced high-grade TPU Paint Protection Film in Bangalore.' },
              { year: '2024', title: 'The Future', desc: 'Pioneering AI-integrated lighting and smart infotainment systems.' }
            ].map((milestone, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-orange-500 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-orange-500 group-hover:text-zinc-950">
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl transition-all group-hover:border-orange-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-black text-orange-500 italic">{milestone.year}</h3>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{milestone.title}</h4>
                  <p className="text-sm text-zinc-500">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

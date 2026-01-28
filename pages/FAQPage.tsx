
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Is PPF legal in India?", a: "Yes, Paint Protection Film is completely legal in India as it is a transparent film that doesn't change the base color of your vehicle registered in your RC." },
    { q: "What is the warranty coverage for Ceramic Coating?", a: "We offer 3-year and 5-year warranty packages for ceramic coating. It covers gloss levels, hydrophobic properties, and accidental chemical damage." },
    { q: "How long does a complete interior customization take?", a: "Depending on the complexity and material choice, it typically takes 2 to 4 working days." },
    { q: "Do you offer doorstep pickup and drop?", a: "Yes, we provide premium flat-bed or driver-assisted pickup and drop services across Bangalore for select premium services." },
    { q: "Can I upgrade my audio system without cutting wires?", a: "Absolutely. We specialize in 'Plug & Play' installations using high-quality harnesses that maintain your vehicle's factory warranty." },
    { q: "Are your seat covers compatible with side-airbags?", a: "Yes, we use special airbag-compatible stitching techniques and specialized equipment to ensure safety is never compromised." }
  ];

  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <div className="bg-zinc-900 py-24 text-center border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-black italic tracking-tighter">GOT QUESTIONS?</h1>
          <p className="text-zinc-400">Everything you need to know about our services and process.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden transition-all duration-300">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-8 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
            >
              <span className="font-bold text-lg md:text-xl pr-8">{faq.q}</span>
              <div className={`p-2 rounded-full ${openIndex === i ? 'bg-orange-500 text-zinc-950' : 'bg-zinc-800 text-zinc-400'}`}>
                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
              <div className="p-8 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800/50 italic">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <div className="bg-zinc-900 inline-block p-12 rounded-[3rem] border border-zinc-800 space-y-6">
          <HelpCircle className="mx-auto text-orange-500" size={48} />
          <h3 className="text-2xl font-bold">Still have questions?</h3>
          <p className="text-zinc-500">Reach out to us directly on WhatsApp for instant support.</p>
          <a 
            href="https://wa.me/919876543210" 
            className="inline-block bg-emerald-500 text-white px-10 py-4 rounded-full font-black hover:scale-105 transition-transform"
          >
            CHAT WITH US
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;

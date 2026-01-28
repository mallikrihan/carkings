
import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Mail, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-zinc-950">
      <div className="bg-zinc-900 py-24 border-b border-zinc-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-black italic tracking-tighter uppercase">GET IN TOUCH</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">Visit our premium studio in BTM Layout or reach out via digital channels.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-heading font-black italic uppercase underline decoration-orange-500 underline-offset-8">CONTACT INFO</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 space-y-4">
                  <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center">
                    <MapPin />
                  </div>
                  <h4 className="font-bold">Studio Address</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">#45, 100 Feet Ring Road, BTM Layout 2nd Stage, Bangalore - 560076</p>
                </div>
                
                <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 space-y-4">
                  <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center">
                    <Phone />
                  </div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-sm text-zinc-500">+91 98765 43210</p>
                  <p className="text-sm text-zinc-500">+91 80 1234 5678</p>
                </div>
                
                <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center">
                    <MessageCircle />
                  </div>
                  <h4 className="font-bold">WhatsApp</h4>
                  <p className="text-sm text-zinc-500">Instant Chat Available</p>
                  <a href="https://wa.me/919876543210" className="text-sm text-emerald-500 font-bold hover:underline">Chat Now →</a>
                </div>
                
                <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 space-y-4">
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center">
                    <Mail />
                  </div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-sm text-zinc-500">hello@carkings.in</p>
                  <p className="text-sm text-zinc-500">sales@carkings.in</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-black uppercase text-sm tracking-widest text-zinc-500">Find Us On Maps</h4>
              <div className="w-full h-80 rounded-[3rem] overflow-hidden border border-zinc-800 grayscale">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750212716174!2d77.6019313!3d12.9113645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fc91197931%3A0xcfcf5a6711d830!2sBTM%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                ></iframe>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[4rem] shadow-2xl">
              <h3 className="text-3xl font-heading font-black mb-8 italic uppercase">SEND A MESSAGE</h3>
              
              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl text-center space-y-4 animate-in zoom-in-95">
                  <div className="w-16 h-16 bg-emerald-500 text-zinc-950 rounded-full flex items-center justify-center mx-auto">
                    <Send size={32} />
                  </div>
                  <h4 className="text-2xl font-bold">Message Sent!</h4>
                  <p className="text-zinc-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Your Name</label>
                    <input type="text" required className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                    <input type="email" required className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Phone</label>
                    <input type="tel" required className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="+91 99999 99999" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Message</label>
                    <textarea rows={5} required className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-orange-500 text-zinc-950 font-black py-5 rounded-2xl text-xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center space-x-3">
                    <Send />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

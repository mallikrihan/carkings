
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { CheckCircle2, Clock, IndianRupee, ArrowRight, Zap } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700 pb-24">
      {/* Header */}
      <div className="bg-zinc-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full w-full">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="border-r border-zinc-500 h-full"></div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 italic tracking-tighter">OUR SERVICES</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
            Precision customization and protection solutions using industry-leading technology.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-32">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-orange-500 text-xs font-black uppercase tracking-widest px-3 py-1 bg-orange-500/10 rounded-full border border-orange-500/20">
                  <Zap size={14} />
                  <span>{service.category}</span>
                </div>
                <h2 className="text-4xl font-heading font-black">{service.title}</h2>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {service.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm text-zinc-300">
                    <CheckCircle2 className="text-orange-500 shrink-0" size={18} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-8 py-6 border-y border-zinc-800">
                <div className="space-y-1">
                  <span className="text-xs text-zinc-500 uppercase font-black tracking-widest flex items-center gap-1">
                    <IndianRupee size={14} /> Price Range
                  </span>
                  <div className="text-xl font-bold text-white">{service.priceRange}</div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-zinc-500 uppercase font-black tracking-widest flex items-center gap-1">
                    <Clock size={14} /> Time Estimate
                  </span>
                  <div className="text-xl font-bold text-white">{service.timeRequired}</div>
                </div>
              </div>

              <Link 
                to="/book" 
                className="inline-flex items-center space-x-3 bg-orange-500 text-zinc-950 font-black px-8 py-4 rounded-full hover:bg-orange-600 transition-all group"
              >
                <span>BOOK THIS SERVICE</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:w-1/2 w-full">
              {service.beforeImage ? (
                <div className="space-y-4">
                  <div className="relative group cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
                    <img src={service.image} alt={service.title} className="w-full aspect-[4/3] object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-black bg-zinc-950/80 px-4 py-2 rounded-full border border-zinc-800">VIEW GALLERY</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="relative h-40 rounded-2xl overflow-hidden border border-zinc-800">
                        <img src={service.beforeImage} alt="Before" className="w-full h-full object-cover" />
                        <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">Before</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="relative h-40 rounded-2xl overflow-hidden border border-orange-500/30 shadow-[0_0_15px_-3px_rgba(249,115,22,0.4)]">
                        <img src={service.afterImage} alt="After" className="w-full h-full object-cover" />
                        <div className="absolute bottom-2 left-2 bg-orange-500 px-2 py-0.5 rounded text-[10px] font-black text-zinc-950 uppercase tracking-widest">After</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
                  <img src={service.image} alt={service.title} className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

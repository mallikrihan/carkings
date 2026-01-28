
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  History, 
  ArrowRight, 
  Star, 
  ChevronRight,
  Zap,
  Music,
  Maximize,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { SERVICES, REVIEWS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Sports Car" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-widest">
              <Zap size={14} />
              <span>Bangalore's #1 Customization Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight tracking-tighter text-white">
              PREMIUM CAR <span className="text-orange-500">CUSTOMIZATION</span> IN BANGALORE
            </h1>
            
            <p className="text-xl text-zinc-300 font-light max-w-xl leading-relaxed">
              Elevate your driving experience with world-class PPF, High-Fidelity Audio, Luxury Interiors, and Precision Detailing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/book" 
                className="px-10 py-4 bg-orange-500 text-zinc-950 font-bold rounded-full text-center hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 group flex items-center justify-center space-x-2"
              >
                <span>BOOK APPOINTMENT</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="px-10 py-4 border border-zinc-700 text-white font-bold rounded-full text-center hover:bg-zinc-800 transition-all flex items-center justify-center"
              >
                VIEW SERVICES
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-zinc-950" src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                ))}
                <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-[10px] font-bold">500+</div>
              </div>
              <div>
                <div className="flex text-orange-500 mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xs text-zinc-400">Trusted by over 500+ premium car owners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-heading font-black text-orange-500">15+</div>
              <div className="text-sm text-zinc-400 font-medium uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-heading font-black text-orange-500">500+</div>
              <div className="text-sm text-zinc-400 font-medium uppercase tracking-widest">Happy Customers</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-heading font-black text-orange-500">100%</div>
              <div className="text-sm text-zinc-400 font-medium uppercase tracking-widest">Genuine Products</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-heading font-black text-orange-500">5yr+</div>
              <div className="text-sm text-zinc-400 font-medium uppercase tracking-widest">Warranty Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-black">POPULAR SERVICES</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">From invisible protection to aesthetic upgrades, we provide end-to-end premium solutions for your car.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-orange-500 text-zinc-950 text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter italic">
                    {service.category}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h4 className="text-xl font-heading font-bold">{service.title}</h4>
                  <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to="/services" className="inline-flex items-center text-orange-500 text-sm font-bold group/link">
                    LEARN MORE <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="text-zinc-400 hover:text-white transition-colors underline decoration-orange-500 decoration-2 underline-offset-8">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest">Why Car Kings</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-black">PRECISION & PASSION IN EVERY DETAIL</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: 'Expert Technicians', desc: 'Our team consists of certified specialists with years of experience handling premium luxury vehicles.' },
                  { icon: Award, title: 'Authorized Center', desc: 'We only use authentic, brand-certified parts and materials from world-renowned automotive giants.' },
                  { icon: History, title: 'Timely Delivery', desc: 'We respect your time. Our workflow is optimized to deliver quality results within promised timelines.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-3 bg-zinc-800 rounded-2xl text-orange-500">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-full border border-zinc-800 absolute -inset-4 animate-spin-slow pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800" 
                alt="Workshop" 
                className="relative z-10 w-full aspect-square object-cover rounded-3xl shadow-2xl border-2 border-zinc-800"
              />
              <div className="absolute -bottom-8 -left-8 bg-orange-500 p-8 rounded-3xl z-20 shadow-xl hidden md:block">
                <div className="text-4xl font-heading font-black text-zinc-950">15+</div>
                <div className="text-xs font-black text-zinc-900/70 tracking-widest uppercase">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-black uppercase italic">THE KING'S WORD</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl relative">
                <div className="flex text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="text-zinc-300 italic mb-6 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center space-x-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-zinc-700" />
                  <div>
                    <h5 className="font-bold text-sm">{review.name}</h5>
                    <p className="text-xs text-zinc-500">{review.carModel}</p>
                  </div>
                </div>
                <div className="absolute top-8 right-8 text-zinc-800">
                  <CheckCircle2 size={40} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/reviews" className="bg-zinc-800 px-8 py-3 rounded-full font-bold text-sm hover:bg-zinc-700 transition-colors">
              READ ALL REVIEWS
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-500"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 text-zinc-950">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-heading font-black leading-none italic">GIVE YOUR CAR THE ROYAL TREATMENT.</h2>
            <p className="text-zinc-900/70 font-medium text-lg">Schedule a consultation at our BTM Layout studio today.</p>
          </div>
          <Link 
            to="/book" 
            className="whitespace-nowrap bg-zinc-950 text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl flex items-center space-x-3"
          >
            {/* Added missing Calendar icon import */}
            <Calendar />
            <span>BOOK NOW</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;


import React from 'react';
import { PACKAGES } from '../constants';
import { Check, Star, Zap, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PackagesPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <div className="bg-zinc-900 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 italic tracking-tighter uppercase">CUSTOM PACKAGES</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Curated bundles designed to provide maximum value and complete transformation for your vehicle.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-zinc-900 border ${pkg.isPopular ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-zinc-800'} rounded-3xl p-8 flex flex-col shadow-2xl transition-transform hover:-translate-y-2 duration-300`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-zinc-950 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-2 mb-8">
                <h3 className="text-2xl font-heading font-black italic uppercase">{pkg.name}</h3>
                <div className="flex items-end space-x-2">
                  <span className="text-4xl font-black text-white">{pkg.price}</span>
                  <span className="text-zinc-500 text-sm pb-1">/ Starting</span>
                </div>
                <div className="flex items-center space-x-2 text-zinc-400 text-xs">
                  <Clock size={14} />
                  <span>Estimated Time: {pkg.duration}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3 group">
                    <div className="mt-1 p-0.5 bg-zinc-800 rounded text-orange-500 group-hover:bg-orange-500 group-hover:text-zinc-950 transition-colors">
                      <Check size={14} />
                    </div>
                    <span className="text-zinc-300 text-sm leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/book" 
                className={`w-full py-4 rounded-xl font-black text-sm text-center transition-all ${
                  pkg.isPopular 
                    ? 'bg-orange-500 text-zinc-950 hover:bg-orange-600' 
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                BOOK THIS BUNDLE
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-32 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-black">PACKAGE COMPARISON</h2>
            <p className="text-zinc-500 mt-2">Find the right level of care for your car</p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-zinc-800">
            <table className="w-full text-left bg-zinc-900">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="p-6 text-sm font-bold text-zinc-500 uppercase tracking-widest">Core Services</th>
                  <th className="p-6 text-sm font-bold text-zinc-500 uppercase tracking-widest">Essential</th>
                  <th className="p-6 text-sm font-bold text-orange-500 uppercase tracking-widest">Premium</th>
                  <th className="p-6 text-sm font-bold text-zinc-500 uppercase tracking-widest">Kings Choice</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300 divide-y divide-zinc-800/50">
                {[
                  ['Exterior Decontamination', true, true, true],
                  ['Paint Correction', 'Single Step', 'Multi Step', 'Extreme Multi Step'],
                  ['Paint Protection', 'Premium Wax', '9H Ceramic (3yr)', 'TPU PPF + Coating'],
                  ['Interior Deep Cleaning', true, true, true],
                  ['Leather Conditioning', false, true, true],
                  ['Glass Coating', false, true, true],
                  ['Wheel Deep Clean', true, true, true],
                  ['Warranty Coverage', 'None', '3 Years', '5+ Years'],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="p-6 text-sm font-medium">{row[0]}</td>
                    <td className="p-6 text-sm">
                      {typeof row[1] === 'boolean' ? (row[1] ? <Check className="text-zinc-500" size={18} /> : '—') : row[1]}
                    </td>
                    <td className="p-6 text-sm font-bold text-orange-400">
                      {typeof row[2] === 'boolean' ? (row[2] ? <Check className="text-orange-500" size={18} /> : '—') : row[2]}
                    </td>
                    <td className="p-6 text-sm">
                      {typeof row[3] === 'boolean' ? (row[3] ? <Check className="text-zinc-500" size={18} /> : '—') : row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;

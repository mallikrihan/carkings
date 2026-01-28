
import React from 'react';
import { REVIEWS } from '../constants';
import { Star, CheckCircle2, MessageSquare, Quote } from 'lucide-react';

const ReviewsPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-24">
      <div className="bg-zinc-900 py-24 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-black italic tracking-tighter uppercase">CUSTOMER REVIEWS</h1>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex text-orange-500">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <span className="text-3xl font-black italic">4.9/5.0</span>
          </div>
          <p className="text-zinc-400">Based on 500+ verified owner experiences</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Summary Column */}
          <div className="space-y-8 lg:sticky lg:top-32 h-fit">
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 space-y-6">
              <h3 className="font-heading font-black text-xl italic uppercase underline decoration-orange-500 underline-offset-8">RATING SNAPSHOT</h3>
              <div className="space-y-4">
                {[5, 4, 3, 2, 1].map(stars => (
                  <div key={stars} className="flex items-center space-x-4">
                    <span className="text-sm font-bold w-4">{stars}</span>
                    <div className="flex-grow h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-orange-500" 
                        style={{ width: `${stars === 5 ? 90 : stars === 4 ? 8 : 2}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-orange-500 text-zinc-950 font-black py-4 rounded-xl hover:bg-orange-600 transition-colors uppercase tracking-widest text-sm">
                Write a Review
              </button>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-8">
            {REVIEWS.map(review => (
              <div key={review.id} className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 relative group transition-all hover:border-orange-500/20">
                <Quote className="absolute top-8 right-8 text-zinc-800 group-hover:text-zinc-700 transition-colors" size={60} />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center space-x-4">
                    <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full border-2 border-zinc-800" />
                    <div>
                      <h4 className="font-black text-xl italic">{review.name}</h4>
                      <p className="text-zinc-500 text-sm font-medium">{review.carModel}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 bg-zinc-800 w-fit px-3 py-1 rounded-full text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                    ))}
                  </div>

                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {review.comment}
                  </p>

                  <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
                    <div className="inline-flex items-center text-xs font-black uppercase tracking-widest text-zinc-500 space-x-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>Verified Service: <span className="text-white">{review.service}</span></span>
                    </div>
                    <span className="text-zinc-600 text-xs italic">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;

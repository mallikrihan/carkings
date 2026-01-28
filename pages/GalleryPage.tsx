
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Maximize2, X, Filter } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', ...new Set(GALLERY_ITEMS.map(item => item.category))];
  
  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-zinc-950 pb-24">
      {/* Header */}
      <div className="py-24 bg-zinc-900/50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-black italic tracking-tighter">PROJECT GALLERY</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Witness the transformation. A collection of our finest work from high-end detailing to complete custom builds.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-orange-500 text-zinc-950 shadow-lg shadow-orange-500/20' 
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-3xl overflow-hidden border border-zinc-800 aspect-[4/3] cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <div className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-2">{item.category}</div>
                <h4 className="text-white font-bold text-xl">{item.title}</h4>
                <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md p-3 rounded-full">
                  <Maximize2 size={20} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors">
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded" 
            className="max-w-full max-h-full rounded-2xl shadow-2xl animate-in zoom-in-95 duration-500"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

import React, { useState } from 'react';
import { galleryItems } from '../data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = galleryItems.filter(item => 
    filter === 'all' ? true : item.type === filter
  );

  return (
    <div className="pt-28 pb-20 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight">
            Visual Experience
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our state-of-the-art facilities, pure processes, and premium product range.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 sm:gap-6 mb-12 flex-wrap">
          {['all', 'image', 'video'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-8 py-2.5 rounded-full font-bold transition-all duration-300 capitalize tracking-wide ${
                filter === type 
                  ? 'bg-secondary text-primary shadow-lg scale-105' 
                  : 'bg-accent text-primary hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {type}'s
            </button>
          ))}
        </div>

        {/* Masonry Layout Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer break-inside-avoid bg-gray-100"
            >
              {/* Media Content - Full Length/Auto Height */}
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              ) : (
                <div className="relative w-full h-auto">
                  {/* For the grid view, we hide native controls to keep it looking clean */}
                  <video 
                    src={item.src} 
                    className="w-full h-auto object-cover"
                  />
                  {/* Floating Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4l12 6-12 6V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Elegant Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Title Text that slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal Overlay */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedItem(null)} // Close when clicking the background
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/70 hover:text-secondary transition-colors z-[101]"
            onClick={() => setSelectedItem(null)}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content container */}
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the actual image/video
          >
            {selectedItem.type === 'image' ? (
              <img 
                src={selectedItem.src} 
                alt={selectedItem.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <video 
                src={selectedItem.src} 
                controls 
                autoPlay 
                className="w-full max-h-[80vh] rounded-lg shadow-2xl bg-black"
              />
            )}
            
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-6 text-center">
              {selectedItem.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
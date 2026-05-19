import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Play, Camera, Film, Image as ImageIcon } from 'lucide-react';

interface MediaAsset {
  type: 'image' | 'video';
  path: string;
  caption: string;
}

interface GalleryItem {
  id: number;
  title: string;
  tag: string;
  coverImage: string;
  description: string;
  assets: MediaAsset[];
}

export default function TestimonialsPage() {
  const [galleries, setGalleries] = useState<GalleryItem[]>([]);
  const [activeGallery, setActiveGallery] = useState<GalleryItem | null>(null);
  const [activeAssetIndex, setActiveAssetIndex] = useState<number>(0);

  useEffect(() => {
    fetch('/testimonials.json')
      .then((res) => res.json())
      .then((data) => setGalleries(data))
      .catch((err) => console.error('Error loading gallery data:', err));
  }, []);

  const openGallery = (gallery: GalleryItem) => {
    setActiveGallery(gallery);
    setActiveAssetIndex(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
  };

  const nextAsset = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!activeGallery) return;
    setActiveAssetIndex((prev) => (prev + 1) % activeGallery.assets.length);
  };

  const prevAsset = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!activeGallery) return;
    setActiveAssetIndex((prev) => (prev - 1 + activeGallery.assets.length) % activeGallery.assets.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeGallery) return;
      if (e.key === 'ArrowRight') nextAsset();
      if (e.key === 'ArrowLeft') prevAsset();
      if (e.key === 'Escape') closeGallery();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGallery]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto relative z-10"
    >
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
          Success & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">Experience Gallery</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Explore the real-world experiences, campus moments, and clinical internship highlights of our psychology graduates.
        </p>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleries.map((gallery) => (
          <motion.div
            key={gallery.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            onClick={() => openGallery(gallery)}
            className="bg-white border border-gray-100 rounded-[32px] overflow-hidden flex flex-col cursor-pointer hover:-translate-y-2 hover:border-purple-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-500 group relative"
          >
            {/* Top Cover Image */}
            <div className="h-56 overflow-hidden relative">
              <img
                src={gallery.coverImage}
                alt={gallery.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              {/* Media indicator badge */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white rounded-full p-2.5 flex items-center justify-center">
                {gallery.assets.some((a) => a.type === 'video') ? (
                  <Film className="w-4 h-4" />
                ) : (
                  <Camera className="w-4 h-4" />
                )}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-8 flex flex-col flex-grow">
              {/* Tag Badge */}
              <div className="flex items-center gap-4 text-[10px] font-bold text-purple-500 uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1.5 bg-purple-50 px-2.5 py-1 rounded-md">
                  {gallery.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-purple-600 transition-colors">
                {gallery.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                {gallery.description}
              </p>

              {/* Footer row */}
              <div className="flex items-center justify-end pt-6 border-t border-gray-50 mt-auto">
                <div className="text-sm font-bold text-purple-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Gallery <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Lightbox / Modal */}
      <AnimatePresence>
        {activeGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
            onClick={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white/95 backdrop-blur-2xl border border-white/10 rounded-[32px] overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeGallery}
                className="absolute top-6 right-6 z-55 w-10 h-10 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Info */}
              <div className="p-6 md:p-8 border-b border-gray-100/50 bg-gray-50/50">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {activeGallery.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {activeGallery.title}
                </h3>
              </div>

              {/* Main Media Display Area */}
              <div className="flex-grow flex flex-col items-center justify-center p-6 md:p-10 bg-gray-900 relative group/media overflow-hidden min-h-[350px]">
                {/* Navigation: Prev */}
                <button
                  onClick={prevAsset}
                  className="absolute left-4 md:left-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 opacity-0 group-hover/media:opacity-100"
                  aria-label="Previous asset"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Media Container with animation */}
                <div className="w-full h-full max-h-[50vh] md:max-h-[55vh] flex items-center justify-center relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeAssetIndex}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {activeGallery.assets[activeAssetIndex].type === 'video' ? (
                        <div className="relative w-full max-w-2xl h-full flex items-center justify-center rounded-2xl overflow-hidden bg-black shadow-lg">
                          <video
                            src={activeGallery.assets[activeAssetIndex].path}
                            controls
                            autoPlay
                            className="max-h-[50vh] md:max-h-[55vh] max-w-full object-contain"
                          />
                        </div>
                      ) : (
                        <img
                          src={activeGallery.assets[activeAssetIndex].path}
                          alt={activeGallery.assets[activeAssetIndex].caption}
                          className="max-h-[50vh] md:max-h-[55vh] max-w-full object-contain rounded-2xl shadow-lg border border-white/5"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation: Next */}
                <button
                  onClick={nextAsset}
                  className="absolute right-4 md:right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 opacity-0 group-hover/media:opacity-100"
                  aria-label="Next asset"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption & Thumbnails Strip */}
              <div className="p-6 md:p-8 bg-white border-t border-gray-100">
                <p className="text-gray-700 text-center font-semibold text-sm md:text-base leading-relaxed mb-6 px-4">
                  {activeGallery.assets[activeAssetIndex].caption}
                </p>

                {/* Thumbnails list */}
                <div className="flex justify-center items-center gap-3 overflow-x-auto py-1 hide-scrollbar">
                  {activeGallery.assets.map((asset, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveAssetIndex(index)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 border-2 ${
                        index === activeAssetIndex
                          ? 'border-purple-600 scale-105 shadow-md shadow-purple-500/10'
                          : 'border-transparent hover:border-purple-300 opacity-60 hover:opacity-90'
                      }`}
                    >
                      {asset.type === 'video' ? (
                        <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white relative">
                          <Film className="w-5 h-5 opacity-70" />
                          <div className="absolute inset-0 bg-black/20" />
                        </div>
                      ) : (
                        <img
                          src={asset.path}
                          alt="thumbnail"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

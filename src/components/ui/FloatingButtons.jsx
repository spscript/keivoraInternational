import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || ""; 

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button - Strictly fixed to Bottom Left */}
      {whatsappNumber && (
        <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50">
          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            // Increased container size slightly for better visibility
            className="group flex items-center justify-center md:justify-start h-14 w-14 md:h-16 md:min-w-[4rem] bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1ebd5a] hover:shadow-xl transition-all duration-300 px-0 md:px-4"
            aria-label="Chat on WhatsApp"
          >
            {/* New, clean, high-fidelity official WhatsApp SVG path */}
            <svg 
              className="w-8 h-8 md:w-9 md:h-9 shrink-0" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-3.859c1.64.973 3.244 1.488 4.882 1.489 5.432 0 9.85-4.388 9.853-9.777.002-2.611-1.015-5.066-2.866-6.92-1.85-1.854-4.307-2.876-6.924-2.877-5.431 0-9.85 4.388-9.854 9.778 0 1.714.465 3.39 1.346 4.867l-.988 3.606 3.705-.966zm10.173-6.91c-.304-.152-1.799-.882-2.077-.983-.278-.101-.48-.152-.682.152-.202.304-.783.983-.96 1.185-.177.202-.354.228-.658.076-.304-.152-1.284-.473-2.447-1.507-.905-.804-1.516-1.8-1.693-2.103-.177-.304-.019-.468.133-.619.136-.136.304-.354.455-.531.152-.177.202-.304.304-.506.101-.202.051-.38-.025-.531-.076-.152-.682-1.637-.934-2.245-.246-.59-.496-.51-.682-.52l-.582-.01c-.202 0-.531.076-.81.38-.278.304-1.062 1.037-1.062 2.53 0 1.493 1.088 2.934 1.24 3.137.152.202 2.14 3.257 5.184 4.564.723.311 1.289.497 1.73.637.728.23 1.391.197 1.914.12.584-.087 1.799-.733 2.052-1.442.253-.708.253-1.315.177-1.442-.076-.126-.278-.202-.582-.354z"/>
            </svg>
            
            <span className="hidden md:block max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-3 transition-all duration-500 ease-in-out font-bold tracking-wide text-base">
              Chat with us
            </span>
          </a>
        </div>
      )}

      {/* Scroll Up Button - Strictly fixed to Bottom Right */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
          >
            <button
              onClick={scrollToTop}
              // Kept sizes consistent with the slightly larger layout
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-primary text-white rounded-full shadow-lg hover:bg-secondary transition-colors"
              aria-label="Scroll to top"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
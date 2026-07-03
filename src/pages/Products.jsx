import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { productsList } from '../data/products';
import { usePDF } from '@react-pdf/renderer';
import CatalogPDF from '../components/pdf/CatalogPDF';

// Process Image
import ProcessImage from "../assets/Process.PNG";

// Imports for "Why Us" badges
import BadgeNatural from "../assets/badges/100-natural.png";
import BadgePreservatives from "../assets/badges/no-preservatives.png";
import BadgeLabTested from "../assets/badges/lab-tested.png";
import BadgeHandmade from "../assets/badges/handmade.png";
import BadgeA2Ghee from "../assets/badges/a2-ghee.png";
import BadgeGranular from "../assets/badges/granular.png";

const processSteps = [
  { 
    id: "01", 
    title: "Milk from Healthy Gir Cows", 
    desc: "Fresh A2 milk collected from free-grazing purebred Gir cows on open natural pastures. Cruelty-free. No hormones. No stress." 
  },
  { 
    id: "02", 
    title: "Gentle Heating of Milk", 
    desc: "Raw milk is carefully heated in traditional vessels at the right temperature — preserving all natural enzymes and living nutrients." 
  },
  { 
    id: "03", 
    title: "Converting to Curd", 
    desc: "Warm milk is cultured with a natural starter and fermented overnight into thick, rich, aromatic curd — the heart of the Bilona process." 
  },
  { 
    id: "04", 
    title: "Hand-Churning — The Bilona", 
    subpoints: [
      { label: "4A", text: "Fresh curd is traditionally churned bi-directionally using a wooden Bilona churner, preserving nutrients through the slow artisanal process." },
      { label: "4B", text: "This careful churning separates pure white Makkhan (butter) — the essential stage before transforming it into golden ghee." }
    ]
  },
  { 
    id: "05", 
    title: "Slow Flame — Pure Golden Ghee", 
    desc: "Makkhan is heated on a slow, gentle flame until water evaporates and pure aromatic ghee forms — granular, golden, and deeply nourishing." 
  },
];

const comparisonData = [
  { feature: "Milk Source", a2: "Purebred Gir Cow", desi: "Indigenous Desi Cow", buffalo: "Buffalo" },
  { feature: "Method", a2: "Vedic Bilona", desi: "Vedic Bilona", buffalo: "Traditional" },
  { feature: "Colour", a2: "Deep Golden", desi: "Light Golden", buffalo: "Cream White" },
  { feature: "Flavour", a2: "Rich, Nutty", desi: "Mild, Sweet", buffalo: "Rich, Creamy" },
  { feature: "A2 Protein", a2: "✓ Yes", desi: "✓ Yes", buffalo: "— N/A" },
  { feature: "Best for Babies", a2: "✓ Ideal", desi: "✓ Ideal", buffalo: "Moderate" },
  { feature: "For Ayurveda", a2: "✓ Recommended", desi: "✓ Good", buffalo: "—" },
  { feature: "For Sweets & Biryani", a2: "Good", desi: "Good", buffalo: "Best Choice" },
  { feature: "Fat Content", a2: "Medium", desi: "Medium", buffalo: "High" },
  { feature: "Shelf Life", a2: "12-months\n(use within 3 months of opening)", desi: "12-months\n(use within 3 months of opening)", buffalo: "12-months\n(use within 3 months of opening)" },
];

const whyUsFeatures = [
  { id: 1, title: "100% Natural", img: BadgeNatural }, 
  { id: 2, title: "No Preservatives", img: BadgePreservatives },
  { id: 3, title: "Lab Tested", img: BadgeLabTested },
  { id: 4, title: "Handmade Product", img: BadgeHandmade },
  { id: 5, title: "A2 Ghee", img: BadgeA2Ghee },
  { id: 6, title: "Granular Texture", img: BadgeGranular },
];

const getTheme = (id) => {
  switch(id) {
    case 1: return { 
      mainText: 'text-gir-main', mainBg: 'bg-gir-main', mainBorder: 'border-gir-main',
      cardBg: 'bg-gir-bg', lightBorder: 'border-gir-main/20', lightBg: 'bg-gir-main/10'
    }; 
    case 2: return { 
      mainText: 'text-desi-main', mainBg: 'bg-desi-main', mainBorder: 'border-desi-main',
      cardBg: 'bg-desi-bg', lightBorder: 'border-desi-main/20', lightBg: 'bg-desi-main/10'
    }; 
    case 3: return { 
      mainText: 'text-buffalo-main', mainBg: 'bg-buffalo-main', mainBorder: 'border-buffalo-main',
      cardBg: 'bg-buffalo-bg', lightBorder: 'border-buffalo-main/20', lightBg: 'bg-buffalo-main/10'
    }; 
    default: return { 
      mainText: 'text-primary', mainBg: 'bg-primary', mainBorder: 'border-primary',
      cardBg: 'bg-surface', lightBorder: 'border-primary/20', lightBg: 'bg-primary/10'
    };
  }
};

const getProductTag = (id, isDarkBg = false) => {
  if (id === 1) return { 
    label: '👑 PREMIUM', 
    style: isDarkBg ? 'text-[#D4AF37] bg-white border border-[#D4AF37]/50 shadow-md' : 'text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30' 
  };
  if (id === 2) return { 
    label: '🥈 BESTSELLER', 
    style: isDarkBg ? 'text-[#71717A] bg-white border border-[#71717A]/50 shadow-md' : 'text-[#71717A] bg-[#71717A]/10 border border-[#71717A]/30' 
  };
  if (id === 3) return { 
    label: '👨‍🍳 CHEF\'S CHOICE', 
    style: isDarkBg ? 'text-[#8B4513] bg-white border border-[#8B4513]/50 shadow-md' : 'text-[#8B4513] bg-[#8B4513]/10 border border-[#8B4513]/30' 
  };
  return { label: '', style: '' };
};

const getPackageTooltip = (size) => {
  const s = size.toLowerCase();
  if (s.includes('15')) return '15 KG Restaurant / Bulk Pack';
  if (s.includes('500')) return '500gm Retail / Gift Pack';
  if (s.includes('5')) return '5 KG Professional Kitchen Pack';
  if (s.includes('1')) return '1kg Family Value Pack';
  return size; 
};

const PackSizeBadge = ({ size, theme }) => (
  <div className="relative group inline-block">
    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${theme.mainBg} text-white shadow-sm block transition-transform group-hover:scale-105`}>
      {size}
    </span>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-max bg-gray-900 text-white text-[11px] px-3 py-2 rounded shadow-xl z-50 whitespace-nowrap">
      {getPackageTooltip(size)}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
    </div>
  </div>
);

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [pdfInstance] = usePDF({ document: <CatalogPDF products={productsList} /> });
  
  const portfolioRef = useRef(null);
  const filterCategories = ["All", "A2 Gir Cow", "Desi Cow", "Buffalo"];
  
  const getCategory = (id) => {
    if (id === 1) return "A2 Gir Cow";
    if (id === 2) return "Desi Cow";
    if (id === 3) return "Buffalo";
    return "Other"; 
  };

  const filteredProducts = productsList.filter(product => 
    activeFilter === 'All' ? true : getCategory(product.id) === activeFilter
  );

  const getFilterActiveClass = (cat) => {
    switch (cat) {
      case "A2 Gir Cow": return 'bg-gir-main text-white border-gir-main shadow-md';
      case "Desi Cow": return 'bg-desi-main text-white border-desi-main shadow-md';
      case "Buffalo": return 'bg-buffalo-main text-white border-buffalo-main shadow-md';
      default: return 'bg-primary text-white border-primary shadow-md'; 
    }
  };

  const handleProductClick = (id) => {
    const category = getCategory(id);
    setActiveFilter(category);
    
    setTimeout(() => {
      portfolioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="w-full min-h-screen bg-surface pt-24 pb-0 font-sans text-text-main">
      <Helmet>
        <title>Premium Export Ghee Products | ARAVVAT INTERNATIONAL</title>
        <meta name="description" content="Explore our verified portfolio of export-grade A2 Gir Cow Ghee, Desi Cow Ghee, and Buffalo Ghee." />
      </Helmet>

      {/* Global Catalog Download Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-primary rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="text-left mb-6 md:mb-0 z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Get the 2026 Ghee Export Catalog</h3>
            <p className="text-white/80 max-w-xl">Download our comprehensive digital brochure featuring full specifications, packaging options, and compliance data for our premium ghee collection.</p>
          </div>
          
          <div className="z-10 w-full md:w-auto flex justify-center">
            {pdfInstance.error ? (
              <div className="text-white font-bold bg-red-500/80 px-4 py-2 rounded text-sm">PDF Error</div>
            ) : (
              <a
                href={pdfInstance.url}
                download="ARAVVAT_Ghee_Export_Catalog_2026.pdf"
                className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg flex items-center gap-3 w-full md:w-auto justify-center ${
                  pdfInstance.loading || !pdfInstance.url
                    ? 'bg-secondary/50 text-primary cursor-not-allowed'
                    : 'bg-secondary text-primary hover:bg-white hover:text-primary'
                }`}
              >
                <svg className={`w-5 h-5 ${pdfInstance.loading ? 'animate-bounce' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {pdfInstance.loading ? 'Generating PDF...' : 'Download PDF'}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 1: OUR GHEE COLLECTION (Header & Quick View) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center border-t border-gray-200 pt-16">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
          Our Ghee <span className="text-secondary">Collection</span>
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 hidden lg:block">
        <div className="grid grid-cols-3 rounded-xl overflow-visible shadow-lg border border-gray-200">
          {productsList.map((product) => {
            const theme = getTheme(product.id);
            const tag = getProductTag(product.id, true); 
            
            return (
              <div key={`table-${product.id}`} className={`flex flex-col ${theme.cardBg} border-r border-white/40 last:border-0`}>
                <div className={`p-8 text-center ${theme.mainBg} text-white relative`}>
                  <div className={`inline-block px-4 py-1 text-xs font-bold tracking-widest rounded uppercase mb-4 ${tag.style}`}>
                    {tag.label}
                  </div>
                  <h2 
                    onClick={() => handleProductClick(product.id)}
                    className="font-serif text-3xl font-bold tracking-wide cursor-pointer hover:underline transition-all duration-300 hover:text-secondary"
                    title={`Click to view ${product.title} details`}
                  >
                    {product.title}
                  </h2>
                  <p className="text-[10px] uppercase tracking-widest mt-2 opacity-90 leading-relaxed px-4">
                    {product.subtitle}
                  </p>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h4 className={`text-xs font-bold uppercase tracking-widest ${theme.mainText} mb-4`}>Key Benefits</h4>
                  <ul className="flex-grow space-y-4 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-text-main leading-relaxed font-medium">
                        <div className={`w-2 h-2 rounded-full ${theme.mainBg} mt-1.5 shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <h4 className={`text-xs font-bold uppercase tracking-widest ${theme.mainText} mb-3`}>Pack Sizes</h4>
                    <div className="flex gap-2 flex-wrap pb-2">
                      {product.keyProducts.map((size, idx) => (
                        <PackSizeBadge key={idx} size={size} theme={theme} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: DETAILED PRODUCTS PORTFOLIO */}
      <div ref={portfolioRef} className="scroll-mt-32">
        <div className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md py-4 mb-16 border-b border-t border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto hide-scrollbar gap-3 pb-2 justify-center">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                  activeFilter === cat 
                    ? getFilterActiveClass(cat) 
                    : 'bg-white text-text-main border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 md:gap-24 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              const isEven = index % 2 === 0;
              const theme = getTheme(product.id);
              const tag = getProductTag(product.id, false); 

              return (
                <motion.div 
                  key={`detail-${product.id}`} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-start ${theme.cardBg} p-8 md:p-12 rounded-2xl shadow-sm border ${theme.lightBorder}`}
                >
                  <div className="w-full md:w-5/12 group shrink-0 relative">
                    <div className={`absolute inset-0 ${theme.lightBg} rounded-xl transform -rotate-2 scale-105 transition-transform group-hover:rotate-0`}></div>
                    <div className="relative overflow-hidden rounded-xl shadow-sm">
                      <img src={product.image} alt={product.title} className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl" />
                    </div>
                  </div>

                  <div className="w-full md:w-7/12 flex flex-col">
                    <div className="mb-4">
                      <span className={`inline-block px-4 py-1.5 text-sm md:text-base font-bold tracking-wider rounded mb-4 shadow-sm ${tag.style}`}>
                        {tag.label}
                      </span>
                      <h2 className={`text-3xl md:text-4xl font-serif font-bold ${theme.mainText} mb-2`}>{product.title}</h2>
                      <p className="text-sm uppercase tracking-widest text-text-main/70">{product.subtitle}</p>
                    </div>

                    <p className="text-lg text-text-main mb-8 leading-relaxed font-medium">
                      {product.description}
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className={`${theme.mainText} font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2`}>Health Benefits</h4>
                        <ul className="space-y-3 text-sm pl-1">
                          {product.healthBenefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-text-main font-medium leading-relaxed">
                              <svg className={`w-4 h-4 mt-0.5 shrink-0 ${theme.mainText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className={`bg-white/60 border border-white/50 p-4 rounded-xl mt-8`}>
                      <div className="flex items-center gap-4">
                        <span className={`font-bold ${theme.mainText} text-sm shrink-0`}>Pack Sizes:</span>
                        <div className="flex flex-wrap gap-2">
                          {product.keyProducts.map((size, idx) => (
                            <PackSizeBadge key={idx} size={size} theme={theme} />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* SECTION 3: WHICH GHEE IS RIGHT FOR YOU? */}
      <div className="bg-accent py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Which Ghee Is <span className="italic text-secondary">Right for You?</span></h2>
          </div>

          <div className="overflow-x-auto hide-scrollbar pb-8">
            <table className="w-full text-center min-w-[800px] border-collapse bg-white rounded-2xl shadow-xl overflow-hidden">
              <thead>
                <tr>
                  <th className="w-1/4 py-8 bg-secondary text-white border-b border-gray-100 border-r">
                    <span className="font-serif text-3xl md:text-4xl block font-extrabold px-4">Comparison Parameters</span>
                  </th>
                  <th className="w-1/4 py-8 bg-gir-main text-white border-r border-white/20">
                    <span className="inline-block text-xs font-bold tracking-wider mb-2 uppercase px-3 py-1 rounded text-[#D4AF37] bg-white border border-[#D4AF37]/50 shadow-sm">👑 Premium</span>
                    <span className="font-serif text-2xl md:text-3xl font-extrabold block mt-1">A2 Gir Cow</span>
                  </th>
                  <th className="w-1/4 py-8 bg-desi-main text-white border-r border-white/20">
                    <span className="inline-block text-xs font-bold tracking-wider mb-2 uppercase px-3 py-1 rounded text-[#71717A] bg-white border border-[#71717A]/50 shadow-sm">🥈 Bestseller</span>
                    <span className="font-serif text-2xl md:text-3xl font-extrabold block mt-1">Desi Cow</span>
                  </th>
                  <th className="w-1/4 py-8 bg-buffalo-main text-white">
                    <span className="inline-block text-xs font-bold tracking-wider mb-2 uppercase px-3 py-1 rounded text-[#8B4513] bg-white border border-[#8B4513]/50 shadow-sm">👨‍🍳 Chef's Choice</span>
                    <span className="font-serif text-2xl md:text-3xl font-extrabold block mt-1">Buffalo</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => {
                  return (
                    <tr key={idx} className="group border-b border-gray-200 last:border-0">
                      <td className="text-left px-8 py-5 text-sm md:text-base font-extrabold text-[#000080] bg-yellow-50 border-r border-gray-200">{row.feature}</td>
                      <td className="px-4 py-5 text-sm md:text-base text-gray-900 font-bold bg-gir-bg border-r border-gray-200">
                        <span className={`whitespace-pre-line ${row.a2.includes('✓') ? 'text-gir-main font-extrabold' : ''}`}>{row.a2}</span>
                      </td>
                      <td className="px-4 py-5 text-sm md:text-base text-gray-900 font-bold bg-desi-bg border-r border-gray-200">
                        <span className={`whitespace-pre-line ${row.desi.includes('✓') ? 'text-desi-main font-extrabold' : ''}`}>{row.desi}</span>
                      </td>
                      <td className="px-4 py-5 text-sm md:text-base text-gray-900 font-bold bg-buffalo-bg">
                        <span className={`whitespace-pre-line ${row.buffalo.includes('✓') ? 'text-buffalo-main font-extrabold' : ''}`}>{row.buffalo}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 4: SACRED BILONA PROCESS */}
      <div className="bg-surface pb-24 border-t border-gray-200 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <p className="text-secondary font-bold tracking-widest text-sm uppercase mb-3 text-center lg:text-left">The Ancient Art</p>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 text-center lg:text-left">Our Sacred <span className="italic text-secondary">Bilona</span> Process</h2>
            
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-12">
              <img src={ProcessImage} alt="The Bilona Process Steps" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-3/5">
              <div className="space-y-0">
                {processSteps.map((step, index) => (
                  <div key={step.id} className="flex gap-6 pb-8 relative">
                    {index !== processSteps.length - 1 && (
                      <div className="absolute left-4 top-10 bottom-0 w-px bg-gray-200"></div>
                    )}
                    <div className="flex-shrink-0 z-10 bg-surface">
                      <div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center text-secondary font-serif text-sm">
                        {step.id}
                      </div>
                    </div>
                    
                    <div className="pt-1 w-full border-b border-gray-100 last:border-0 pb-6">
                      <h4 className="text-lg font-serif text-primary mb-2">{step.title}</h4>
                      
                      {step.desc && (
                        <p className="text-sm text-text-main leading-relaxed">{step.desc}</p>
                      )}

                      {step.subpoints && (
                        <div className="space-y-3 mt-2">
                          {step.subpoints.map((sub, idx) => (
                            <div key={idx} className="flex gap-2">
                              <span className="text-sm font-bold text-secondary shrink-0">{sub.label}:</span>
                              <p className="text-sm text-text-main leading-relaxed">{sub.text}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-2/5 sticky top-32">
              <div className="bg-primary text-white p-10 rounded-lg shadow-xl border border-primary/20">
                <h3 className="text-2xl md:text-3xl font-serif leading-snug mb-6">
                  25–30 litres of A2 milk become <span className="text-secondary italic">one litre</span> of pure Aravvat Ghee.
                </h3>
                <p className="text-sm text-white/80 mb-10 leading-relaxed">
                  No cream separator. No shortcuts. No compromise. The Bilona method is 5,000 years old for a reason — it is the only way to preserve A2 protein, natural vitamins, and the true soul of ghee.
                </p>
                <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-t border-white/20 pt-8">
                  <div className="text-center">
                    <p className="text-2xl font-serif text-secondary mb-1">100%</p>
                    <p className="text-[10px] tracking-widest uppercase text-white/60">Pure & Natural</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-serif text-secondary mb-1">12+</p>
                    <p className="text-[10px] tracking-widest uppercase text-white/60">Months Shelf Life</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-serif text-secondary mb-1">FSSAI</p>
                    <p className="text-[10px] tracking-widest uppercase text-white/60">Lab Certified</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-serif text-secondary mb-1">0</p>
                    <p className="text-[10px] tracking-widest uppercase text-white/60">Preservatives</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* SECTION 5: WHY US */}
      <div className="bg-white pt-24 pb-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-16">
            Why <span className="italic text-secondary">Us...</span>
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 z-10 relative">
            {whyUsFeatures.map(feature => (
              <div key={feature.id} className="flex flex-col items-center group cursor-default">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full transition-transform duration-300 group-hover:scale-110 mb-4 bg-white flex items-center justify-center">
                  <img 
                    src={feature.img} 
                    alt={feature.title} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="text-xs text-gray-400">Missing Image<br/>${feature.title}</span>`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
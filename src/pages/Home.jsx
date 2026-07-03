import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { LineChart, ShieldCheck, FileSearch, FileCheck } from 'lucide-react';

// Added new image:
import GirImage from "../assets/Gir.webp";
// Added product images based on your assets folder
import DesiCowImg from "../assets/Cow.jpg";
import BuffaloImg from "../assets/Black_Buffalo.jpg";

// --- Custom Animated Counter Component ---
const Counter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Home() {
  // --- Animations ---
  const heroVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const marqueeVariants = {
    animate: {
      x: [0, -1800], 
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } },
    },
  };

 // --- ARAVVAT Client Data ---
  const valuePropositions = [
    "Verified Supplier Network",
    "Zero Documentation Errors",
    "100% Natural & Pure",
    "FSSAI Certified & Lab Tested",
    "End-to-End Multimodal Logistics",
    "Export Readiness & Excellence"
  ];
  
  const featuredProducts = [
    { 
      title: "A2 Gir Cow Ghee", 
      desc: "Crafted using the ancient Vedic Bilona method from the milk of free-grazing purebred Gir cows.", 
      image: GirImage,
      bgClass: "bg-[var(--color-gir-bg)]",
      titleClass: "text-[var(--color-gir-main)]"
    },
    { 
      title: "Desi Cow Ghee", 
      desc: "A farm-fresh, light golden bestseller naturally boosting immunity and bone health for everyday purity.", 
      image: DesiCowImg,
      bgClass: "bg-[var(--color-desi-bg)]",
      titleClass: "text-[var(--color-desi-main)]"
    },
    { 
      title: "Buffalo Ghee", 
      desc: "A rich, creamy, full-bodied cream-white ghee perfectly suited for traditional sweets and culinary professionals.", 
      image: BuffaloImg,
      bgClass: "bg-[var(--color-buffalo-bg)]",
      titleClass: "text-[var(--color-buffalo-main)]"
    }
  ];

const featuredServices = [
  { 
    title: "Data-Driven Intelligence & Trade Analytics* (For Exporters)", 
    desc: "Provides real-time insights on global demand trends, competitor pricing, and top buying countries for your product. It helps exporters identify the most profitable markets and time their shipments strategically. Most useful when entering a new market or deciding which country to target next for expansion.", 
    icon: <LineChart size={40} className="text-secondary" /> 
  },
  { 
    title: "Strategic Sourcing & Multi-Tier Supplier Audit* (For Importers)", 
    desc: "Helps importers discover, evaluate, and verify suppliers beyond just the first tier — including sub-suppliers and raw material sources. It reduces supply chain risks like fraud, quality failures, or compliance gaps before they become costly problems. Critical when onboarding a new supplier, diversifying away from a single source, or preparing for buyer audits.", 
    icon: <ShieldCheck size={40} className="text-secondary" /> 
  },
  { 
    title: "Market Research & Trade Intelligence Reports* (For Exporters)", 
    desc: "Delivers in-depth reports on target market regulations, buyer behavior, tariff structures, and competitor landscape. It helps exporters make confident, evidence-backed decisions instead of relying on guesswork. Especially valuable before launching into a new geography or pitching to international buyers and distributors.", 
    icon: <FileSearch size={40} className="text-secondary" /> 
  }
];
  
  return (
    <div className="w-full min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[55vh] flex items-center justify-center pt-28 pb-8 overflow-hidden bg-accent">
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.3 } } }} className="max-w-4xl text-left">
            
            <motion.h1 
              animate={{ x: ["0%", "2%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-extrabold text-blue-700 tracking-tight mb-6 leading-tight drop-shadow-sm"
            >
              Global Trade Simplified <br/>
              <span className="text-3xl md:text-5xl text-secondary block mt-4">
                by Aravvat International <br className="md:hidden" /> Private Limited
              </span>
            </motion.h1>
            
            <motion.p variants={heroVariants} className="text-lg md:text-xl text-blue-900 mb-8 font-medium leading-relaxed max-w-2xl">
              Your trusted partner for verified sourcing and seamless exports. We connect the finest, purest traditional Indian Ghee to the world with integrity and zero drama.
            </motion.p>
            
            <motion.div variants={heroVariants} className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact" className="bg-secondary text-primary px-8 py-4 rounded-md text-lg font-bold hover:bg-secondary/90 transition-all duration-300 shadow-lg shadow-secondary/40 hover:-translate-y-1">
                Talk to a Trade Specialist
              </Link>
              <Link to="/products" className="bg-white border-2 border-primary/10 text-primary px-8 py-4 rounded-md text-lg font-bold hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm">
                Explore Products
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 2. SENTENCE-BASED MARQUEE */}
      <section className="bg-surface py-3 border-b border-primary/10 overflow-hidden flex items-center">
        <div className="flex whitespace-nowrap" style={{ width: '300%' }}>
          <motion.div className="flex gap-12 px-8 items-center" variants={marqueeVariants} animate="animate">
            {[...valuePropositions, ...valuePropositions].map((prop, idx) => (
              <div key={idx} className="text-primary/80 font-bold text-lg md:text-xl tracking-wide uppercase flex items-center gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                {prop}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT US TEASER SECTION (Updated with detailed "Who We Are" content) */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <h4 className="text-secondary font-bold uppercase tracking-widest mb-3 text-sm">Who We Are</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 tracking-tight leading-tight max-w-4xl">
                Your trusted Indian sourcing, export, and trade intelligence partner for global markets.
              </h2>
              
              <div className="space-y-6 text-lg text-text-main leading-relaxed mb-10 max-w-5xl">
                <p>
                  ARAVVAT International Private Limited is an India-based sourcing, export, and trade intelligence company helping global buyers source trusted Indian products while supporting new exporters in understanding and entering international markets with confidence.
                </p>
                <p>
                  We work across food, dairy, FMCG, agri, organic, and lifestyle categories, offering product sourcing, export coordination, market research, trade intelligence reports, product-market validation, global demand analysis, and export procedure and documentation guidance.
                </p>
                <p>
                  Our mission is to make Indian sourcing and exporting more reliable, transparent, data-driven, and professional for global markets.
                </p>
                <p className="font-semibold text-primary border-l-4 border-secondary pl-4 py-1">
                  At ARAVVAT, we do not just move products across borders — we help buyers source with confidence and help exporters grow with clarity, data, and direction.
                </p>
              </div>
              
              <Link to="/about" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-colors shadow-lg hover:shadow-xl group">
                Read Our Full Story
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. GLOBAL IMPACT STATS */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <motion.div variants={itemVariants} className="aspect-square w-full max-w-[240px] mx-auto rounded-full bg-blue-50/80 flex flex-col items-center justify-center p-6 shadow-md shadow-blue-100/50 border border-blue-100/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-4xl md:text-5xl font-extrabold text-secondary mb-3">
                <Counter to={3} duration={3} />
              </h4>
              <p className="text-primary font-bold tracking-wide uppercase text-xs md:text-sm">Premium Ghee Varieties</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="aspect-square w-full max-w-[240px] mx-auto rounded-full bg-blue-50/80 flex flex-col items-center justify-center p-6 shadow-md shadow-blue-100/50 border border-blue-100/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-4xl md:text-5xl font-extrabold text-secondary mb-3">
                <Counter to={4} duration={3} />
              </h4>
              <p className="text-primary font-bold tracking-wide uppercase text-xs md:text-sm">Specialized Services</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="aspect-square w-full max-w-[240px] mx-auto rounded-full bg-blue-50/80 flex flex-col items-center justify-center p-6 shadow-md shadow-blue-100/50 border border-blue-100/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-4xl md:text-5xl font-extrabold text-secondary mb-3">
                <Counter to={100} duration={5} suffix="%" />
              </h4>
              <p className="text-primary font-bold tracking-wide uppercase text-xs md:text-sm">Pure & Natural</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="aspect-square w-full max-w-[240px] mx-auto rounded-full bg-blue-50/80 flex flex-col items-center justify-center p-6 shadow-md shadow-blue-100/50 border border-blue-100/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h4 className="text-4xl md:text-5xl font-extrabold text-secondary mb-3">Global</h4>
              <p className="text-primary font-bold tracking-wide uppercase text-xs md:text-sm">Market Reach</p>
            </motion.div>
            
          </motion.div>
        </div>
      </section>     

      {/* 5. PRODUCT TEASERS */}
      <section className="py-12 md:py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div className="max-w-2xl text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Your Path to Verified Products.</h2>
              <p className="text-text-main text-lg">We specialize in traditional, expertly sourced pure ghee. Quality isn't a promise—it's our standard.</p>
            </div>
            <Link to="/products" className="hidden md:inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group pb-2">
              View All 3 Varieties <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-row overflow-hidden rounded-2xl border border-primary/5 shadow-sm hover:shadow-xl transition-all group h-full">
                
                <div className="w-2/5 shrink-0 overflow-hidden relative min-h-[160px]">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                
                <div className={`w-3/5 px-4 py-6 sm:px-6 sm:py-8 flex flex-col justify-center ${item.bgClass}`}>                  <h3 className={`text-lg md:text-xl font-bold mb-2 ${item.titleClass}`}>{item.title}</h3>
                  <p className="text-text-main text-sm leading-snug opacity-90">{item.desc}</p>
                </div>
                
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. SERVICE TEASERS */}
      <section className="bg-gradient-to-b from-sky-50 to-blue-100 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full border-t-4 border-secondary"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div className="max-w-2xl text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Export Excellence as a Service.</h2>
              <p className="text-text-main text-lg">We handle the complexities of international trade so you can focus entirely on scaling your business.</p>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group pb-2">
              View All Services <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((item, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} className="bg-white border border-blue-100/50 p-8 rounded-2xl shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all group">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-text-main leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
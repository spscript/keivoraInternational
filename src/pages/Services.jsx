import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react'; // added
import { servicesList } from '../data/services';
import  services_show from "../assets/services_banner.png";

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full min-h-screen bg-accent pt-24 pb-0">
      <Helmet>
        <title>Our Export Services | ARAVVAT INTERNATIONAL</title>
        <meta name="description" content="Comprehensive B2B export solutions including sourcing, logistics, compliance, and market strategy." />
      </Helmet>

      {/* Page Header & Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight leading-tight"
        >
          End-to-End Export Solutions. <br className="hidden md:block"/>
          Designed for <span className="text-secondary">Global Scale.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-lg text-text-main leading-relaxed"
        >
          Your All-in-One Export Partner. From verified sourcing to seamless delivery, we manage the complexities of international trade so you can focus on growth.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9]">
          <img src={services_show} alt="Global Logistics and Shipping" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* ✅ REPLACED ACCORDION SECTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="space-y-4">
          {servicesList.map((service) => {
            const isOpen = activeService === service.id;
            const IconComponent = LucideIcons[service.icon];

            return (
              <motion.div key={service.id} layout className="bg-surface rounded-xl shadow-sm border border-primary/5 overflow-hidden">
                <button 
                  onClick={() => toggleService(service.id)} 
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-primary/5 transition-all group"
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-secondary text-white shadow-lg shadow-secondary/30' : 'bg-primary/5 text-primary group-hover:bg-primary/10'}`}>
                      {IconComponent ? <IconComponent size={28} strokeWidth={1.5} /> : <LucideIcons.HelpCircle />}
                    </div>
                    
                    <h3 className={`text-lg md:text-xl font-semibold transition-colors ${isOpen ? 'text-secondary' : 'text-primary'}`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="shrink-0 ml-auto">
                    <motion.div animate={{ rotate: isOpen ? 45 : 0 }}>
                      <LucideIcons.Plus className={`w-6 h-6 ${isOpen ? 'text-secondary' : 'text-primary/30'}`} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                      <div className="px-6 pb-6 md:pb-8 pt-2 text-text-main leading-relaxed border-t border-primary/5 mt-2 ml-16 md:ml-[4.5rem]">
                        <p className="text-base md:text-lg">{service.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <section className="bg-surface py-24 border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">The ARAVVAT Process</h2>
            <p className="text-text-main text-lg max-w-2xl mx-auto">A systematic, transparent approach to global trade that removes the guesswork from your supply chain.</p>
          </div>

          <motion.div 
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
          >
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-primary/10 -z-10"></div>

            {[
              { step: "01", title: "Discovery", desc: "We analyze your requirements, target markets, and volume capabilities." },
              { step: "02", title: "Sourcing", desc: "We identify, vet, and negotiate with top-tier certified suppliers." },
              { step: "03", title: "Compliance", desc: "Our team handles all export documentation, licensing, and quality checks." },
              { step: "04", title: "Delivery", desc: "Goods are shipped via optimized logistics networks with real-time tracking." }
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-primary/20 border-4 border-surface">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-main text-sm leading-relaxed px-4">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale globally?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Stop letting logistical headaches hold your business back. Speak with our trade specialists today to build your custom export strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-secondary text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg shadow-secondary/30">
              Book a Free Consultation
            </Link>
            <Link to="/products" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all duration-300">
              Browse Products First
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
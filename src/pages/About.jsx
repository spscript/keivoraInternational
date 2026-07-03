import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Globe2, Package, LineChart, PieChart, FileCheck, MessagesSquare, Handshake } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const araavatStandards = [
    { 
      icon: <Package size={32} />, 
      title: "1. Trusted Indian Sourcing", 
      desc: "We connect global buyers with carefully selected Indian products across food, dairy, FMCG, agri, organic, and lifestyle categories. Our sourcing approach focuses on reliability, product suitability, buyer requirements, and long-term business value." 
    },
    { 
      icon: <LineChart size={32} />, 
      title: "2. Data-Backed Market Intelligence", 
      desc: "We support exporters with market research and trade intelligence reports to identify product opportunities, target countries, demand trends, and buyer potential. Trade intelligence platforms commonly use trade statistics, tariff data, market-access information, and rules of origin to support market analysis." 
    },
    { 
      icon: <PieChart size={32} />, 
      title: "3. Product-Market Validation", 
      desc: "Before entering a market, we help exporters study whether the product has real international potential. This includes analysing global demand, competing markets, import trends, buyer requirements, and opportunity gaps through structured tables, charts, graphs, and visual reports." 
    },
    { 
      icon: <FileCheck size={32} />, 
      title: "4. Export Readiness Guidance", 
      desc: "We guide new exporters in understanding export procedures, documentation flow, compliance basics, shipment coordination, and buyer communication. DGFT provides export-import guidance resources for the export-import community, including learning sources and procedural guidance." 
    },
    { 
      icon: <MessagesSquare size={32} />, 
      title: "5. Professional Buyer Communication", 
      desc: "We help businesses present themselves professionally to international buyers through clear product information, structured offers, catalogue support, documentation readiness, and transparent communication. This creates confidence for buyers and helps exporters avoid confusion during enquiry, quotation, sampling, and dispatch." 
    },
    { 
      icon: <Handshake size={32} />, 
      title: "6. Transparent Trade Coordination", 
      desc: "At ARAVVAT, we believe global trade should be clear, structured, and dependable. From enquiry to product selection, documentation, packaging discussion, and dispatch readiness, we focus on smooth coordination so buyers can source with confidence and exporters can grow with clarity." 
    }
  ];

  return (
    <div className="w-full min-h-screen bg-accent pt-24 pb-20">
      <Helmet>
        <title>About Us | ARAVVAT INTERNATIONAL P</title>
        <meta name="description" content="Discover the mission, vision, and unshakeable pillars that make ARAVVAT International a trusted partner in global sourcing and trade intelligence." />
      </Helmet>

      {/* Page Header (Updated since Who We Are was moved to Home) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight leading-tight"
        >
          About <span className="text-secondary">Us</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-lg text-text-main leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            ARAVVAT International Private Limited is an India-based sourcing, export, and trade intelligence company helping global buyers source trusted Indian products and supporting new exporters in entering international markets with confidence.
          </p>
        </motion.div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Mission Card */}
          <motion.div variants={itemVariants} className="bg-surface p-10 rounded-2xl shadow-lg border border-primary/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-secondary/10"></div>
            <div className="w-16 h-16 bg-primary/5 text-secondary rounded-xl flex items-center justify-center mb-8 shadow-sm">
              <Target size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-text-main text-lg leading-relaxed">
              To make Indian sourcing and exporting more reliable, transparent, data-driven, and professional for global markets.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={itemVariants} className="bg-primary p-10 rounded-2xl shadow-lg border border-primary/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-secondary/20"></div>
            <div className="w-16 h-16 bg-white/10 text-secondary rounded-xl flex items-center justify-center mb-8 shadow-sm backdrop-blur-sm">
              <Globe2 size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To become a trusted global trade partner connecting Indian products and exporters with international markets through clarity, confidence, and long-term business value.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* The ARAVVAT Standard (6 Values) */}
      <section className="bg-surface py-20 border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">The ARAVVAT Standard</h2>
            <p className="text-text-main text-lg max-w-2xl mx-auto">
              Our operations are built on six unshakeable pillars to ensure seamless, data-driven, and professional trade.
            </p>
          </div>

          <motion.div 
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {araavatStandards.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="p-8 bg-accent rounded-xl border border-primary/5 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
                <div className="w-14 h-14 bg-primary text-white rounded-lg flex items-center justify-center mb-6 shadow-md group-hover:-translate-y-1 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-main leading-relaxed text-sm flex-grow">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
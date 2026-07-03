import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FileCheck2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your actual certification images here
// Note: Double-check the exact filename for the FSSAI logo as it was cut off in the screenshot
import AgmarkImg from '../assets/certification/Agmark.gif';
import ApedaImg from '../assets/certification/APEDA.png';
import FdaImg from '../assets/certification/FDA.jpeg';
import FssaiImg from '../assets/certification/fssai-logo-png_seeklogo-304263.png'; 
import IecImg from '../assets/certification/Import Export Code.png';
import Iso22000Img from '../assets/certification/ISO 22000.jpg';
import MsmeImg from '../assets/certification/MSME.png';

export default function Certificates() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.10 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Streamlined certifications data matching your actual assets
  const certList = [
    {
      img: FdaImg,
      title: "USFDA Compliant",
      desc: "Meets strict US FDA standards for safe food contact and exports."
    },
    {
      img: Iso22000Img,
      title: "ISO 22000",
      desc: "International standard for food safety management systems."
    },
    {
      img: FssaiImg,
      title: "FSSAI Certified",
      desc: "Compliant with the Food Safety and Standards Authority of India."
    },
    {
      img: ApedaImg,
      title: "APEDA Registered",
      desc: "Authorized exporter of scheduled agricultural products from India."
    },
    {
      img: IecImg,
      title: "Import Export Code",
      desc: "Authorized (IEC) for global trade and international distribution."
    },
    {
      img: AgmarkImg,
      title: "Agmark Certified",
      desc: "Quality certification mark ensuring standard agricultural practices."
    },
    {
      img: MsmeImg,
      title: "MSME Registered",
      desc: "Recognized entity ensuring reliable and structured manufacturing."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-accent pt-24 pb-20">
      
      <Helmet>
        <title>Certifications & Compliance | ARAVVAT INTERNATIONAL</title>
        <meta name="description" content="View ARAVVAT INTERNATIONAL's global trade certifications including APEDA, FSSAI, ISO 22000, and USFDA. We guarantee 100% compliance." />
      </Helmet>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h4 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="text-secondary font-bold uppercase tracking-widest mb-4 text-sm"
        >
          Trust & Transparency
        </motion.h4>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight leading-tight"
        >
          Global Standards. <br className="hidden md:block"/>
          <span className="text-secondary">Zero Compromise.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-lg text-text-main leading-relaxed max-w-3xl mx-auto"
        >
          International trade requires absolute certainty. We operate strictly through certified networks, ensuring every product meets the exacting regulatory demands of your destination country.
        </motion.p>
      </div>

      {/* Certifications Grid (New Visual Design) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {certList.map((cert, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="bg-surface p-8 rounded-2xl shadow-sm border border-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Logo Wrapper */}
              <div className="h-24 w-24 mb-6 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={cert.img} 
                  alt={cert.title} 
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>
              
              {/* Text Content */}
              <h3 className="text-lg font-bold text-primary mb-3">
                {cert.title}
              </h3>
              <p className="text-text-main text-sm leading-relaxed">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Verification Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }} 
          className="bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden border-t-4 border-secondary"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="flex items-start gap-6 relative z-10 w-full md:w-2/3 mb-8 md:mb-0">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
              <FileCheck2 size={32} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Pre-Shipment Inspection Ready</h3>
              <p className="text-gray-300 leading-relaxed">
                All our consignments are subject to rigorous multi-tier quality checks. We readily coordinate with recognized inspection agencies (SGS, Bureau Veritas, Intertek) prior to vessel loading.
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-end">
             <Link to="/contact" className="bg-secondary text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg whitespace-nowrap">
              Request Documents
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, Clock, Globe2, Send, CheckCircle2, AlertCircle } from 'lucide-react';

// --- Validation & Sanitization Helpers ---
const sanitize = (value) => {
  if (!value) return "";
  return value.toString().trim().replace(/[<>]/g, "");
};

const validators = {
  name: /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s\-'.]{1,49}$/,
  company: /^(?=.*[A-Za-z0-9])[A-Za-z0-9\s&.,'-]{2,100}$/,
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  phone: /^\d{10}$/,
  textField: /^[A-Za-z0-9\s&.,'()\-\/]{2,100}$/,
  port: /^[A-Za-z0-9\s\-&,]{2,100}$/,
  country: /^[A-Za-z\s.'-]{2,50}$/
};

export default function Contact() {
  const [intent, setIntent] = useState('trade'); 
  const [status, setStatus] = useState('idle'); 
  const [errorMessage, setErrorMessage] = useState('');

  // Dropdown States for "Other" conditionally rendering
  const [tradeCategory, setTradeCategory] = useState('');
  const [complianceReq, setComplianceReq] = useState('');

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "";
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || "";
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY || "";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getIntentLabel = () => {
    if (intent === 'trade') return 'Aravvat Trade & Sourcing Inquiry';
    if (intent === 'compliance') return 'Aravvat Compliance & Consulting';
    return 'Aravvat General Support';
  };

  // Dynamic Theme Generator
  const getThemeStyles = () => {
    if (intent === 'trade') return 'border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent';
    if (intent === 'compliance') return 'border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-transparent';
    return 'border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent';
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const showError = (msg) => {
      setStatus("error");
      setErrorMessage(msg);
    };

    const formData = new FormData(e.target);
    
    // --- Server-Side / JS Validation ---
    const name = sanitize(formData.get("name"));
    const company = sanitize(formData.get("company"));
    const email = sanitize(formData.get("email"));
    const phone = sanitize(formData.get("phone"));
    const message = sanitize(formData.get("message"));

    if (!validators.name.test(name)) return showError("Invalid full name.");
    if (!validators.company.test(company)) return showError("Invalid company name.");
    if (!validators.email.test(email)) return showError("Invalid email address.");
    if (!validators.phone.test(phone)) return showError("Phone number must contain exactly 10 digits.");
    
    // Updated Message Minimum Character Validation
    if (message.length < 50) return showError("Message must contain at least 50 characters.");

    if (intent === 'trade' || intent === 'compliance') {
      const volume = Number(formData.get("estimated_volume"));
      const port = sanitize(formData.get("target_port"));
      const country = sanitize(formData.get("target_country"));
      
      // Updated Volume Minimum Validation
      if (!volume || volume < 100) return showError("Volume must be at least 100kg.");
      if (!Number.isInteger(volume)) return showError("Volume must be a whole number.");
      if (!validators.port.test(port)) return showError("Invalid target port.");
      if (!validators.country.test(country)) return showError("Invalid target country.");

      if (intent === 'trade' && tradeCategory === 'Other') {
        const productOther = sanitize(formData.get("product_category_other"));
        if (!validators.textField.test(productOther)) return showError("Invalid product category.");
        formData.set("product_category_other", productOther);
      }

      if (intent === 'compliance' && complianceReq === 'Other') {
        const reqOther = sanitize(formData.get("consulting_requirement_other"));
        if (!validators.textField.test(reqOther)) return showError("Invalid consulting requirement.");
        formData.set("consulting_requirement_other", reqOther);
      }

      formData.set("target_port", port);
      formData.set("target_country", country);
    }

    // Overwrite with sanitized data to prevent basic XSS
    formData.set("name", name);
    formData.set("company", company);
    formData.set("email", email);
    formData.set("phone", phone);
    formData.set("message", message);
    
    // 1. Core API Setup
    formData.append("access_key", web3FormsKey);
    formData.append("from_name", "ARAVVAT Global Communication Hub");
    
    // 2. Set "Reply-To" so your client can just hit reply in Gmail!
    formData.append("replyto", email);

    // 3. Dynamic Subject Line with Emojis
    let emailSubject = '';
    const companyName = company || "Customer";
    
    if (intent === 'trade') {
      emailSubject = `🌍 New Trade Inquiry from ${companyName}`;
    } else if (intent === 'compliance') {
      emailSubject = `⚖️ Compliance Request from ${companyName}`;
    } else {
      emailSubject = `✉️ General Support Inquiry from ${name}`;
    }
    formData.append("subject", emailSubject);

    // 4. Department Tag
    formData.append("🏢 Routing_Desk", getIntentLabel()); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTradeCategory('');
        setComplianceReq('');
      } else {
        showError(data.message || "Submission failed. Please verify configurations.");
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      showError("Network error. Please check your connection and try again.");
    }
  };

  const formatPhoneNumber = (phone) => {
    if (!phone) return "Update .env";
    const normalized = phone.replace(/\s+/g, '');
    const match = normalized.match(/^(.*?)(\d{5})(\d{5})$/);
    if (match) {
      const countryCode = match[1] ? `${match[1]} ` : "";
      return `${countryCode}${match[2]} ${match[3]}`;
    }
    return phone; 
  };

  return (
    <div className="w-full min-h-screen bg-accent pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>Contact & Global Inquiries | ARAVVAT INTERNATIONAL P</title>
        <meta name="description" content="Connect with ARAVVAT INTERNATIONAL P for verified global sourcing, trade compliance, and export logistics." />
      </Helmet>

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -mt-40 -mr-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h4 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold uppercase tracking-widest mb-4 text-sm flex items-center justify-center gap-2"
          >
            <Globe2 size={16} /> Global Communication Hub
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight leading-tight"
          >
            Let's Initiate <span className="text-secondary">Trade.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-lg text-text-main leading-relaxed"
          >
            Select the nature of your inquiry below. Our specialized trade desk will respond with precise documentation, compliance details, or exact quotes within 24 hours.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className={`w-full lg:w-7/12 p-6 md:p-10 rounded-3xl shadow-xl flex flex-col justify-between min-h-[650px] transition-all duration-500 border ${getThemeStyles()}`}
          >
            <div>
              <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-primary/10">
                {[
                  { id: 'trade', label: 'Trade & Sourcing Inquiry' },
                  { id: 'compliance', label: 'Compliance & Consulting' },
                  { id: 'general', label: 'General Support' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setIntent(tab.id);
                      if(status === 'success' || status === 'error') setStatus('idle');
                    }}
                    className={`px-5 py-3 rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 ${
                      intent === tab.id 
                        ? 'bg-primary text-white shadow-md transform scale-[1.02]' 
                        : 'bg-white/50 text-text-main hover:bg-primary/5 border border-primary/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4"
                  >
                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Inquiry Securely Transmitted</h3>
                    <p className="text-text-main max-w-md text-sm leading-relaxed mb-6">
                      Thank you. Your payload has been routed to our <span className="font-semibold text-secondary">{getIntentLabel()}</span> desk.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-xl border border-primary/20 text-primary font-semibold text-sm hover:bg-primary/5 transition-colors bg-white/50"
                    >
                      Submit Another Response
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key={intent} 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-5"
                  >
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    {/* CORE SHARED FIELDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider pl-1">Full Name *</label>
                        <input 
                          type="text" name="name" required 
                          pattern="^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ\s\-'.]{1,49}$"
                          title="Please enter a valid name."
                          minLength={2}
                          maxLength={50}
                          placeholder="John Doe" 
                          className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm backdrop-blur-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider pl-1">Company Name *</label>
                        <input 
                          type="text" name="company" required
                          pattern="^(?=.*[A-Za-z0-9])[A-Za-z0-9\s&.,'-]{2,100}$"
                          title="Please enter a valid company name."
                          minLength={2}
                          maxLength={100}
                          placeholder="Global Imports Ltd." 
                          className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider pl-1">Email *</label>
                        <input 
                          type="email" name="email" required 
                          pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                          title="Enter a valid email address."
                          placeholder="john@company.com" 
                          className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm backdrop-blur-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider pl-1">Phone Number *</label>
                        <input 
                          type="tel" name="phone" required 
                          pattern="^[0-9]{10}$"
                          maxLength="10"
                          inputMode="numeric"
                          title="Phone number must contain exactly 10 digits."
                          placeholder="9876543210" 
                          onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, ''); }}
                          className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    {/* DYNAMIC FIELDS: TRADE */}
                    {intent === 'trade' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold text-primary uppercase tracking-wider pl-1">Product Category *</label>
                          <select 
                            name="product_category" required 
                            value={tradeCategory}
                            onChange={(e) => setTradeCategory(e.target.value)}
                            className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm appearance-none backdrop-blur-sm"
                          >
                            <option value="" disabled>Select category...</option>
                            <option value="A2 Cow Ghee">A2 Cow Ghee</option>
                            <option value="Desi Ghee">Desi Ghee</option>
                            <option value="Buffalo Ghee">Buffalo Ghee</option>
                            <option value="Other">Other</option>
                          </select>
                          
                          {/* Conditional 'Other' Field */}
                          <AnimatePresence>
                            {tradeCategory === 'Other' && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                className="mt-2"
                              >
                                <input 
                                  type="text" name="product_category_other" required 
                                  pattern="^[A-Za-z0-9\s&.,'()\-\/]{2,100}$"
                                  minLength={2} maxLength={100}
                                  placeholder="Please specify product..." 
                                  className="w-full p-3 rounded-lg bg-white/90 border border-primary/20 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold text-primary uppercase tracking-wider pl-1">Volume, Port & Country *</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <input 
                              type="number" name="estimated_volume" required 
                              min="100" step="1"
                              placeholder="Volume (Min 100kg)" 
                              className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm backdrop-blur-sm"
                            />
                            <input 
                              type="text" name="target_port" required 
                              pattern="^[A-Za-z0-9\s\-&,]{2,100}$"
                              placeholder="Port (e.g. Rotterdam)" 
                              className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm backdrop-blur-sm"
                            />
                            <input 
                              type="text" name="target_country" required 
                              pattern="^[A-Za-z\s]{2,50}$"
                              placeholder="Country (e.g. UAE)" 
                              className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm backdrop-blur-sm"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* DYNAMIC FIELDS: COMPLIANCE */}
                    {intent === 'compliance' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold text-primary uppercase tracking-wider pl-1">Consulting Requirement *</label>
                          <select 
                            name="consulting_requirement" required 
                            value={complianceReq}
                            onChange={(e) => setComplianceReq(e.target.value)}
                            className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm appearance-none backdrop-blur-sm"
                          >
                            <option value="" disabled>Select requirement...</option>
                            <option value="Trade Analytics Report-For Exporters">Trade Analytics Report-For Exporters</option>
                            <option value="Strategic Sourcing -For Importers">Strategic Sourcing -For Importers</option>
                            <option value="Market research report -For Exporters">Market research report -For Exporters</option>
                            <option value="Export documentation process -For Exporters">Export documentation process -For Exporters</option>
                            <option value="Other">Other</option>
                          </select>

                          {/* Conditional 'Other' Field */}
                          <AnimatePresence>
                            {complianceReq === 'Other' && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                className="mt-2"
                              >
                                <input 
                                  type="text" name="consulting_requirement_other" required 
                                  pattern="^[A-Za-z0-9\s&.,'()\-\/]{2,100}$"
                                  minLength={2} maxLength={100}
                                  placeholder="Please specify requirement..." 
                                  className="w-full p-3 rounded-lg bg-white/90 border border-primary/20 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold text-primary uppercase tracking-wider pl-1">Volume, Port & Country *</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <input 
                              type="number" name="estimated_volume" required 
                              min="100" step="1"
                              placeholder="Volume (Min 100kg)" 
                              className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm backdrop-blur-sm"
                            />
                            <input 
                              type="text" name="target_port" required 
                              pattern="^[A-Za-z0-9\s\-&,]{2,100}$"
                              placeholder="Port (e.g. Rotterdam)" 
                              className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm backdrop-blur-sm"
                            />
                            <input 
                              type="text" name="target_country" required 
                              pattern="^[A-Za-z\s]{2,50}$"
                              placeholder="Country (e.g. UAE)" 
                              className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm backdrop-blur-sm"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* COMMON TEXTAREA */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-primary uppercase tracking-wider pl-1">
                        Specific Requirements / Message *
                      </label>
                      <textarea 
                        name="message" 
                        required
                        minLength={50}
                        maxLength={2000}
                        rows="4" 
                        placeholder="Provide any specific quality parameters, certifications required, or operational challenges... (Min 50 characters)" 
                        className="w-full p-4 rounded-xl bg-white/70 border border-primary/10 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none backdrop-blur-sm"
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-500/5 p-3 rounded-xl border border-red-500/10">
                        <AlertCircle size={16} className="shrink-0" /> <span>{errorMessage}</span>
                      </motion.div>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="mt-2 bg-primary text-white font-bold py-4 px-6 rounded-xl hover:bg-primary/95 shadow-md hover:shadow-lg active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                          Transmitting...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Submit
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants} initial="hidden" animate="visible"
            className="w-full lg:w-5/12 flex flex-col gap-8"
          >
            <motion.div variants={itemVariants} className="w-full h-64 md:h-80 bg-surface rounded-3xl relative overflow-hidden shadow-2xl border-2 border-primary/5">
              <iframe
                title="ARAVVAT INTERNATIONAL P HQ Location"
                src="https://maps.google.com/maps?q=Pune,%20Maharashtra,%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }} 
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-6 left-6 pointer-events-none">
                <div className="bg-primary/95 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl text-white shadow-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">HQ Command</p>
                  <p className="font-medium text-sm">Pune, Maharashtra, India</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="bg-surface p-6 rounded-2xl border border-primary/5 hover:shadow-lg transition-shadow">
                <Mail size={24} className="text-secondary mb-4" />
                <h4 className="font-bold text-primary mb-1">Corporate Email</h4>
                <a href={`mailto:${contactEmail}`} className="text-text-main text-sm hover:text-secondary transition-colors break-all">
                  {contactEmail || "Update .env"}
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-surface p-6 rounded-2xl border border-primary/5 hover:shadow-lg transition-shadow">
                <Phone size={24} className="text-secondary mb-4" />
                <h4 className="font-bold text-primary mb-1">Direct Line</h4>
                <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="text-text-main text-sm hover:text-secondary transition-colors">
                  {formatPhoneNumber(contactPhone)}
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-surface p-6 rounded-2xl border border-primary/5 hover:shadow-lg transition-shadow sm:col-span-2 flex items-center gap-5">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Operational Hours</h4>
                  <p className="text-text-main text-sm">Mon - Sat: 09:00 AM - 07:00 PM (IST)<br/>Priority support for active consignments available 24/7.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';

// Import your logos here (adjust the path to match your folder structure)
import whiteLogo from '../../assets/white_logo.png';
import transLogo from '../../assets/trans_logo.png';

export default function Footer() {
  // CHANGE THIS VARIABLE to test the different logos:
  // Use `whiteLogo` or `transLogo`
  const activeLogo = transLogo; 

  // Updated fallbacks to match your image
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "aravvatinternationalp@gmail.com";
  const rawContactPhone = import.meta.env.VITE_CONTACT_PHONE || "+919112091487";

  // Helper function to format phone number as +XX XXXXX XXXXX
  const formatPhoneNumber = (phone) => {
    // Remove any existing spaces or non-digit characters (except '+')
    const cleaned = phone.replace(/[^\d+]/g, '');
    // Match the pattern: +[2 digits] [5 digits] [5 digits]
    const match = cleaned.match(/^(\+\d{2})(\d{5})(\d{5})$/);
    
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]}`;
    }
    return phone; // Return original if it doesn't match the exact 12-character pattern
  };

  const displayPhone = formatPhoneNumber(rawContactPhone);
  const telLink = rawContactPhone.replace(/\s+/g, '');
  
  // Format strictly for WhatsApp URL by removing all non-digits (including '+')
  const whatsappLinkNumber = rawContactPhone.replace(/\D/g, '');

  return (
    <footer className="bg-primary text-gray-300 pt-8 pb-6 md:pb-4 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

          <div className="col-span-1 lg:col-span-1">
            {/* LOGO SECTION */}
            <Link to="/" className="mb-4 block group">
              <img 
                src={activeLogo} 
                alt="Aravvat International Logo" 
                // Adjust height (h-16 md:h-20) based on your logo's actual proportions
                className="h-16 md:h-20 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner for verified sourcing and seamless exports. Connecting the best of India to the world with absolute integrity.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-secondary transition-colors">Products</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/certificates" className="hover:text-secondary transition-colors">Certificates</Link></li>
              <li><Link to="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
              <li><Link to="/our-brand" className="hover:text-secondary transition-colors">Our Brand</Link></li>
              <li><Link to="/blogs" className="hover:text-secondary transition-colors">Blogs</Link></li>
              <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Compliance</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> FSSAI Certified
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> APEDA Registered
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> ISO 9001:2015
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 100% Traceability
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${contactEmail}`} className="hover:text-secondary transition-colors">
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {/* Use the unspaced number for the actual link, and the formatted one for display */}
                <a href={`tel:${telLink}`} className="hover:text-secondary transition-colors">
                  {displayPhone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Pune - 411041, Maharashtra, India</span>
              </li>
            </ul>

            {/* Social Media Links Moved Below Contact Information */}
            <div className="flex items-center gap-5 mt-6">
              
              {/* Facebook - Layered design */}
              <a 
                href="https://www.facebook.com/AravvatInternationalP/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition-opacity duration-300"
                aria-label="Facebook"
              >
                <svg className="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#1877F2"/>
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" fill="#FFFFFF"/>
                </svg>
              </a>

              {/* Instagram - Reverted to original style */}
              <a 
                href="https://www.instagram.com/aravvat_internationalp/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#E1306C] hover:opacity-80 transition-opacity duration-300"
                aria-label="Instagram"
              >
                <svg className="w-10 h-10 scale-[1.15]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>

              {/* LinkedIn - Layered design */}
              <a 
                href="https://www.linkedin.com/company/aravvat-internationalp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-80 transition-opacity duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#0A66C2" />
                  <path d="M7.46 20H3.58V9h3.88v11zM5.52 7.42c-1.24 0-2.25-1.01-2.25-2.25S4.28 2.92 5.52 2.92s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25zm14.9 12.58h-3.88v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83v5.44h-3.88V9h3.72v1.5h.05c.52-.98 1.78-2.01 3.66-2.01 3.92 0 4.64 2.58 4.64 5.93v5.58z" fill="#FFFFFF" />
                </svg>
              </a>

              {/* WhatsApp - Reverted to original style */}
              <a 
                href={`https://wa.me/${whatsappLinkNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#25D366] hover:opacity-80 transition-opacity duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-3.859c1.64.973 3.244 1.488 4.882 1.489 5.432 0 9.85-4.388 9.853-9.777.002-2.611-1.015-5.066-2.866-6.92-1.85-1.854-4.307-2.876-6.924-2.877-5.431 0-9.85 4.388-9.854 9.778 0 1.714.465 3.39 1.346 4.867l-.988 3.606 3.705-.966zm10.173-6.91c-.304-.152-1.799-.882-2.077-.983-.278-.101-.48-.152-.682.152-.202.304-.783.983-.96 1.185-.177.202-.354.228-.658.076-.304-.152-1.284-.473-2.447-1.507-.905-.804-1.516-1.8-1.693-2.103-.177-.304-.019-.468.133-.619.136-.136.304-.354.455-.531.152-.177.202-.304.304-.506.101-.202.051-.38-.025-.531-.076-.152-.682-1.637-.934-2.245-.246-.59-.496-.51-.682-.52l-.582-.01c-.202 0-.531.076-.81.38-.278.304-1.062 1.037-1.062 2.53 0 1.493 1.088 2.934 1.24 3.137.152.202 2.14 3.257 5.184 4.564.723.311 1.289.497 1.73.637.728.23 1.391.197 1.914.12.584-.087 1.799-.733 2.052-1.442.253-.708.253-1.315.177-1.442-.076-.126-.278-.202-.582-.354z"/>
                </svg>
              </a>
            </div>

          </div>

        </div>

        <div className="border-t border-slate-700/50 pt-3 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ARAVVAT INTERNATIONAL P. All rights reserved.</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
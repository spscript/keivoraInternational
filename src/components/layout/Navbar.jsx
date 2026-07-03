import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

// Import your logos here (adjust the path to match your folder structure)
import whiteLogo from '../../assets/white_logo.png';
import transLogo from '../../assets/trans_logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // CHANGE THIS VARIABLE to test the different logos:
  // Use `whiteLogo` or `transLogo`
  const activeLogo = transLogo; 

  const desktopLinkStyle = ({ isActive }) =>
    `transition-colors duration-300 font-medium ${isActive ? 'text-secondary' : 'hover:text-secondary'}`;

  const mobileLinkStyle = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'bg-slate-800 text-secondary' : 'hover:bg-slate-800 hover:text-secondary'}`;

  return (
    <nav className="fixed w-full z-50 bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO SECTION */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src={activeLogo} 
                alt="Aravvat International Logo" 
                // Adjust height (h-12 md:h-16) based on your logo's actual proportions
                className="h-12 md:h-16 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
          </div>

          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            <NavLink to="/" className={desktopLinkStyle}>Home</NavLink>
            <NavLink to="/about" className={desktopLinkStyle}>About Us</NavLink>
            <NavLink to="/products" className={desktopLinkStyle}>Products</NavLink>
            <NavLink to="/services" className={desktopLinkStyle}>Services</NavLink>
            <NavLink to="/gallery" className={desktopLinkStyle}>Gallery</NavLink>
            <NavLink to="/our-brand" className={desktopLinkStyle}>Our Brand</NavLink>
          </div>

          <div className="hidden lg:flex items-center">
            <Link to="/contact" className="bg-secondary text-primary px-6 py-2 rounded-md font-bold hover:bg-white transition-all duration-300 shadow-md">
              Get In Touch
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-white hover:text-secondary focus:outline-none transition-colors"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-slate-700 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink onClick={toggleMenu} to="/" className={mobileLinkStyle}>Home</NavLink>
            <NavLink onClick={toggleMenu} to="/about" className={mobileLinkStyle}>About Us</NavLink>
            <NavLink onClick={toggleMenu} to="/services" className={mobileLinkStyle}>Services</NavLink>
            <NavLink onClick={toggleMenu} to="/products" className={mobileLinkStyle}>Products</NavLink>
            <NavLink onClick={toggleMenu} to="/gallery" className={mobileLinkStyle}>Gallery</NavLink>
            <NavLink onClick={toggleMenu} to="/our-brand" className={mobileLinkStyle}>Our Brand</NavLink>
            <Link onClick={toggleMenu} to="/contact" className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold bg-secondary text-primary hover:bg-white transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
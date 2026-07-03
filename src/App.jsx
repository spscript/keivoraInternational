import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/ui/FloatingButtons';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import Gallery from './pages/Gallery';
import OurBrand from './pages/OurBrand';
import FAQ from './pages/FAQ'; 
import Blogs from './pages/Blogs'; // <-- Added Import

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop /> 
        
        <div className="flex flex-col min-h-screen bg-accent font-sans relative">
          
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/our-brand" element={<OurBrand />} /> 
              <Route path="/faq" element={<FAQ />} /> 
              <Route path="/blogs" element={<Blogs />} /> {/* <-- Added Route */}
            </Routes>
          </main>

          <Footer />
          <FloatingButtons />
          
        </div>
      </Router>
    </HelmetProvider>
  );
}
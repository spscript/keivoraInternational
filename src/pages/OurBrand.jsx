import React from 'react';
import KeivoraLogo from "../assets/brands/Keivora_horizontal.png";

const brandsData = [
  {
    id: "keivora",
    logo: KeivoraLogo,
    name: "Keivora",
    title: "Keivora A2 Gir Cow Ghee",
    subtitle: "A Golden Story of Purity, Tradition & Care",
    slogan: "Rooted in Truth. Given with Grace.",
    shopUrl: "https://your-store-name.myshopify.com", 
    socialLinks: {
      instagram: "https://www.instagram.com/keivora_official",
      facebook: "https://www.facebook.com/KeivoraOfficial/"
    },
    sloganMeanings: [
      {
        title: "Rooted in Truth",
        desc: "Stands for purity, honesty, traditional process, and no shortcuts."
      },
      {
        title: "Given with Grace",
        desc: "Every spoon is made with care, respect, and love for the family."
      }
    ],
    // The FULL narrative formatted beautifully
    narrative: (
      <div className="text-gray-700 text-sm md:text-base space-y-3">
        <p className="font-medium text-primary italic border-l-4 border-secondary pl-3 py-1 bg-white/50 text-base md:text-lg">
          "Some tastes are not just remembered by the tongue, they are remembered by the heart."
        </p>
        
        <ul className="space-y-1 text-gray-800 italic pl-2 md:pl-4 text-sm md:text-base">
          <li className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
             The warmth of dal-rice at home.
          </li>
          <li className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
             The soft roti touched with golden ghee.
          </li>
          <li className="flex items-start gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></span>
             <span>The aroma that reminds us of our mother’s kitchen and our grandmother’s wisdom.</span>
          </li>
        </ul>
        
        <p>
          At <strong className="text-primary">Keivora</strong>, we wanted to bring back that same trust, purity, and traditional nourishment.
        </p>

        <p>
          Our A2 Gir Cow Ghee is crafted from the pure milk of indigenous Gir cows, freely grazing on sun-kissed pastures. The milk is not rushed into machines or processed through shortcuts. Instead, we follow the ancient <strong>Vedic Bilona method</strong>, a 3,000-year-old tradition rooted in patience and purity.
        </p>

        <div className="flex flex-wrap gap-2 py-1 font-bold text-primary text-xs md:text-sm">
          <span className="bg-white px-3 py-1.5 rounded-md shadow-sm border border-amber-100">No cream separation.</span>
          <span className="bg-white px-3 py-1.5 rounded-md shadow-sm border border-amber-100">No shortcuts.</span>
          <span className="bg-white px-3 py-1.5 rounded-md shadow-sm border border-amber-100">No compromise.</span>
        </div>

        <p>
          It takes around <strong className="text-primary font-bold">25–30 liters of pure A2 Gir cow milk</strong> to make just 1 liter of Keivora A2 Gir Cow Ghee. That is why every spoon carries depth, aroma, richness, and care.
        </p>

        <div className="bg-amber-100/30 p-4 rounded-xl border border-amber-200/50 mt-1">
            <p className="font-bold text-primary text-base mb-2">Keivora is not just ghee.</p>
            <ul className="space-y-1 text-gray-800 font-medium text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✦</span> It is the return of tradition.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✦</span> It is purity you can feel.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✦</span> It is golden care for your family’s everyday food.
                </li>
            </ul>
        </div>

        <div className="pt-3 mt-3 border-t border-amber-200/60">
          <p className="font-medium text-gray-800 text-center md:text-left text-sm md:text-base">
            Keivora A2 Gir Cow Ghee — made slowly, made purely, made the way India remembers.<br/>
            <span className="text-secondary font-bold italic mt-1 inline-block text-base md:text-lg">Rooted in Truth. Given with Grace.</span>
          </p>
        </div>
      </div>
    )
  }
];

export default function OurBrand() {
  return (
    // Drastically reduced top/bottom padding for the entire page
    <div className="pt-24 pb-10 bg-surface min-h-screen font-sans">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-4">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-1 block">
            Our Portfolio
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-primary tracking-tight m-0 leading-none">
            Brands of Aravvat
          </h1>
        </div>

        {/* Brands List */}
        <div className="space-y-8">
          {brandsData.map((brand) => (
            <div key={brand.id} className="bg-amber-50/40 rounded-3xl shadow-xl border border-amber-200/50 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-500">
              
              {/* TOP HEADER: Full Width Logo & Title */}
              {/* Reduced padding to absolute minimum for spacing */}
              <div className="bg-white px-1 py-1 md:px-1 md:py-1 border-b border-amber-100 flex flex-col items-center text-center">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} Logo`} 
                  // Constrained max-width to avoid forcing extra height
                  className="w-full max-w-sm lg:max-w-md h-auto object-contain mx-auto mb-1 mix-blend-multiply"
                />
                <h2 className="text-2xl md:text-4xl font-black text-primary mb-0 tracking-tight leading-none">
                  {brand.title}
                </h2>
                <p className="text-lg md:text-xl text-secondary font-bold mt-1">
                  {brand.subtitle}
                </p>
              </div>

              {/* BOTTOM SECTION: Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left Sidebar: Slogan, Meanings, Shopping Link & Socials */}
                {/* Reduced padding from p-8 to p-5 */}
                <div className="lg:col-span-4 bg-amber-50/20 p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-amber-100 flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-serif italic text-primary mb-4 font-bold text-center lg:text-left">
                      "{brand.slogan}"
                    </h3>

                    <div className="space-y-3 text-left">
                      {brand.sloganMeanings.map((meaning, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm">
                          <h4 className="font-bold text-sm md:text-base text-primary mb-1 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                            {meaning.title}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600 leading-snug">
                            {meaning.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <a 
                      href={brand.shopUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-secondary text-primary px-4 py-3 rounded-full font-black hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1 text-base"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Shop {brand.name} Now
                    </a>

                    {/* Social Media Links Updated Colors */}
                    {brand.socialLinks && (
                      <div className="flex items-center justify-center gap-5 mt-1">
                        {brand.socialLinks.facebook && (
                          <a 
                            href={brand.socialLinks.facebook} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#1877F2] hover:opacity-80 transition-opacity duration-300"
                            aria-label={`${brand.name} Facebook`}
                          >
                            <svg className="12 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                        {brand.socialLinks.instagram && (
                          <a 
                            href={brand.socialLinks.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#E1306C] hover:opacity-80 transition-opacity duration-300"
                            aria-label={`${brand.name} Instagram`}
                          >
                            <svg className="w-12 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Area: The Full Narrative */}
                {/* Reduced padding from p-8/p-12 to p-5/p-6 */}
                <div className="lg:col-span-8 p-5 md:p-6 lg:p-8 bg-white flex items-center">
                  {brand.narrative}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
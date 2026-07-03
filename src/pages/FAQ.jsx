import React, { useState } from 'react';
import { faqData } from '../data/faq';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  // Filter FAQs based on search input
  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-28 pb-20 bg-surface min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">
            Got Questions?
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
            Find answers to common questions about our products, traditional processes, and global export capabilities.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-amber-100 bg-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-gray-700 shadow-sm transition-all duration-300 text-lg"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div 
                key={faq.id} 
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center text-left p-6 bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-lg text-primary pr-4">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180 text-secondary' : 'text-gray-400'}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                {/* Expandable Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openId === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
              <p className="text-gray-500 text-lg">No questions found matching your search.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-secondary font-bold hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-primary rounded-3xl p-10 text-center relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-secondary opacity-10 blur-3xl"></div>
           <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Still have questions?</h3>
           <p className="text-gray-300 mb-8 relative z-10">Our global trade specialists are ready to help you with your specific requirements.</p>
           <a 
              href="/contact" 
              className="inline-block bg-secondary text-primary px-8 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300 relative z-10 shadow-lg"
           >
             Contact Support
           </a>
        </div>

      </div>
    </div>
  );
}
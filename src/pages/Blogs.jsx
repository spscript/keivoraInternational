import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const blogPosts = [
  {
    id: 1,
    title: "Discover the Purity, Tradition & Health Benefits of A2 Gir Cow Ghee",
    excerpt: "Welcome to our A2 Gir Cow Ghee blog page — your destination for authentic information about traditional Bilona ghee, A2 nutrition, Ayurveda, healthy cooking, and wellness. Explore expert articles, guides, and tips to understand why pure Gir Cow Ghee is becoming a preferred choice for health-conscious families.",
  },
  {
    id: 2,
    title: "What is A2 Gir Cow Ghee? Everything You Need to Know",
    excerpt: "A2 Gir Cow Ghee is made from the milk of Gir cows, a native Indian breed known for producing A2 milk. Prepared using the traditional Bilona method, this ghee is rich in aroma, nutrients, and healthy fats. Unlike regular commercial ghee, A2 Gir Cow Ghee is valued for its purity, digestibility, and traditional preparation process.",
  },
  {
    id: 3,
    title: "A2 Gir Cow Ghee vs Regular Ghee – What’s the Difference?",
    excerpt: "Not all ghee is the same. A2 Gir Cow Ghee differs from regular ghee in terms of milk quality, preparation method, nutrition, and digestibility. This blog helps you understand the key differences and why many families prefer A2 Bilona Ghee for daily use.",
  },
  {
    id: 4,
    title: "Health Benefits of A2 Gir Cow Ghee",
    excerpt: "A2 Gir Cow Ghee has been used in Ayurveda for centuries. It is believed to support digestion, immunity, brain health, and overall wellness when consumed in moderation.",
  },
  {
    id: 5,
    title: "Is A2 Gir Cow Ghee Good for Weight Loss?",
    excerpt: "Many people avoid ghee while dieting, but pure A2 Gir Cow Ghee contains healthy fats that may support metabolism and help you feel fuller for longer. Learn how moderate consumption of traditional ghee can fit into a balanced lifestyle.",
  },
  {
    id: 6,
    title: "What is Bilona Ghee and Why Is It Expensive?",
    excerpt: "Bilona Ghee is prepared using an ancient Ayurvedic method where curd is churned traditionally to extract butter before making ghee. This slow process preserves nutrients and requires significantly more milk, making Bilona Ghee premium and nutrient-rich."
  }
];

export default function Blogs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full min-h-screen bg-surface pt-24 pb-20 font-sans">
      <Helmet>
        <title>Blogs & Insights | ARAVVAT INTERNATIONAL P</title>
        <meta name="description" content="Explore our latest articles, guides, and tips about traditional Bilona ghee, A2 nutrition, and wellness." />
      </Helmet>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h4 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="text-secondary font-bold uppercase tracking-widest mb-4 text-sm"
        >
          Insights & News
        </motion.h4>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight leading-tight"
        >
          Our <span className="text-secondary">Blogs</span>
        </motion.h1>
      </div>

      {/* Blogs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants} initial="hidden" animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id} 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col p-6"
            >
              <h2 className="text-xl font-bold text-primary mb-4 leading-snug">
                {post.title}
              </h2>
              
              {/* whitespace-pre-line ensures the line breaks in your text are respected */}
              <p className="text-gray-600 text-sm leading-relaxed flex-grow whitespace-pre-line">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
      
    </div>
  );
}
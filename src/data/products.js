/*
import apparelImg from "../assets/products/aravvat_apparel_textiles_madeups_square.webp";
import oilImg from "../assets/products/aravvat_edible_oils_essential_aromatic_extracts_square.webp";
import herbalImg from "../assets/products/aravvat_nutraceuticals_herbal_ayurvedic_square.webp";
import foodImg from "../assets/products/aravvat_processed_food_packaged_consumables_square.webp";
import craftImg from "../assets/products/aravvat_handcrafted_artifacts_artisanal_decorative_square.webp";
import organicImg from "../assets/products/aravvat_certified_organic_sustainably_sourced_square.webp";
import fruitsImg from "../assets/products/aravvat_fresh_produce_fruits_vegetables_square.webp";
import agriImg from "../assets/products/aravvat_agri_commodities_farm_based_raw_materials_square.webp";
import dairyImg from "../assets/products/aravvat_dairy_milk_based_products_with_keivora_ghee_square.webp";
import dehydratedImg from "../assets/products/aravvat_dehydrated_fruits_vegetables_food_ingredients_square.webp";

export const productsList = [
  {
    id: 1, title: "Apparel, Textile Fabrics & Made-Ups", description: "We source premium cotton, silk, synthetics and handloom fabrics from India's finest textile suppliers with full-range supply capability.", keyProducts: ["Cotton Fabrics", "Silk Textiles", "Readymade Garments", "Home Textiles", "Industrial Fabrics"], quality: "GSM, colour fastness, shrinkage, AZO-free dyes & REACH compliance verified at source.", whyUs: "Verified supplier network, flexible MOQ, trend-aligned sourcing & reliable on-time delivery.", certifications: ["OEKO-TEX 100", "GOTS", "ISO 9001:2015", "APEDA", "Fair Trade Certified"], image: apparelImg
  },
  {
    id: 2, title: "Edible Oils, Essential & Aromatic Extracts", description: "We source premium cold-pressed edible oils and pure essential extracts from trusted Indian producers for global markets.", keyProducts: ["Cold-Pressed Coconut Oil", "Sesame Oil", "Castor Oil", "Essential Oils", "Aromatic Floral Absolutes"], quality: "Acid value, peroxide value, pesticide residue & heavy metals verified at supplier level.", whyUs: "Trusted supplier network, farm-level traceability & custom bulk-to-retail packaging arranged.", certifications: ["FSSAI", "ISO 22000", "HACCP", "NPOP Organic", "Halal & Kosher Certified"], image: oilImg
  },
  {
    id: 3, title: "Nutraceuticals, Herbal Formulations & Ayurvedic Products", description: "We connect global buyers with India's leading Ayurvedic and herbal product suppliers offering scientifically validated formulations.", keyProducts: ["Ashwagandha Extract", "Turmeric", "Moringa", "Herbal Capsules", "Ayurvedic Oils & Skincare"], quality: "Active constituent standardisation, heavy metals, microbial load & stability reports verified from suppliers.", whyUs: "Curated supplier network, private label sourcing & regulatory documentation support for global markets.", certifications: ["AYUSH Approved", "WHO-GMP", "USDA Organic", "ISO 22000", "Halal & Kosher Certified"], image: herbalImg
  },
  {
    id: 4, title: "Processed Food Products & Packaged Consumables", description: "We source authentic Indian processed foods from certified suppliers in retail-ready, globally compliant packaging formats.", keyProducts: ["Ready-to-Eat Meals", "Spices & Masalas", "Pickles & Chutneys", "Snacks", "Fruit Pulps & Juices"], quality: "Microbiological testing, allergen control, moisture, pH & Brix levels verified at supplier facilities.", whyUs: "Certified supplier base, market-specific product sourcing & destination-country compliant labelling ensured.", certifications: ["FSSAI", "ISO 22000", "HACCP", "BRC", "USFDA Registered", "Halal & Kosher Certified"], image: foodImg
  },
  {
    id: 5, title: "Handcrafted Artifacts, Artisanal & Decorative Products", description: "We source unique, culturally rich handcrafted products directly from India's finest artisan clusters and craft communities.", keyProducts: ["Brass Sculptures", "Hand-Painted Pottery", "Wooden Carvings", "Jute & Bamboo Products", "Block-Printed Furnishings"], quality: "Finish, non-toxic coatings, structural integrity & transit-safe packaging inspected at artisan source.", whyUs: "Direct artisan cluster sourcing, GI-tagged products, custom design coordination & ethical trade assurance.", certifications: ["EPCH Registered", "GI Tag Certified", "Fair Trade Certified", "ISO 9001:2015"], image: craftImg
  },
  {
    id: 6, title: "Certified Organic & Sustainably Sourced Products", description: "We partner with India's certified organic farms and suppliers delivering residue-free, sustainably grown products globally.", keyProducts: ["Organic Spices", "Pulses & Millets", "Herbal Teas", "Organic Honey", "Dried Fruits & Superfoods"], quality: "Pesticide multi-residue, heavy metals & organic integrity verified through supplier farm inspection reports.", whyUs: "100% certified organic sourcing, residue-free guarantee, eco-packaging coordination & consistent supply assured.", certifications: ["NPOP", "USDA NOP", "EU Organic", "India Organic", "Rainforest Alliance Certified"], image: organicImg
  },
  {
    id: 7, title: "Fresh Produce — Fruits & Vegetables (Perishables)", description: "We source export-grade fresh fruits and vegetables from APEDA-approved pack houses across India's key growing regions.", keyProducts: ["Alphonso Mango", "Pomegranate", "Fresh Onion & Garlic", "Baby Vegetables", "Indian Seasonal Vegetables"], quality: "Brix, firmness, size grading, pesticide residue & cold chain compliance verified at supplier pack house.", whyUs: "Vetted pack house network, direct farm sourcing coordination, phytosanitary compliance & flexible packaging.", certifications: ["APEDA Registered", "GlobalGAP", "FSSAI Export Certified", "Phytosanitary Certificate (PPQ)"], image: fruitsImg
  },
  {
    id: 8, title: "Agri Commodities & Farm-Based Raw Materials", description: "We source export-grade grains, pulses, spices and oilseeds from India's leading agri commodity suppliers and cooperatives.", keyProducts: ["Basmati & Non-Basmati Rice", "Wheat & Maize", "Pulses", "Spices", "Sesame & Groundnut Oilseeds"], quality: "Moisture, admixture, aflatoxin, mycotoxin & pre-shipment inspection reports sourced from certified suppliers.", whyUs: "Established commodity supplier network, grade-specific sourcing, volume handling & complete documentation support.", certifications: ["APEDA", "FSSAI", "Spices Board Certified", "Phytosanitary & Fumigation Certified", "ISO 22000"], image: agriImg
  },
  {
    id: 9, title: "Dairy & Milk-Based Products", description: "We source a diverse range of dairy products from India's leading cooperative-backed suppliers at globally competitive pricing.", keyProducts: ["Milk Powder (WMP/SMP)", "Cow & Buffalo Ghee", "Paneer", "UHT Milk", "Butter & Dairy Whitener"], quality: "Fat, SNF, protein, antibiotic residue, aflatoxin M1 & microbial safety verified at supplier level.", whyUs: "Trusted cooperative supplier base, cold chain coordination, custom specification sourcing & year-round supply.", certifications: ["FSSAI", "ISO 22000", "HACCP", "BIS Certified", "Halal & Kosher", "EU Dairy Approved"], image: dairyImg
  },
  {
    id: 10, title: "Dehydrated Fruits, Vegetables & Food Ingredients", description: "We source premium quality dehydrated fruits, vegetables and food ingredients from India's leading processing suppliers for global markets.", keyProducts: ["Dehydrated Onion & Garlic", "Dehydrated Mango & Banana", "Dried Tomato & Capsicum", "Dehydrated Spinach & Herbs", "Dehydrated Ginger & Turmeric Flakes"], quality: "Moisture content, rehydration ratio, microbial safety, sulphite levels & colour retention verified at supplier level.", whyUs: "Vetted supplier network, year-round availability, bulk-to-retail packaging coordination & consistent export-grade quality assured.", certifications: ["FSSAI", "ISO 22000", "HACCP", "APEDA Registered", "Halal & Kosher Certified", "EU & USFDA Compliant"], image: dehydratedImg
  }
];
*/
import a2GheeImg from "../assets/products/Aravvat_Cow_Ghee_Back_500g.png";
import desiGheeImg from "../assets/products/Aravvat_Desi_Ghee_Back_500g.png";
import buffaloGheeImg from "../assets/products/Aravvat_Buffalo_Ghee_Back_500g.png";

export const productsList = [
  {
    id: 1,
    title: "A2 Gir Cow Ghee",
    
    // Original Keys for your PDF component
    keyProducts: ["500 g", "1 kg", "5 kg", "15 kg"],
    whyUs: "It is easily digestible, recommended for Ayurvedic daily use, and ideal for babies. Made purely without shortcuts, requiring 25–30 litres of A2 milk to make one litre of ghee.",
    
    // New UI Keys
    tag: "⭐ PREMIUM",
    tagStyle: "bg-orange-100 text-orange-800",
    subtitle: "Vedic Bilona • Deep Golden • Pure A2",
    features: [
      "Pure A2 beta-casein — easily digestible",
      "Free-grazing purebred Gir cows",
      "Rich in Omega-3, Vitamins A, D, E & K2",
      "Recommended for Ayurvedic daily use",
      "Deep golden colour, rich nutty aroma"
    ],
    isDark: false,
    description: "Our crown jewel, crafted using the ancient 3,000-year-old Vedic Bilona method. We curdle whole A2 milk from free-grazing, purebred Gir cows in earthen pots, then hand-churn the curd bidirectionally (clock and anti-clockwise) using a wooden bilona to extract the pure makkhan. It takes approximately 25-30 liters of pure milk to yield just 1 liter of this premium golden elixir.",
    healthBenefits: [
      "Deeply nourishes all seven Dhatus (bodily tissues) according to Ayurveda.",
      "Contains pure A2 beta-casein protein, making it exceptionally gentle on the digestive tract and suitable for lactose-sensitive individuals.",
      "High concentration of Butyric Acid helps reduce gut inflammation and supports a healthy microbiome.",
      "Naturally packed with Omega-3 fatty acids and essential fat-soluble vitamins (A, D, E, K2) for optimal cardiovascular and bone health."
    ],
    culinaryUses: "Best consumed raw. Ideal for drizzling over warm rice, khichdi, or freshly made chapatis. Can be consumed directly (1 tsp with warm water in the morning) for therapeutic Ayurvedic benefits.",
    quality: "Medium fat content, deep golden color, granular texture, and a profoundly rich, nutty flavor profile.",
    certifications: ["FSSAI Certified", "Lab Tested Every Batch", "100% Natural", "A2 Certified", "Export Ready"],
    image: a2GheeImg
  },
  {
    id: 2,
    title: "Desi Cow Ghee",
    
    // Original Keys for your PDF component
    keyProducts: ["500 g", "1 kg", "5 kg", "15 kg"],
    whyUs: "Naturally boosts immunity and bone health, is highly ideal for babies and growing children, and offers the best value in our export range.",
    
    // New UI Keys
    tag: "⭐ BESTSELLER",
    tagStyle: "bg-[#E6C687] text-[#5A381B]",
    subtitle: "Farm Fresh • Everyday Purity • Light Gold",
    features: [
      "Rich in CLA (Conjugated Linoleic Acid)",
      "Naturally boosts immunity & bone health",
      "Ideal for babies and growing children",
      "Safe and nourishing for all ages",
      "Best value in our export range"
    ],
    isDark: true,
    description: "Our Bestselling Desi Cow Ghee brings the essence of rural Indian dairy to your everyday kitchen. Sourced from high-quality indigenous cow breeds, it is carefully processed to retain maximum nutrition, yielding a beautiful light gold color. It strikes the perfect balance between uncompromising traditional quality and exceptional value.",
    healthBenefits: [
      "Exceptionally rich in CLA (Conjugated Linoleic Acid), which is known to aid in weight management and promote cardiovascular health.",
      "Acts as a natural immunity booster, providing sustained energy throughout the day.",
      "Excellent for joint lubrication and promoting skin elasticity.",
      "Highly recommended for massaging infants and supporting the physical development of growing children."
    ],
    culinaryUses: "The ultimate everyday kitchen staple. Boasts a high smoke point making it perfect for deep-frying, sautéing, roasting, and executing the perfect Indian tempering (tadka) without releasing harmful free radicals.",
    quality: "Medium fat content, light golden color, smooth granular finish, and a mild, universally appealing sweet aroma.",
    certifications: ["FSSAI Certified", "100% Natural", "Export Ready", "No Preservatives", "Lab Tested Every Batch"],
    image: desiGheeImg
  },
  {
    id: 3,
    title: "Buffalo Ghee",
    
    // Original Keys for your PDF component
    keyProducts: ["500 g", "1 kg", "5 kg", "15 kg"],
    whyUs: "It is the perfect choice for traditional sweets like halwa and kheer, as well as biryani and pulao. It is preferred by culinary professionals with bulk sizes available for trade.",
    
    // New UI Keys
    tag: "🏆 CHEF'S PICK",
    tagStyle: "bg-blue-50 text-blue-800",
    subtitle: "Rich & Creamy • High Fat • Cream White",
    features: [
      "Cream-white, full-bodied flavour",
      "Perfect for halwa, kheer & sweets",
      "Ideal for biryani, pulao & festive dishes",
      "Preferred by chefs & mithai professionals",
      "Bulk sizes available for trade"
    ],
    isDark: false,
    description: "A culinary masterpiece favored by commercial chefs and traditional sweet-makers. Buffalo milk is naturally richer, yielding a ghee with a significantly higher fat percentage and a striking cream-white hue. It undergoes a meticulous clarification process to ensure a robust, full-bodied flavor that can elevate any heavy, festive dish.",
    healthBenefits: [
      "A powerhouse of sustained energy, ideal for individuals with high physical activity levels.",
      "Contains higher levels of calcium and magnesium compared to cow ghee, promoting superior bone density.",
      "Rich in natural fats that support healthy weight gain and muscle building.",
      "Promotes deep sleep when consumed with warm milk at night (Ayurvedic remedy)."
    ],
    culinaryUses: "The undisputed king of traditional Indian sweets (mithai). It provides the signature rich texture for halwas, laddoos, and kheer. Commercially preferred for heavy, aromatic savory dishes like biryanis, qormas, and pulaos.",
    quality: "High fat content, striking cream-white color, thick creamy texture, and a robust, earthy flavor.",
    certifications: ["FSSAI Certified", "Lab Tested Every Batch", "100% Natural", "Export Ready"],
    image: buffaloGheeImg
  }
];
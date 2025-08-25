const ProductDetails = [
  {
    id: 1,
    name: "Organic Basmati Rice",
    alt: "A sack of premium basmati rice",
    category: "Agriculture",
    price: 1200,
    image: "/basmati.jpg",
    longDescription:
      "Naturally grown, long-grain basmati rice with a rich aroma. Ideal for biryani, pulao, and everyday meals.",
    features: ["100% organic", "Non-GMO", "Aged for 12 months"],
    nutrition: { calories: 365, sugar: "0g" },
    traceability: { farm: "Suryan Organic Farms, Punjab" },
    reviews: [
      { user: "Ravi", comment: "Best rice I’ve ever cooked with!" },
      { user: "Ananya", comment: "Super aromatic and fluffy." },
    ],
  },
  {
    id: 2,
    name: "Fresh Alphonso Mangoes",
    alt: "Juicy Alphonso mangoes",
    category: "Fruits and Vegetables",
    price: 899,
    image: "/mangoes.jpg",
    longDescription:
      "Handpicked Alphonso mangoes, known as the ‘King of Fruits’. Sweet, pulpy, and rich in vitamins.",
    features: ["Naturally ripened", "No artificial chemicals", "Rich in Vitamin A & C"],
    nutrition: { calories: 60, sugar: "14g" },
    traceability: { farm: "Ratnagiri Orchards, Maharashtra" },
    reviews: [
      { user: "Sonal", comment: "So sweet, like eating sunshine!" },
      { user: "Arjun", comment: "Fresh and delivered on time." },
    ],
  },
  {
    id: 3,
    name: "Grass-fed Cow Milk",
    alt: "Bottle of fresh milk",
    category: "Meat, Seafood & Dairy",
    price: 75,
    image: "/milk.jpg",
    longDescription:
      "Fresh and creamy cow’s milk from grass-fed cattle. Pasteurized and delivered daily.",
    features: ["Rich in calcium", "No preservatives", "Farm fresh"],
    nutrition: { calories: 42, sugar: "5g" },
    traceability: { farm: "Green Valley Dairy, Karnataka" },
    reviews: [
      { user: "Meera", comment: "My kids love the taste!" },
      { user: "Kabir", comment: "Feels like real farm milk." },
    ],
  },
  {
    id: 4,
    name: "Handwoven Cotton Kurta",
    alt: "Traditional cotton kurta",
    category: "Fashion",
    price: 1299,
    image: "/kurta.jpg",
    longDescription:
      "Handwoven cotton kurta made by rural artisans. Comfortable, breathable, and stylish.",
    features: ["100% cotton", "Handcrafted", "Eco-friendly dyes"],
    nutrition: { calories: "N/A", sugar: "N/A" },
    traceability: { farm: "Crafts of India Collective" },
    reviews: [
      { user: "Nidhi", comment: "Soft fabric and great fit!" },
      { user: "Rohan", comment: "Loved the craftsmanship." },
    ],
  },
  {
    id: 5,
    name: "Herbal Green Tea",
    alt: "Box of green tea bags",
    category: "Wellness",
    price: 450,
    image: "/tea.jpg",
    longDescription:
      "Refreshing blend of handpicked green tea leaves and herbs for relaxation and detox.",
    features: ["Rich in antioxidants", "Boosts metabolism", "Soothes stress"],
    nutrition: { calories: 0, sugar: "0g" },
    traceability: { farm: "Nilgiri Tea Estates, Tamil Nadu" },
    reviews: [
      { user: "Priya", comment: "Keeps me fresh all day!" },
      { user: "Dev", comment: "Perfect for morning routine." },
    ],
  },
  {
    id: 6,
    name: "Aloe Vera Gel",
    alt: "Jar of aloe vera gel",
    category: "Beauty",
    price: 299,
    image: "/aloe.jpg",
    longDescription:
      "Pure aloe vera gel for skin hydration, soothing sunburns, and natural skincare.",
    features: ["100% natural", "No parabens", "Multi-purpose use"],
    nutrition: { calories: "N/A", sugar: "N/A" },
    traceability: { farm: "Desert Bloom Aloe Farms, Rajasthan" },
    reviews: [
      { user: "Shreya", comment: "Great for my skin routine." },
      { user: "Tanvi", comment: "Soothes my sunburn instantly." },
    ],
  },
];

export default ProductDetails;
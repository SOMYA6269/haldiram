export const BRAND_RED = "bg-[#E31E24]";
export const BRAND_RED_TEXT = "text-[#E31E24]";
export const BRAND_RED_HOVER = "hover:bg-[#c4191f]";
export const BRAND_CREAM = "bg-[#FFF9F2]";

export const NAV_LINKS = [
  "Savouries",
  "Mithai",
  "Bakery",
  "Cookies and Chocolates",
  "Ready To Eat And Frozen",
  "Trail Mixes and Dry Fruits"
];

export const CATEGORY_SUBMENU = {
  "Savouries": [
    { name: "Namkeen", href: "/category/savouries/namkeen" },
    { name: "Snacks", href: "/category/savouries/snacks" },
    { name: "Chips", href: "/category/savouries/chips" },
    { name: "Mixtures", href: "/category/savouries/mixtures" }
  ],
  "Mithai": [
    { name: "Traditional Sweets", href: "/category/mithai/traditional" },
    { name: "Modern Sweets", href: "/category/mithai/modern" },
    { name: "Festival Special", href: "/category/mithai/festival" },
    { name: "Diet Sweets", href: "/category/mithai/diet" }
  ],
  "Bakery": [
    { name: "Bread", href: "/category/bakery/bread" },
    { name: "Cakes", href: "/category/bakery/cakes" },
    { name: "Cookies", href: "/category/bakery/cookies" },
    { name: "Pastries", href: "/category/bakery/pastries" }
  ],
  "Cookies and Chocolates": [
    { name: "Cookies", href: "/category/cookies-chocolates/cookies" },
    { name: "Chocolates", href: "/category/cookies-chocolates/chocolates" },
    { name: "Biscuits", href: "/category/cookies-chocolates/biscuits" },
    { name: "Wafer", href: "/category/cookies-chocolates/wafer" }
  ],
  "Ready To Eat And Frozen": [
    { name: "Ready Meals", href: "/category/ready-to-eat/meals" },
    { name: "Frozen Foods", href: "/category/ready-to-eat/frozen" },
    { name: "Instant Mixes", href: "/category/ready-to-eat/mixes" },
    { name: "Pickles", href: "/category/ready-to-eat/pickles" }
  ],
  "Trail Mixes and Dry Fruits": [
    { name: "Dry Fruits", href: "/category/trail-mix/fruits" },
    { name: "Trail Mix", href: "/category/trail-mix/mix" },
    { name: "Seeds", href: "/category/trail-mix/seeds" },
    { name: "Nuts", href: "/category/trail-mix/nuts" }
  ]
};

export const HEADER_NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Store Locator", href: "/store-locator" },
  { name: "Franchise", href: "/franchise" },
  { name: "Contact Us", href: "/contact" }
];

export const FOOTER_LINKS = {
  menu: [
    { name: "Savouries", href: "/category/Savouries" },
    { name: "Mithai", href: "/category/Mithai" },
    { name: "Bakery Cookies and Chocolates", href: "/category/Cookies and Chocolates" },
    { name: "Ready To Eat And Frozen", href: "/category/Ready To Eat And Frozen" },
    { name: "Trail Mixes and Dry Fruits", href: "/category/Trail Mixes and Dry Fruits" }
  ],

  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Find Your Nearest Store", href: "/store-locator" }
  ],

  corporate: [
    { name: "About Us", href: "/about" },
    { name: "Reward Points", href: "/rewards" },
    { name: "Dealership Form", href: "/franchise" },
    { name: "Corporate", href: "/corporate" }
  ],

  policies: [
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Returns & Cancellation", href: "/returns" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "CSR Policy", href: "/csr" }
  ]
};



export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2070&auto=format&fit=crop",
    title: "Great Taste Since 1937",
    subtitle: "Evolving with India's tastes to deliver the finest Flavours."
  },
  {
    id: 2,
    image: "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_3_1_1_1.jpg",
    title: "",
    subtitle: ""
  },
  {
    id: 3,
    image: "https://www.haldiram.com/media/wysiwyg/homepage/web_banner_2_1_1_1_1_.jpg",
    title: "Festive Gifting",
    subtitle: "Celebrate with our exclusive gift hampers."
  }
];

export const CATEGORIES = [
  { name: "Savouries", id: "Savouries", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=400&auto=format&fit=crop" },
  { name: "Mithai", id: "Mithai", image: "https://www.haldiram.com/media/catalog/product/1/_/1_18.png?auto=webp&format=png&width=1280&height=1600&fit=cover" },
  { name: "Cookies", id: "Cookies and Chocolates", image: "https://www.haldiram.com/media/catalog/product/1/_/1_2.png?auto=webp&format=png&width=1280&height=1600&fit=cover" },
  { name: "Frozen Foods", id: "Ready To Eat And Frozen", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=400&auto=format&fit=crop" },
  { name: "Dry Fruits", id: "Trail Mixes and Dry Fruits", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop" },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Coconut Dry Fruit Ladoo",
    category: "Mithai",
    price: 850,
    image: "https://www.haldiram.com/media/catalog/product/1/_/1_51.png?auto=webp&format=png&width=50&height=300&fit=cover",
    weight: "500g",
    description: "Exquisite diamond-shaped cashew fudge, delicately crafted with finest cashews and silver leaf. Perfect for gifting and celebrations.",
    tag: "Bestseller",
    rating: 4.8,
    reviews: 1247
  },
  {
    id: 2,
    name: "Traditional Gulab Jamun",
    category: "Mithai",
    price: 320,
    image: "https://www.haldiram.com/media/catalog/product/1/_/1_107.png?optimize=medium&fit=cover&height=30&width=300&auto=webp&format=png",
    weight: "500g",
    description: "Soft, spongy milk dumplings soaked in aromatic rose syrup. A timeless classic that melts in your mouth.",
    tag: "Premium",
    rating: 4.9,
    reviews: 892
  },
  {
    id: 3,
    name: "Rasgulla",
    category: "Mithai",
    price: 480,
    image: "https://www.haldiram.com/media/catalog/product/1/_/1_184.png?optimize=medium&fit=cover&height=50&width=300&auto=webp&format=png",
    weight: "500g",
    description: "Tiny gram flour pearls fried in ghee and soaked in cardamom-flavored sugar syrup. A festive favorite.",
    tag: "Festive",
    rating: 4.7,
    reviews: 654
  },
  {
    id: 4,
    name: "White RashBhari",
    category: "Mithai",
    price: 280,
    image: "https://www.haldiram.com/media/catalog/product/1/_/1_194.png?optimize=medium&fit=cover&height=50&width=250&auto=webp&format=png",
    weight: "500g",
    description: "Delicate cottage cheese dumplings in sweetened, cardamom-infused milk. A Bengali delicacy.",
    tag: "New",
    rating: 4.6,
    reviews: 423
  },
  {
    id: 5,
    name: "Kaju Roll",
    category: "Mithai",
    price: 650,
    image: "https://www.haldiram.com/media/catalog/product/1/_/1_133.png?optimize=medium&fit=cover&height=50&width=300&auto=webp&format=png",
    weight: "400g",
    description: "Premium cashew rolls coated with silver leaf. Made with the finest cashews for an authentic taste.",
    tag: "",
    rating: 4.5,
    reviews: 387
  },
  {
    id: 6,
    name: "Besan Ladoo",
    category: "Mithai",
    price: 380,
    image: "https://www.haldiram.com/media/catalog/product/1/_/1_10_1.png?optimize=medium&fit=cover&height=50&width=300&auto=webp&format=png",
    weight: "500g",
    description: "Roasted gram flour balls with ghee, sugar, and cardamom. A traditional winter favorite.",
    tag: "",
    rating: 4.4,
    reviews: 298
  },
  {
    id: 7,
    name: "Premium Bhujia Sev",
    category: "Savouries",
    price: 180,
    image: "https://www.haldiram.com/media/catalog/product/1/_/1_26.png?optimize=medium&fit=cover&height=50&width=300&auto=webp&format=png",
    weight: "400g",
    description: "Crispy, spicy moth bean flour noodles with authentic Indian spices. The perfect savory snack.",
    tag: "Classic",
    rating: 4.7,
    reviews: 756
  },
  {
    id: 8,
    name: "Methi Sev",
    category: "Savouries",
    price: 160,
    image: "https://www.haldiram.com/media/catalog/product/1/_/1_33_1.png?optimize=medium&fit=cover&height=50&width=300&auto=webp&format=png",
    weight: "350g",
    description: "Spicy potato and gram flour noodles with a perfect crunch. Made with traditional recipes.",
    tag: "Spicy",
    rating: 4.5,
    reviews: 432
  },
  {
    id: 9,
    name: "Ratlami Mixture",
    category: "Savouries",
    price: 200,
    image: "https://www.haldiram.com/media/catalog/product/f/o/fob.png?optimize=medium&fit=cover&height=50&width=300&auto=webp&format=png",
    weight: "400g",
    description: "A delightful mix of savory noodles, lentils, peanuts, and dry fruits. Perfect for entertaining.",
    tag: "",
    rating: 4.6,
    reviews: 521
  },
  {
    id: 10,
    name: "Chai Puri",
    category: "Savouries",
    price: 140,
    image: "https://www.haldiram.com/media/catalog/product/1/_/1_33.png?optimize=medium&fit=cover&height=50&width=300&auto=webp&format=png",
    weight: "350g",
    description: "Traditional salted crackers flavored with carom seeds. Perfect with tea or as appetizers.",
    tag: "",
    rating: 4.2,
    reviews: 187
  },
  {
    id: 11,
    name: "Khari Plain Puff",
    category: "Cookies and Chocolates",
    price: 350,
    image: "https://www.haldiram.com/media/catalog/product/1/_/1_145.png?optimize=medium&fit=cover&height=50&width=300&auto=webp&format=png",
    weight: "400g",
    description: "Premium butter cookies with chocolate chips and nuts. Perfect for gifting and celebrations.",
    tag: "",
    rating: 4.5,
    reviews: 345
  },
  {
    id: 12,
    name: "Premium Green Raisins",
    category: "Trail Mixes and Dry Fruits",
    price: 1200,
    image: "https://www.haldiram.com/media/catalog/product/1/_/1_12.jpg?optimize=medium&fit=cover&height=50&width=300&auto=webp&format=pjpg",
    weight: "500g",
    description: "Premium quality cashews, roasted and lightly salted. Rich in nutrients and perfect for snacking.",
    tag: "Premium",
    rating: 4.8,
    reviews: 678
  }
];

export const RECIPES = [
  { id: 1, title: "Punjabi Tadka Wrap", time: "15 mins", difficulty: "Easy", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop" },
  { id: 2, title: "Bhujia Sandwich", time: "5 mins", difficulty: "Moderate", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop" },
  { id: 3, title: "Mini Aloo Masala Toast", time: "20 mins", difficulty: "Easy", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop" },
];
/* ------------------------------
   CATEGORY → OFFICIAL BANNERS
--------------------------------*/
export const CATEGORY_BANNERS = {
  "Savouries": "https://www.haldiram.com/media/.renditions/wysiwyg/homepage/Savouries_Banner_1_.jpg",
  "Mithai": "https://www.haldiram.com/media/.renditions/wysiwyg/homepage/mithai_Banner.jpg",
  "Bakery": "https://www.haldiram.com/media/.renditions/wysiwyg/homepage/bakery_banner.jpg",
  "Cookies and Chocolates": "https://www.haldiram.com/media/wysiwyg/homepage/cookies_and_choco_banner.jpg",
  "Ready To Eat And Frozen": "https://www.haldiram.com/media/wysiwyg/homepage/ready_to_eat_banner.jpg",
  "Trail Mixes and Dry Fruits": "https://www.haldiram.com/media/wysiwyg/homepage/dryfruits_banner.jpg"
};

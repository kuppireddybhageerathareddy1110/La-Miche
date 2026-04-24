// ═══════════════════════════════════════════════════════════════════
// La Miche — Complete Data Layer
// ═══════════════════════════════════════════════════════════════════

export interface Product {
  id: number;
  name: string;
  alt: string;
  cat: string;
  price: number;
  desc: string;
  allergens: string[];
  badge: string;
  image: string;
}

export interface Special {
  name: string;
  cat: string;
  price: string;
  desc: string;
  image: string;
}

export interface RegionalItem {
  icon: string;
  region: string;
  title: string;
  items: string[];
}

export interface ProcessStep {
  n: string;
  title: string;
  text: string;
  icon: string;
}

export interface Testimonial {
  text: string;
  author: string;
  since: string;
  init: string;
}

// ── PRODUCTS ─────────────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  // Artisan Bread
  { id: 1, name: 'Country Sourdough', alt: 'Sourdough Loaf', cat: 'Artisan Bread', price: 280, desc: 'Wild-yeast starter, 36-hr cold ferment, tangy crumb and crackly crust', allergens: ['Gluten'], badge: 'bestseller', image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&auto=format&fit=crop' },
  { id: 2, name: 'Multigrain Loaf', alt: '', cat: 'Artisan Bread', price: 260, desc: 'Oat, flax, sunflower and sesame — dense, nutty and fibre-rich', allergens: ['Gluten', 'Seeds'], badge: '', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop' },
  { id: 3, name: 'Dark Rye Sourdough', alt: 'Roggenbrot', cat: 'Artisan Bread', price: 260, desc: '80% rye with caraway seeds, deeply sour and earthy', allergens: ['Gluten'], badge: '', image: 'https://flour.co.uk/wp-content/uploads/2021/04/MarriagesDarkRyeloaf-1-e1672827142751.jpg.webp?w=800&auto=format&fit=crop' },
  { id: 4, name: 'Rosemary Focaccia', alt: '', cat: 'Artisan Bread', price: 200, desc: 'Ligurian olive oil, coarse sea salt, fresh rosemary — airy and light', allergens: ['Gluten'], badge: '', image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=800&auto=format&fit=crop' },
  { id: 5, name: 'Ciabatta', alt: '', cat: 'Artisan Bread', price: 180, desc: 'Italian crusty white bread with enormous holes and enviable chew', allergens: ['Gluten'], badge: '', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&auto=format&fit=crop' },
  // Boulangerie
  { id: 6, name: 'Classic Baguette', alt: '', cat: 'Boulangerie', price: 80, desc: 'Long, thin loaf with crisp golden crust and feather-light crumb', allergens: ['Gluten'], badge: '', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop' },
  { id: 7, name: 'Brioche', alt: '', cat: 'Boulangerie', price: 160, desc: 'Light and sweet enriched bread — butter, eggs, golden pillowy crust', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&auto=format&fit=crop' },
  { id: 8, name: 'Pain de Campagne', alt: 'Boule', cat: 'Boulangerie', price: 220, desc: 'Rustic round loaf, mixed wheat/rye, thick crackly crust', allergens: ['Gluten'], badge: '', image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=800&auto=format&fit=crop' },
  // Viennoiserie
  { id: 9, name: 'Croissant au Beurre', alt: '', cat: 'Viennoiserie', price: 120, desc: '72-layer laminated dough, cultured French-style butter — the classic', allergens: ['Gluten', 'Dairy'], badge: 'bestseller', image: 'https://images.unsplash.com/photo-1568471173242-461f0a730452?w=800&auto=format&fit=crop' },
  { id: 10, name: 'Pain au Chocolat', alt: 'Chocolatine', cat: 'Viennoiserie', price: 130, desc: 'Croissant dough filled with two bars of deep Valrhona dark chocolate', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&auto=format&fit=crop' },
  { id: 11, name: 'Kouign-Amann', alt: '', cat: 'Viennoiserie', price: 190, desc: "Breton pastry: caramelised layers of butter and sugar — Breton for 'butter cake'", allergens: ['Gluten', 'Dairy'], badge: 'special', image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&auto=format&fit=crop' },
  { id: 12, name: 'Almond Danish', alt: '', cat: 'Viennoiserie', price: 130, desc: 'Flaky viennoiserie, frangipane cream, toasted flaked almonds', allergens: ['Gluten', 'Dairy', 'Nuts'], badge: '', image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=800&auto=format&fit=crop' },
  // Pâtisserie
  { id: 13, name: 'Tarte au Citron', alt: '', cat: 'Pâtisserie', price: 180, desc: 'Sicilian lemon curd in a crisp almond pastry shell, torched meringue', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: 'new', image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&auto=format&fit=crop' },
  { id: 14, name: 'Mille-Feuille', alt: 'Napoleon', cat: 'Pâtisserie', price: 200, desc: 'Thin puff pastry layers with vanilla pastry cream and fondant icing', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=800&auto=format&fit=crop' },
  { id: 15, name: 'Éclair au Chocolat', alt: '', cat: 'Pâtisserie', price: 160, desc: 'Oblong choux pastry filled with chocolate cream, dark mirror glaze', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=800&auto=format&fit=crop' },
  { id: 16, name: 'Macaron Assortment', alt: '', cat: 'Pâtisserie', price: 240, desc: 'Almond meringue shells with ganache — rose, pistachio, salted caramel', allergens: ['Nuts', 'Eggs'], badge: 'new', image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&auto=format&fit=crop' },
  { id: 17, name: 'Fruit Tart', alt: 'Tarte aux fruits', cat: 'Pâtisserie', price: 180, desc: 'Vanilla cream in a sweet shell, crowned with seasonal fresh fruits', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop' },
  { id: 18, name: 'Opéra Cake', alt: '', cat: 'Pâtisserie', price: 320, desc: 'Six layers of joconde biscuit soaked in coffee, with ganache and buttercream', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop' },
  // Cake Shop
  { id: 19, name: 'Chocolate Layer Cake', alt: '', cat: 'Cake Shop', price: 780, desc: 'Multi-layer dark chocolate sponge, chocolate ganache frosting', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop' },
  { id: 20, name: 'Black Forest Gateau', alt: 'Forêt-Noire', cat: 'Cake Shop', price: 860, desc: 'Chocolate sponge, Morello cherries, whipped cream, Kirsch', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&auto=format&fit=crop' },
  { id: 21, name: 'Tres Leches', alt: '', cat: 'Cake Shop', price: 680, desc: 'Sponge soaked in three milks — condensed, evaporated, cream', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: 'new', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&auto=format&fit=crop' },
  // Gluten-Free & Vegan
  { id: 22, name: 'GF Multigrain Bread', alt: '', cat: 'Gluten-Free & Vegan', price: 300, desc: 'Buckwheat, rice flour, millet, seeds — hearty, flavourful, wheat-free', allergens: ['Seeds'], badge: 'gf', image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=800&auto=format&fit=crop' },
  { id: 23, name: 'Vegan Chocolate Cake', alt: '', cat: 'Gluten-Free & Vegan', price: 580, desc: 'Almond flour, coconut cream frosting — no eggs, no dairy, no compromise', allergens: ['Nuts'], badge: 'vegan', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&auto=format&fit=crop' },
  { id: 24, name: 'GF Brownie', alt: '', cat: 'Gluten-Free & Vegan', price: 120, desc: 'Fudgy black bean and almond flour brownie, dark chocolate', allergens: ['Nuts'], badge: 'gf', image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&auto=format&fit=crop' },
  // Savory
  { id: 25, name: 'Quiche Lorraine', alt: '', cat: 'Savory', price: 220, desc: 'Egg tart with smoked bacon, Gruyère and a short-crust shell', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop' },
  { id: 26, name: 'Sausage Roll', alt: '', cat: 'Savory', price: 140, desc: 'Buttery puff pastry around seasoned pork sausage — golden and flaky', allergens: ['Gluten', 'Dairy'], badge: '', image: 'https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?w=800&auto=format&fit=crop' },
  // Cupcakes & Muffins
  { id: 27, name: 'Vanilla Cupcake', alt: '', cat: 'Cupcakes & Muffins', price: 85, desc: 'Small vanilla sponge cake with vanilla buttercream topping and sprinkles', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&auto=format&fit=crop' },
  { id: 28, name: 'Chocolate Cupcake', alt: '', cat: 'Cupcakes & Muffins', price: 90, desc: 'Chocolate sponge cupcake with rich chocolate frosting and cocoa powder', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop' },
  { id: 29, name: 'Blueberry Muffin', alt: '', cat: 'Cupcakes & Muffins', price: 95, desc: 'Muffin baked with fresh blueberries, lightly sweet and moist', allergens: ['Gluten', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&auto=format&fit=crop' },
  // Doughnuts
  { id: 30, name: 'Glazed Ring Doughnut', alt: '', cat: 'Doughnuts', price: 50, desc: 'Yeast doughnut with sweet sugar glaze coating, perfectly golden', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1556040220-4096d522378d?w=800&auto=format&fit=crop' },
 { id: 31, name: 'Chocolate Frosted Doughnut', alt: '', cat: 'Doughnuts', price: 55, desc: 'Yeast doughnut topped with chocolate icing and rainbow sprinkles', allergens: ['Gluten', 'Dairy', 'Eggs'], badge: '', image: 'https://www.biggerbolderbaking.com/wp-content/uploads/2020/11/Homemade-Dunkin-Donuts-WS-Thumb-500x375.jpg?w=800&auto=format&fit=crop' },
  { id: 32, name: 'Jelly-Filled Doughnut', alt: '', cat: 'Doughnuts', price: 60, desc: 'Round fried donut injected with fruit jam, dusted with sugar', allergens: ['Gluten', 'Eggs'], badge: '', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop' },
  // Bagels
  { id: 33, name: 'Plain Bagel', alt: '', cat: 'Bagels', price: 40, desc: 'Boiled-then-baked wheat bagel with shiny crust and chewy interior', allergens: ['Gluten'], badge: '', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop' },
  { id: 34, name: 'Sesame Bagel', alt: '', cat: 'Bagels', price: 45, desc: 'Classic bagel coated with toasted sesame seeds, nutty flavor', allergens: ['Gluten', 'Sesame'], badge: '', image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=800&auto=format&fit=crop' },
 { id: 35, name: 'Everything Bagel', alt: '', cat: 'Bagels', price: 50, desc: 'Topped with mix of seeds and spices (poppy, sesame, onion, garlic)', allergens: ['Gluten', 'Sesame'], badge: '', image: 'https://www.thespicehouse.com/cdn/shop/articles/Malik_Bagel_720x.jpg?v=1611356339?w=800&auto=format&fit=crop' },
//   { 
//   id: 3,
//   name: 'Dark Rye Sourdough',
//   alt: 'Dark rye sourdough loaf with rustic crust and caraway seeds',
//   cat: 'Artisan Bread',
//   price: 260,
//   desc: '80% rye with caraway seeds, deeply sour and earthy',
//   allergens: ['Gluten'],
//   badge: '',
//   image: 'https://images.unsplash.com/photo-1603362026977-6e7b5bc44b26?w=800&auto=format&fit=crop'
// },

// { 
//   id: 31,
//   name: 'Chocolate Frosted Doughnut',
//   alt: 'Yeast doughnut topped with glossy chocolate frosting and colorful sprinkles',
//   cat: 'Doughnuts',
//   price: 55,
//   desc: 'Yeast doughnut topped with chocolate icing and rainbow sprinkles',
//   allergens: ['Gluten', 'Dairy', 'Eggs'],
//   badge: '',
//   image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop'
// },

// { 
//   id: 35,
//   name: 'Everything Bagel',
//   alt: 'Bagel topped with sesame, poppy seeds, garlic, and onion seasoning',
//   cat: 'Bagels',
//   price: 50,
//   desc: 'Topped with mix of seeds and spices (poppy, sesame, onion, garlic)',
//   allergens: ['Gluten', 'Sesame'],
//   badge: '',
//   image: 'https://images.unsplash.com/photo-1581098359822-c1f24f4f5543?w=800&auto=format&fit=crop'
// },
];

export const CATEGORIES = ['All', 'Artisan Bread', 'Boulangerie', 'Viennoiserie', 'Pâtisserie', 'Cake Shop', 'Cupcakes & Muffins', 'Doughnuts', 'Bagels', 'Gluten-Free & Vegan', 'Savory'];

// ── SPECIALS ─────────────────────────────────────────────────────
export const SPECIALS: Special[] = [
  { name: 'Kouign-Amann', cat: 'Weekly Special', price: '₹190', desc: 'Breton caramel-butter pastry', image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&auto=format&fit=crop' },
  { name: 'Brioche Feuilletée', cat: 'Saturday Only', price: '₹160', desc: 'Layered enriched dough', image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&auto=format&fit=crop' },
  { name: 'Galette des Rois', cat: 'Weekend', price: '₹240', desc: 'Frangipane-filled king cake', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop' },
  { name: 'Miso Sourdough', cat: "Chef's Special", price: '₹310', desc: 'Umami-rich modern loaf', image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&auto=format&fit=crop' },
];

// ── REGIONAL ─────────────────────────────────────────────────────
export const REGIONAL: RegionalItem[] = [
  { icon: '🫓', region: 'Indian Subcontinent', title: 'Indian Breads', items: ['Naan (tandoor wheat bread)', 'Roti (flatbread)', 'Bhatura (fried leavened)', 'Pav (soft buns)', 'Nankhatai (cardamom shortbread)', 'Bakarkhani (sweet flatbread)', 'Kulcha (stuffed bread)'] },
  { icon: '🥐', region: 'France', title: 'Boulangerie Classique', items: ['Baguette (long thin loaf)', 'Croissant (butter-layered)', 'Brioche (enriched bread)', 'Mille-feuille (puff pastry layers)', 'Macaron (almond meringue)', 'Pain de Campagne (rustic boule)', 'Éclair (choux pastry)'] },
  { icon: '🥙', region: 'Middle East', title: 'Levantine Pastries', items: ['Pita (leavened flatbread)', 'Manakish (za\'atar flatbread)', 'Baklava (layered filo with nuts)', 'Knafeh (cheese pastry)', 'Ka\'ak (sesame bread ring)', 'Fatayer (spinach pie)', 'Labneh cheese spread'] },
  { icon: '🧆', region: 'East Asia', title: 'Asian Baked Goods', items: ['Baozi (steamed filled buns)', 'Custard Egg Tart (HK-style)', 'Mooncake (festival pastry)', 'Pineapple Bun (bolu)', 'Sesame Ball (fried sweet rice)', 'Melon Pan (melon-patterned bread)', 'Choco Pie (filled snack)'] },
  { icon: '🫔', region: 'Latin America', title: 'Pan & Dulce', items: ['Empanada (filled turnover)', 'Concha (shell-pattern sweet bread)', 'Pan de Muerto (Day of Dead bread)', 'Orejas (ear-shaped pastry)', 'Tres Leches (milk-soaked cake)', 'Arepa (corn bread)', 'Churro (fried pastry stick)'] },
];

// ── PROCESS ──────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  { n: '01', title: 'Source', text: 'We partner with heritage grain farmers across Maharashtra and Tamil Nadu, milling fresh every week.', icon: 'shield' },
  { n: '02', title: 'Mix & Ferment', text: 'Long cold fermentation — 18 to 36 hours — develops deep flavour and natural wild-yeast leavening.', icon: 'clock' },
  { n: '03', title: 'Shape & Proof', text: 'Hand-shaped by our bakers at 4 am, every loaf is given time to rise on its own terms.', icon: 'heart' },
  { n: '04', title: 'Fire-Bake', text: 'Our stone deck ovens hit 260°C — yielding that unmistakable crackling crust and open, airy crumb.', icon: 'flame' },
];

// ── TESTIMONIALS ─────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  { text: 'The sourdough is the finest I have tasted outside of Paris. The crust sings when you tap it.', author: 'Priya K.', since: 'Customer since 2019', init: 'PK' },
  { text: 'We order croissants every Saturday morning. Our family refuses to have any other. It has become a ritual.', author: 'Rahul M.', since: 'Customer since 2015', init: 'RM' },
  { text: 'Catered our whole wedding dessert table. Every guest stopped to ask where the pastries were from.', author: 'Ananya S.', since: 'Customer since 2021', init: 'AS' },
];

// ── TICKER ───────────────────────────────────────────────────────
export const TICKER_ITEMS = [
  'Baked Fresh at 4 am',
  'Heirloom Grain Flours',
  'Natural Sourdough Starter',
  'Cultured French Butter',
  'No Preservatives Ever',
  'Slow 36-Hour Fermentation',
  'Wood-Fired Stone Deck',
  'Award-Winning Craft Since 1987',
];

// ── GALLERY IMAGES ───────────────────────────────────────────────
export const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&auto=format&fit=crop', alt: 'Assorted artisan sourdough breads' },
  { src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop', alt: 'Crusty baguettes in basket' },
  { src: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&auto=format&fit=crop', alt: 'Freshly baked pastries' },
  { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop', alt: 'Rich chocolate cake' },
  { src: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&auto=format&fit=crop', alt: 'Colorful macarons arrangement' },
  { src: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&auto=format&fit=crop', alt: 'Fresh fruit tart on display' },
];

// ── AI ASSISTANT ─────────────────────────────────────────────────
export const AI_CHIPS = [
  "What's gluten-free?",
  'Best pastry for a birthday?',
  'Allergen information',
  "Today's specials",
  'What time do you open?',
  'Vegan options?',
];

export const MENU_CONTEXT = `You are the AI assistant for La Miche, a premium artisan bakery in Bengaluru, India.

OUR MENU (with prices in ₹):
ARTISAN BREAD: Country Sourdough ₹280, Multigrain Loaf ₹260, Dark Rye Sourdough ₹260, Rosemary Focaccia ₹200, Ciabatta ₹180
BOULANGERIE: Classic Baguette ₹80, Brioche ₹160, Pain de Campagne ₹220
VIENNOISERIE: Croissant au Beurre ₹120, Pain au Chocolat ₹130, Kouign-Amann ₹190, Almond Danish ₹130
PATISSERIE: Tarte au Citron ₹180, Mille-Feuille ₹200, Éclair au Chocolat ₹160, Macaron Assortment ₹240, Fruit Tart ₹180, Opéra Cake ₹320
CAKE SHOP: Chocolate Layer Cake ₹780, Black Forest Gateau ₹860, Tres Leches ₹680
GLUTEN-FREE & VEGAN: GF Multigrain Bread ₹300, Vegan Chocolate Cake ₹580, GF Brownie ₹120
SAVORY: Quiche Lorraine ₹220, Sausage Roll ₹140

GLUTEN-FREE OPTIONS: GF Multigrain Bread, Vegan Chocolate Cake, GF Brownie, Macaron Assortment
VEGAN OPTIONS: Vegan Chocolate Cake, GF Brownie (check availability)

HOURS: Mon-Fri 6:30am-7pm, Sat 7am-5pm, Sun 8am-2pm
LOCATION: 14 Gandhi Bazaar Cross, Basavanagudi, Bengaluru 560004
DELIVERY: Free above ₹600. Same-day order cutoff 11am.
PHONE: +91 80 2345 6789

Answer questions warmly and helpfully. Be concise (2-3 sentences max). Use **bold** for item names and prices. Do NOT make up info not in this context.`;

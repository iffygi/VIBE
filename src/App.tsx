import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart, MapPin, Search, Instagram, Twitter, Facebook, ArrowRight, Zap, Play, Star, ChevronRight, Mail } from 'lucide-react';
import { PRODUCTS, Product } from './constants';

// --- Components ---

const Navbar = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <button onClick={() => onNavigate('home')} className="text-3xl font-display font-black tracking-tighter text-white hover:text-vibe-neon transition-colors cursor-pointer">
            VIBE<span className="text-vibe-red">.</span>
          </button>
          <div className="hidden md:flex gap-6 uppercase font-display text-sm font-bold tracking-widest">
            <button onClick={() => onNavigate('products')} className="hover:text-vibe-neon transition-colors cursor-pointer">Flavors</button>
            <button onClick={() => onNavigate('about')} className="hover:text-vibe-neon transition-colors cursor-pointer">Our Story</button>
            <button onClick={() => onNavigate('locator')} className="hover:text-vibe-neon transition-colors cursor-pointer">Find Us</button>
            <button onClick={() => onNavigate('culture')} className="hover:text-vibe-neon transition-colors cursor-pointer">Culture</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Search size={20} /></button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-vibe-red text-[10px] flex items-center justify-center rounded-full">0</span>
          </button>
          <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"><Menu size={24} /></button>
          <button className="hidden md:block btn-primary py-2 px-6 text-xs">Shop Now</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-3xl font-display font-black">VIBE<span className="text-vibe-red">.</span></span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 text-4xl font-display font-bold uppercase">
              <button onClick={() => { onNavigate('products'); setIsMobileMenuOpen(false); }} className="text-left hover:text-vibe-neon">Flavors</button>
              <button onClick={() => { onNavigate('about'); setIsMobileMenuOpen(false); }} className="text-left hover:text-vibe-neon">Our Story</button>
              <button onClick={() => { onNavigate('locator'); setIsMobileMenuOpen(false); }} className="text-left hover:text-vibe-neon">Find Us</button>
              <button onClick={() => { onNavigate('culture'); setIsMobileMenuOpen(false); }} className="text-left hover:text-vibe-neon">Culture</button>
            </div>
            <div className="mt-auto flex gap-6">
              <Instagram size={24} />
              <Twitter size={24} />
              <Facebook size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onExplore }: { onExplore: () => void }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video Placeholder / Animation */}
      <div className="absolute inset-0 bg-vibe-burgundy">
        <img 
          src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1920" 
          alt="Bubbles" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-4 py-1 bg-vibe-neon text-black font-display font-black text-xs uppercase tracking-widest transform skew-x-[-12deg]">
            New Flavor Drop
          </span>
          <h1 className="text-6xl md:text-9xl mb-8 leading-[0.85] tracking-tighter">
            NOT YOUR <br /> <span className="text-vibe-neon">AVERAGE</span> <br /> FIZZ.
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-medium">
            23 flavors. One unique vibe. Experience the bold, rebellious taste that's been breaking rules since day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={onExplore} className="btn-primary">Explore Flavors</button>
            <button className="btn-outline flex items-center justify-center gap-2">
              <Play size={18} /> Watch the Vibe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 md:right-20 hidden lg:block"
      >
        <div className="w-64 h-96 bg-vibe-red/20 border border-white/10 glass p-4 transform rotate-12">
           <img src={PRODUCTS[0].image} alt="Can" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
        </div>
      </motion.div>
    </section>
  );
};

const ProductShowcase = ({ onSelect }: { onSelect: (p: Product) => void }) => {
  return (
    <section id="flavors" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl mb-4">Pick Your <span className="text-vibe-red">Poison.</span></h2>
            <p className="text-white/60 max-w-md">From the original classic to neon-charged citrus, find the VIBE that speaks to you.</p>
          </div>
          <button className="flex items-center gap-2 text-vibe-neon font-display font-bold uppercase tracking-widest hover:gap-4 transition-all">
            View All Flavors <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative h-[600px] overflow-hidden cursor-pointer"
              onClick={() => onSelect(product)}
            >
              <div className="absolute inset-0 bg-vibe-burgundy transition-transform duration-700 group-hover:scale-110">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-vibe-neon font-display font-black text-xs uppercase tracking-widest mb-2 block">{product.tagline}</span>
                <h3 className="text-4xl mb-4">{product.name}</h3>
                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="btn-primary py-2 px-6 text-xs transform-none skew-x-0">Learn More</button>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill={s <= 4 ? "#00ff41" : "none"} color="#00ff41" />)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandStory = () => {
  return (
    <section className="py-32 bg-vibe-burgundy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="text-[20vw] font-display font-black text-white whitespace-nowrap animate-pulse">REBEL REBEL REBEL</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl mb-8">Born in a <br /> <span className="text-vibe-neon">Drugstore.</span> <br /> Raised on the <br /> Streets.</h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Since 1885, we've been the original outlier. While others played it safe with cola, we mixed 23 flavors to create something that couldn't be categorized. 
          </p>
          <p className="text-white/60 mb-12">
            VIBE isn't just a drink; it's a statement. It's for the creators, the gamers, the late-night thinkers, and the ones who refuse to blend in.
          </p>
          <button className="btn-outline">Read the Full Saga</button>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[3/4] bg-black overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1514516348920-f5d928844fe9?auto=format&fit=crop&q=80&w=800" alt="Vintage" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-[3/4] bg-black overflow-hidden mt-12"
          >
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" alt="Gaming" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FlavorExperience = () => {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-6xl md:text-8xl mb-4 tracking-tighter">The <span className="text-gradient">Sensory</span> Trip.</h2>
        <p className="text-white/60 max-w-2xl mx-auto">Scroll to feel the fizz. Hover to taste the vibe.</p>
      </div>

      <div className="flex flex-col gap-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 px-6">
            <h3 className="text-4xl mb-6 flex items-center gap-4"><Zap className="text-vibe-neon" /> The Snap.</h3>
            <p className="text-xl text-white/70 leading-relaxed">
              That first crack of the can. A pressurized release of pure potential. It's the sound of a new chapter starting.
            </p>
          </div>
          <div className="order-1 md:order-2 h-[400px] bg-vibe-red/20 relative group">
             <img src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=1200" alt="Fizz" className="w-full h-full object-cover mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
           <div className="h-[400px] bg-vibe-neon/10 relative group">
             <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1200" alt="Bubbles" className="w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
          </div>
          <div className="px-6">
            <h3 className="text-4xl mb-6 flex items-center gap-4"><Star className="text-vibe-electric" /> The 23.</h3>
            <p className="text-xl text-white/70 leading-relaxed">
              A symphony of flavors that dance on your palate. You can't quite name them all, and that's exactly the point.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const feed = [
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400",
  ];

  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl mb-4">The <span className="text-vibe-neon">VIBE</span> Tribe.</h2>
          <p className="text-white/60">Tag #VIBEON for a chance to be featured.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {feed.map((img, i) => (
            <div key={i} className="aspect-square bg-white/5 overflow-hidden group relative">
              <img src={img} alt="Social" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram size={32} />
              </div>
            </div>
          ))}
        </div>

        <div className="glass p-12 text-center max-w-4xl mx-auto">
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={24} fill="#00ff41" color="#00ff41" />)}
          </div>
          <p className="text-2xl md:text-3xl font-display italic mb-8">
            "I've tried every soda on the market, but nothing hits like VIBE. It's the only thing that keeps me focused during my 12-hour streams."
          </p>
          <span className="font-display font-bold uppercase tracking-widest text-vibe-neon">— @GamerPro99</span>
        </div>
      </div>
    </section>
  );
};

const StoreLocator = () => {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-6xl mb-8">Find Your <br /> <span className="text-vibe-red">Fix.</span></h2>
          <p className="text-xl text-white/70 mb-12">
            Thirsty? We're closer than you think. Use our interactive map to find the nearest VIBE retailer.
          </p>
          <div className="flex gap-4 mb-12">
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-vibe-neon" size={20} />
              <input 
                type="text" 
                placeholder="Enter Zip Code or City" 
                className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 focus:outline-none focus:border-vibe-neon transition-colors"
              />
            </div>
            <button className="btn-primary transform-none skew-x-0">Search</button>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="glass p-6 flex justify-between items-center group cursor-pointer hover:border-vibe-neon transition-colors">
                <div>
                  <h4 className="font-bold mb-1">Corner Market #{i}</h4>
                  <p className="text-sm text-white/50">123 Vibe St, New York, NY</p>
                </div>
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            ))}
          </div>
        </div>
        <div className="h-[600px] bg-zinc-900 relative overflow-hidden">
          {/* Mock Map */}
          <div className="absolute inset-0 opacity-30 grayscale contrast-125">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" alt="Map" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-8 bg-vibe-red rounded-full border-4 border-white shadow-[0_0_20px_rgba(139,0,0,0.8)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-32">
          <div className="col-span-2">
            <span className="text-5xl font-display font-black mb-8 block">VIBE<span className="text-vibe-red">.</span></span>
            <p className="text-white/50 max-w-sm mb-8">
              The original 23-flavor blend. Unapologetically bold since 1885. Join the rebellion.
            </p>
            <div className="flex gap-6">
              <Instagram className="hover:text-vibe-neon cursor-pointer transition-colors" />
              <Twitter className="hover:text-vibe-neon cursor-pointer transition-colors" />
              <Facebook className="hover:text-vibe-neon cursor-pointer transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li className="hover:text-white cursor-pointer">Flavors</li>
              <li className="hover:text-white cursor-pointer">Store Locator</li>
              <li className="hover:text-white cursor-pointer">Merch Store</li>
              <li className="hover:text-white cursor-pointer">Culture Hub</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-8">Support</h4>
            <ul className="space-y-4 text-white/60">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="glass p-12 mb-32 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-3xl mb-2">Join the Inner Circle.</h3>
            <p className="text-white/50">Get early access to flavor drops and exclusive merch.</p>
          </div>
          <div className="flex w-full md:w-auto gap-4">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 md:w-64 bg-white/5 border border-white/10 px-6 py-4 focus:outline-none focus:border-vibe-neon"
            />
            <button className="btn-primary transform-none skew-x-0 px-6">Join</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-white/30 uppercase tracking-widest">
          <p>© 2026 VIBE BEVERAGE CO. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED FOR THE REBELS.</p>
        </div>
      </div>
    </footer>
  );
};

const ProductDetail = ({ product, onBack }: { product: Product, onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black overflow-y-auto"
    >
      <nav className="p-8 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <ArrowRight className="rotate-180" size={20} /> Back to Flavors
        </button>
        <span className="text-2xl font-display font-black">VIBE<span className="text-vibe-red">.</span></span>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="relative aspect-square bg-zinc-900 overflow-hidden"
        >
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <span className="text-vibe-neon font-display font-black text-sm uppercase tracking-widest mb-4 block">{product.tagline}</span>
          <h1 className="text-7xl md:text-9xl mb-8 leading-none">{product.name}</h1>
          <p className="text-2xl text-white/80 mb-12 leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="glass p-4 text-center">
              <span className="block text-xs text-white/40 uppercase mb-1">Calories</span>
              <span className="text-2xl font-display font-bold">{product.nutrition.calories}</span>
            </div>
            <div className="glass p-4 text-center">
              <span className="block text-xs text-white/40 uppercase mb-1">Sugar</span>
              <span className="text-2xl font-display font-bold">{product.nutrition.sugar}g</span>
            </div>
            <div className="glass p-4 text-center">
              <span className="block text-xs text-white/40 uppercase mb-1">Caffeine</span>
              <span className="text-2xl font-display font-bold">{product.nutrition.caffeine}</span>
            </div>
          </div>

          <div className="flex gap-6">
            <button className="btn-primary flex-1">Add to Cart</button>
            <button className="btn-outline flex-1">Find in Store</button>
          </div>

          <div className="mt-16">
            <h4 className="font-display font-bold uppercase tracking-widest mb-6 text-sm">Ingredients</h4>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map(ing => (
                <span key={ing} className="px-3 py-1 bg-white/5 text-xs text-white/60 border border-white/10">{ing}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ExitIntentPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="max-w-xl w-full bg-vibe-burgundy p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4">
          <button onClick={onClose}><X size={24} /></button>
        </div>
        <div className="relative z-10 text-center">
          <Zap className="text-vibe-neon mx-auto mb-6" size={48} />
          <h2 className="text-5xl mb-4">Don't Leave <br /> <span className="text-vibe-neon">Dry.</span></h2>
          <p className="text-xl text-white/70 mb-8">
            Join the VIBE circle and get 20% off your first order. No spam, just pure energy.
          </p>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="w-full bg-black/40 border border-white/10 px-6 py-4 focus:outline-none focus:border-vibe-neon"
            />
            <button className="btn-primary transform-none skew-x-0">Claim My Discount</button>
          </div>
          <button onClick={onClose} className="mt-6 text-xs text-white/40 uppercase tracking-widest hover:text-white transition-colors">No thanks, I'll pay full price</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setShowExitPopup(true);
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen selection:bg-vibe-neon selection:text-black">
      <Navbar onNavigate={navigate} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onExplore={() => navigate('products')} />
            <ProductShowcase onSelect={(p) => setSelectedProduct(p)} />
            <BrandStory />
            <FlavorExperience />
            <SocialProof />
            <StoreLocator />
          </>
        )}

        {currentPage === 'products' && (
          <div className="pt-32">
            <ProductShowcase onSelect={(p) => setSelectedProduct(p)} />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="pt-32">
            <BrandStory />
          </div>
        )}

        {currentPage === 'locator' && (
          <div className="pt-32">
            <StoreLocator />
          </div>
        )}

        {currentPage === 'culture' && (
          <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
            <h2 className="text-7xl mb-16">Culture <span className="text-vibe-neon">Hub.</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 group cursor-pointer">
                <div className="aspect-video bg-zinc-900 mb-6 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" alt="Music" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <span className="text-vibe-neon text-xs font-bold uppercase tracking-widest mb-2 block">Music</span>
                <h3 className="text-3xl mb-4">VIBE Sessions: Live from the Underground</h3>
                <p className="text-white/60">We're bringing the loudest bands to the smallest stages. Check out the lineup.</p>
              </div>
              <div className="glass p-8 group cursor-pointer">
                <div className="aspect-video bg-zinc-900 mb-6 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" alt="Gaming" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <span className="text-vibe-neon text-xs font-bold uppercase tracking-widest mb-2 block">Gaming</span>
                <h3 className="text-3xl mb-4">The Neon Cup: $50k Tournament</h3>
                <p className="text-white/60">Think you've got the skills? Register now for the biggest VIBE tournament yet.</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showExitPopup && (
          <ExitIntentPopup onClose={() => setShowExitPopup(false)} />
        )}
      </AnimatePresence>

      {/* Sticky CTA */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:block">
        <button className="w-16 h-16 bg-vibe-red rounded-full flex items-center justify-center shadow-2xl hover:bg-vibe-neon hover:text-black transition-all group">
          <ShoppingCart size={24} />
          <span className="absolute right-full mr-4 bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Quick Shop</span>
        </button>
      </div>
    </div>
  );
}

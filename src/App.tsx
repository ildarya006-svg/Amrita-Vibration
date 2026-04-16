/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Music, 
  Sparkles, 
  Mic2, 
  Waves, 
  Star, 
  Mail, 
  MapPin,
  Instagram, 
  Youtube, 
  ArrowRight,
  Menu,
  X,
  Volume2,
  Moon,
  ShieldCheck,
  Lock,
  Zap,
  CheckCircle,
  MessageCircle,
  Bell
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// --- Components ---

const Mandala = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-gold/10 rotate-slow">
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow)">
      {[...Array(12)].map((_, i) => (
        <path
          key={i}
          d="M100 100 Q120 40 100 0 Q80 40 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
      {[...Array(24)].map((_, i) => (
        <circle
          key={i}
          cx="100"
          cy="40"
          r="1"
          fill="currentColor"
          transform={`rotate(${i * 15} 100 100)`}
        />
      ))}
    </g>
  </svg>
);

const FlowerOfLife = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gold/5">
    <defs>
      <pattern id="flower" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="10" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <circle cx="0" cy="10" r="10" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <circle cx="20" cy="10" r="10" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <circle cx="10" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <circle cx="10" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="0.1" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#flower)" />
  </svg>
);

const Merkaba = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-violet/5">
    <path d="M50 5 L95 80 L5 80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <path d="M50 95 L95 20 L5 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

const WaveDivider = ({ flip = false, color = "var(--void)" }) => (
  <div className={`absolute left-0 w-full leading-[0] z-10 ${flip ? "bottom-0 rotate-180" : "top-0"}`}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px]">
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        fill={color}
      />
    </svg>
  </div>
);

const CosmicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-void overflow-hidden">
      {/* Radial Overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#04000a_80%)]" />
      
      {/* Nebula Layers */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_30%,#6b21a8_0%,transparent_50%)] blur-[100px]"
      />
      <motion.div 
        animate={{ 
          scale: [1.3, 1, 1.3],
          opacity: [0.1, 0.5, 0.1],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_70%_70%,#e879a1_0%,transparent_50%)] blur-[100px]"
      />
      
      {/* Stars - 200 dots */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: Math.random(),
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh"
            }}
            animate={{ 
              opacity: [0.2, 1, 0.2],
              y: [null, "-=20"] 
            }}
            transition={{ 
              opacity: {
                duration: 2 + Math.random() * 4, 
                repeat: Infinity, 
                delay: Math.random() * 5 
              },
              y: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + "px",
              height: Math.random() * 2 + "px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-violet to-rose py-3 px-6 shadow-2xl flex justify-center items-center gap-4 md:gap-8"
        >
          <p className="text-white font-cinzel text-[10px] md:text-sm tracking-widest font-bold text-center">
            ✦ The field is calling you — limited resonance remains
          </p>
          <a 
            href="#contact" 
            className="bg-white text-void px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gold transition-colors"
          >
            ✦ Reserve Now
          </a>
          <button 
            onClick={() => setIsDismissed(true)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-void/90 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative glass max-w-lg w-full p-12 rounded-[3rem] border-gold/20 text-center shadow-[0_0_100px_rgba(107,33,168,0.3)]"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-luminance/40 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-8 text-gold">
              <Bell size={32} className="animate-bounce" />
            </div>
            <h2 className="text-3xl font-cinzel mb-4">Wait, Seeker...</h2>
            <p className="text-luminance/70 font-cormorant italic text-xl mb-8">
              Your frequency gift is waiting for you in the void.
            </p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full bg-void/50 border border-white/10 rounded-sm px-6 py-4 focus:border-gold outline-none transition-colors font-lato"
              />
              <button className="w-full py-5 bg-gold text-void font-cinzel font-bold text-lg tracking-widest rounded-sm transition-all shadow-[0_0_20px_rgba(245,200,66,0.3)]">
                ✦ CLAIM YOUR GIFT
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const FloatingContact = () => {
  return (
    <motion.a
      href="https://wa.me/1234567890?text=Hi%20Amrita,%20I%20feel%20called%20to%20connect..."
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] w-14 h-14 bg-gold text-void rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,200,66,0.5)] transition-shadow hover:shadow-[0_0_50px_rgba(245,200,66,0.7)]"
      aria-label="Connect on WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "✦ Resonance", href: "#about" },
    { name: "✦ Offerings", href: "#services" },
    { name: "✦ Experience", href: "#testimonials" },
    { name: "✦ Connect", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "glass py-4" : "py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
            <Volume2 className="text-gold w-5 h-5" />
          </div>
          <span className="font-cinzel text-xl tracking-widest text-gold">AMRITA</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="font-lato text-sm uppercase tracking-[0.2em] hover:text-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-gold text-gold font-cinzel text-sm tracking-widest hover:bg-gold hover:text-void transition-all"
          >
            ✦ OPEN PORTAL
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold" 
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] bg-void flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-8 right-8 text-gold" 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-cinzel text-3xl text-gold tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-8 px-10 py-4 border border-gold text-gold font-cinzel text-xl tracking-widest">
              ✦ OPEN PORTAL
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FrequencyTuner = () => {
  const [frequency, setFrequency] = useState(432);
  const [isTuning, setIsTuning] = useState(false);

  return (
    <div className="relative py-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-12 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-lato text-gold text-xs uppercase tracking-[0.5em] mb-4 block font-bold"
        >
          ✦ RESONANCE TUNER
        </motion.span>
        <h2 className="text-3xl md:text-5xl font-cinzel mb-4">Find Your Soul's Pitch ✦</h2>
        <p className="text-luminance/60 font-lato max-w-md mx-auto italic">
          Slide through the frequencies of the void. Feel the shift in the field.
        </p>
      </div>

      <div className="relative w-full max-w-2xl px-6 h-64 flex items-center justify-center">
        {/* Visualizer Waves */}
        <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-20">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                height: isTuning ? [20, Math.random() * 150 + 50, 20] : [10, 30, 10],
                backgroundColor: isTuning ? "var(--gold)" : "var(--violet)"
              }}
              transition={{ 
                duration: 0.5 + Math.random(), 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 rounded-full"
            />
          ))}
        </div>

        {/* The Slider */}
        <div className="relative z-20 w-full group">
          <input 
            type="range" 
            min="396" 
            max="963" 
            value={frequency}
            onChange={(e) => {
              setFrequency(parseInt(e.target.value));
              setIsTuning(true);
              setTimeout(() => setIsTuning(false), 1000);
            }}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
          />
          <div className="mt-8 flex justify-between font-mono text-[10px] tracking-widest text-luminance/40">
            <span>396 HZ (ROOT)</span>
            <span className="text-gold text-lg font-cinzel tracking-[0.3em]">{frequency} HZ</span>
            <span>963 HZ (CROWN)</span>
          </div>
        </div>
      </div>

      {/* Ambient Glow that reacts to frequency */}
      <motion.div 
        animate={{ 
          scale: isTuning ? 1.5 : 1,
          opacity: isTuning ? 0.3 : 0.1,
          backgroundColor: frequency > 600 ? "var(--rose)" : "var(--violet)"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] pointer-events-none"
      />
    </div>
  );
};

const FrequencyGrid = () => {
  return (
    <div className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "396 HZ", effect: "Liberation", color: "from-rose/20" },
            { label: "417 HZ", effect: "Undoing", color: "from-violet/20" },
            { label: "528 HZ", effect: "Miracles", color: "from-gold/20" },
            { label: "639 HZ", effect: "Connecting", color: "from-rose/20" }
          ].map((node, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`relative glass p-8 rounded-2xl border-white/5 bg-gradient-to-br ${node.color} to-transparent group cursor-pointer overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Sparkles size={40} />
              </div>
              <h4 className="font-cinzel text-gold text-xl mb-2">{node.label}</h4>
              <p className="font-lato text-xs uppercase tracking-widest text-luminance/40 group-hover:text-luminance transition-colors">
                ✦ {node.effect}
              </p>
              <motion.div 
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className="absolute inset-0 bg-white/5 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Unique Background: Central Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(107,33,168,0.1)_0%,transparent_70%)]" />
      
      {/* Sacred Geometry Watermark */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <FlowerOfLife />
      </div>

      {/* Mandala Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] opacity-40 pointer-events-none">
        <Mandala />
      </div>

      <motion.div style={{ y: y1, opacity }} className="text-center z-10">
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: [
                "0 0 20px rgba(245, 200, 66, 0.2)",
                "0 0 40px rgba(245, 200, 66, 0.4)",
                "0 0 20px rgba(245, 200, 66, 0.2)"
              ]
            }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut",
              textShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="text-4xl md:text-7xl lg:text-8xl font-black tracking-[0.3em] leading-tight mb-6 text-gold relative z-10"
          >
            YOUR VOICE IS THE <br />
            ORIGINAL LIGHT
          </motion.h1>
          
          {/* Soul Echo */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: [0, 0.1, 0],
              y: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute inset-0 text-4xl md:text-7xl lg:text-8xl font-black tracking-[0.3em] leading-tight mb-6 text-gold/20 blur-sm pointer-events-none"
          >
            YOUR VOICE IS THE <br />
            ORIGINAL LIGHT
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-8"
        >
          <motion.span 
            animate={{ 
              opacity: [0.6, 1, 0.6],
              scale: [0.98, 1, 0.98]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="font-cormorant italic text-luminance text-xl md:text-2xl lg:text-3xl tracking-wide block"
          >
            You are not a body with a voice. You are a frequency remembering its source.
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-luminance/70 font-lato tracking-[0.4em] uppercase mb-12"
        >
          "Sound is the bridge between the seen and the unseen."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 200, 66, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-violet to-rose text-luminance font-cinzel font-bold text-lg tracking-widest border border-gold/30 rounded-sm transition-all flex items-center gap-3"
          >
            ✦ OPEN YOUR PORTAL
          </motion.button>
          <motion.button 
            whileHover={{ backgroundColor: "rgba(107, 33, 168, 1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-white/20 glass text-luminance font-cinzel text-lg tracking-widest rounded-sm transition-all"
          >
            ✦ HEAR THE FREQUENCIES
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ 
          opacity: { duration: 2, repeat: Infinity, delay: 2 } 
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <Waves className="text-gold w-8 h-8 rotate-90" />
      </motion.div>
      <WaveDivider flip />
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Unique Background: Aurora Flow */}
      <div className="absolute inset-0 aurora-bg -z-10 opacity-20" />
      
      {/* Sacred Geometry Watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.06] pointer-events-none">
        <Merkaba />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Column: Circular Image with Orbiting Dot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Gold Ring Border */}
            <motion.div 
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(245, 200, 66, 0.1)",
                  "0 0 60px rgba(245, 200, 66, 0.3)",
                  "0 0 20px rgba(245, 200, 66, 0.1)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-2 border-gold/40 p-4"
            >
              <div className="w-full h-full rounded-full overflow-hidden border border-gold/20">
                <img 
                  src="https://picsum.photos/seed/amrita-vessel/800/800" 
                  alt="Amrita Vibration - The Vessel" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            {/* Orbiting Dot Animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full shadow-[0_0_15px_rgba(245,200,66,0.8)]" />
            </motion.div>

            {/* Decorative Rings */}
            <div className="absolute inset-[-40px] rounded-full border border-violet/10 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-[-60px] rounded-full border border-rose/5 animate-[spin_45s_linear_infinite_reverse]" />
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-lato text-gold text-xs uppercase tracking-[0.5em] mb-4 block font-bold">✦ THE VESSEL</span>
          <h2 className="text-4xl md:text-6xl mb-8 leading-tight font-cinzel">
            You are the Instrument ✦ <br />
            <span className="text-rose">A Symphony of Stardust</span>
          </h2>
          
          <div className="space-y-6 text-lg text-luminance/80 leading-relaxed font-lato">
            <p>
              You are not merely listening. You are remembering. Your journey begins in the profound stillness of the heart, where the first vibration was born. You discover your voice not as a tool for speech, but as a sacred channel for the infinite.
            </p>
            <p>
              You return to the primal. You use your breath as a bridge and your sound as a key. You recalibrate your energetic field, dissolving the static of time and space. You awaken the dormant light that has always lived within your cells.
            </p>
            <p>
              You join a constellation of seekers. You strip away the noise to remember your original, unadulterated frequency. You are the music of the spheres, finally coming home to itself.
            </p>
          </div>

          {/* Stat Row */}
          <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-3 gap-4">
            <div className="text-center md:text-left">
              <div className="text-gold text-2xl md:text-3xl font-cinzel mb-1">400+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Lives Transformed</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-gold text-2xl md:text-3xl font-cinzel mb-1">12 Years</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Of Practice</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-gold text-2xl md:text-3xl font-cinzel mb-1">30+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Countries Reached</div>
            </div>
          </div>
        </motion.div>
      </div>
      <WaveDivider flip />
    </section>
  );
};

const Services = () => {
  const offerings = [
    {
      title: "✦ VIBRATIONAL ALIGNMENT",
      description: "You feel the weight of unspoken truths. You receive the resonance of the void. You awaken your dormant light through private frequency mapping.",
      price: "From €144",
      cta: "✦ Open Your Portal",
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 border border-gold/30 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
          <Mic2 className="w-8 h-8 text-gold" />
        </div>
      ),
      popular: false
    },
    {
      title: "✦ COLLECTIVE RESONANCE",
      description: "You join the field. You weave your sound with the constellation. You remember the original harmony in a shared sacred space.",
      price: "From €33",
      cta: "✦ Join the Circle",
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <Waves className="w-10 h-10 text-gold animate-pulse" />
        </div>
      ),
      popular: true
    },
    {
      title: "✦ THE VOICE PORTAL",
      description: "You open the channel. You discover the language of the stars. You become the instrument of the infinite through deep vocal alchemy.",
      price: "From €888",
      cta: "✦ Begin Your Mastery",
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 border border-gold/20 rounded-full" />
          <div className="absolute inset-2 border border-gold/10 rounded-full rotate-45" />
          <Sparkles className="w-8 h-8 text-gold" />
        </div>
      ),
      popular: false
    }
  ];

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Unique Background: Deep Violet Nebula */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(107,33,168,0.15)_0%,transparent_50%)]" />
      
      {/* Sacred Geometry Watermark */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <FlowerOfLife />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-lato text-gold text-xs uppercase tracking-[0.5em] mb-4 block font-bold"
          >
            ✦ PORTALS OF SOUND
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mt-4 font-cinzel"
          >
            Reclaim Your Frequency ✦ <br />
            The Echo of the Void
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -15 }}
              className="relative glass p-10 rounded-2xl border-t-2 border-gold/50 flex flex-col h-full transition-all duration-500 hover:shadow-[0_20px_50px_rgba(107,33,168,0.2)]"
            >
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose text-void px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  ✦ HIGHEST RESONANCE
                </div>
              )}
              
              <div className="mb-8 flex justify-center">{item.icon}</div>
              
              <h3 className="text-2xl mb-4 font-cinzel tracking-wider text-center">{item.title}</h3>
              
              <p className="text-luminance/60 leading-relaxed mb-8 font-lato text-center flex-grow">
                {item.description}
              </p>
              
              <div className="mt-auto text-center">
                <div className="text-gold font-cinzel text-2xl mb-2">{item.price}</div>
                <div className="text-rose text-[10px] uppercase tracking-widest font-bold mb-6">Only 4 spots remaining this month</div>
                <button className="w-full py-4 border border-gold/30 hover:bg-gold hover:text-void transition-all font-cinzel text-sm tracking-widest rounded-sm">
                  {item.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <WaveDivider flip />
    </section>
  );
};

const Media = () => {
  const tracks = [
    { title: "✦ Galactic Heart Opening — 432 Hz", duration: "12:44", progress: 35 },
    { title: "✦ Void Tone Meditation — Root Activation", duration: "08:22", progress: 60 },
    { title: "✦ Pleiadean Lullaby — Sleep Induction", duration: "22:10", progress: 15 }
  ];

  return (
    <section id="media" className="py-32 px-6 relative overflow-hidden">
      {/* Unique Background: Rose Nebula Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(232,121,161,0.1)_0%,transparent_60%)]" />
      
      {/* Sacred Geometry Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04] pointer-events-none">
        <Mandala />
      </div>

      {/* Centered Ripple Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none -z-10">
        <div className="ripple w-full h-full" style={{ animationDelay: "0s" }} />
        <div className="ripple w-full h-full" style={{ animationDelay: "1s" }} />
        <div className="ripple w-full h-full" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-lato text-gold text-xs uppercase tracking-[0.5em] mb-4 block font-bold"
        >
          ✦ LISTEN
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl mb-16 font-cinzel"
        >
          The Universe is Singing to You ✦ <br />
          A Harmonic Invitation
        </motion.h2>

        <div className="space-y-6 text-left">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="glass p-6 rounded-xl flex items-center gap-6 group hover:border-gold/30 transition-all"
            >
              <button className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-void transition-all shrink-0">
                <Volume2 size={20} />
              </button>
              
              <div className="flex-grow">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="font-cinzel text-sm md:text-base tracking-widest text-luminance/90">{track.title}</h3>
                  <span className="font-mono text-[10px] opacity-50">{track.duration}</span>
                </div>
                
                {/* Progress Bar & Waveform */}
                <div className="relative h-8 flex items-center">
                  {/* Static SVG Waveform */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 100 20">
                    <path 
                      d="M0 10 Q5 0 10 10 T20 10 T30 10 T40 10 T50 10 T60 10 T70 10 T80 10 T90 10 T100 10" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="0.5"
                    />
                  </svg>
                  
                  <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${track.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                      className="h-full bg-violet shadow-[0_0_10px_#6b21a8]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <p className="text-luminance/60 font-lato text-sm tracking-widest mb-8">
            🎧 Full albums and activations available on
          </p>
          <div className="flex justify-center gap-8">
            <a href="#" className="flex items-center gap-2 text-luminance/40 hover:text-gold transition-colors group">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold">
                <Music size={14} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em]">Spotify</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-luminance/40 hover:text-gold transition-colors group">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold">
                <Moon size={14} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em]">Insight Timer</span>
            </a>
          </div>
        </motion.div>
      </div>
      <WaveDivider flip />
    </section>
  );
};

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonials = [
    {
      text: "I came to Amrita with a literal lump in my throat that had been there for years. During our single activation session, I felt a vibration so ancient it could only be ancestral. As she hit a specific harmonic, the blockage simply dissolved. I left feeling lighter than I have in a decade.",
      name: "Sarah M.",
      location: "Bali",
      title: "Yoga Teacher",
      seed: "yoga"
    },
    {
      text: "The group ceremony was unlike any sound bath I've attended. Amrita's voice doesn't just surround you; it enters you. It felt like I was finally remembering a language I never forgot, a primal code of belonging. The resonance stayed with me for weeks.",
      name: "Julian R.",
      location: "London",
      title: "Sound Ceremony Attendee",
      seed: "meditation"
    },
    {
      text: "The Voice Alchemy mentorship was the most challenging and rewarding three months of my life. Amrita taught me that my voice is a sacred instrument, not just for singing, but for healing. I am now running my own practice, confident in the frequency I hold.",
      name: "Maya L.",
      location: "California",
      title: "Mentorship Graduate",
      seed: "healer"
    },
    {
      text: "As a scientist, I was initially skeptical of 'frequency channeling.' However, the physiological shifts I experienced during Amrita's session were measurable and undeniable. My heart rate variability improved instantly, and a chronic inflammatory response I'd been tracking simply vanished.",
      name: "Dr. David K.",
      location: "Zurich",
      title: "Research Scientist",
      seed: "scientist"
    },
    {
      text: "I lost my father last year and was stuck in a cycle of frozen grief. I started listening to Amrita's recorded activations every night. Her voice became a bridge back to my own heart. Through the sound, I finally found the space to weep and, eventually, to breathe again.",
      name: "Elena G.",
      location: "Madrid",
      title: "Long-distance Listener",
      seed: "grief"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
      {/* Unique Background: Soft Gold Nebula */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,200,66,0.08)_0%,transparent_50%)]" />
      
      {/* Sacred Geometry Watermark */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <FlowerOfLife />
      </div>

      {/* Star Particle Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="star-twinkle absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              '--duration': (2 + Math.random() * 3) + 's'
            } as any}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-lato text-gold text-xs uppercase tracking-[0.5em] mb-4 block font-bold"
            >
              ✦ ECHOES FROM THE FIELD
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-cinzel leading-tight"
            >
              Whispers of Transformation ✦ <br />
              <span className="text-rose">The Soul's Return</span>
            </motion.h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-void transition-all"
            >
              <ArrowRight className="rotate-180" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-void transition-all"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="min-w-full md:min-w-[calc(33.333%-22px)] snap-start glass p-10 rounded-2xl flex flex-col"
            >
              <div className="text-gold opacity-20 mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.79086 11.8079 5 14.017 5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C2.46472 8 2.017 8.44772 2.017 9V12C2.017 12.5523 1.56928 13 1.017 13H-1.983C-2.53528 13 -2.983 12.5523 -2.983 12V9C-2.983 6.79086 -1.19214 5 1.017 5H6.017C8.22614 5 10.017 6.79086 10.017 9V15C10.017 18.3137 7.33072 21 4.017 21H1.017Z" />
                </svg>
              </div>
              
              <p className="text-luminance/80 italic font-cormorant text-xl leading-relaxed mb-10 flex-grow">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full border border-gold p-1">
                    <img 
                      src={`https://picsum.photos/seed/${t.seed}/100/100`} 
                      alt={t.name} 
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(245,200,66,0.3)] pointer-events-none" />
                </div>
                <div>
                  <div className="font-cinzel text-gold text-sm tracking-widest">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
                    {t.title}, {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <WaveDivider flip />
    </section>
  );
};

const Events = () => {
  const [isPastOpen, setIsPastOpen] = useState(false);

  const upcomingEvents = [
    {
      name: "✦ Sound Portal Prague",
      date: "June 14, 2025",
      venue: "Kunratice Crystal Hall",
      location: "Prague, CZ 🇨🇿",
      desc: "You descend into the crystal harmonics. You open the vocal portals. You remember the heart of Europe.",
    },
    {
      name: "✦ Cosmic Voice Retreat",
      date: "July 7–9, 2025",
      venue: "Ibiza Retreat Centre",
      location: "Ibiza, Spain 🇪🇸",
      desc: "You enter three days of silence. You reclaim your soul on the white isle. You weave the sound of the sun.",
    },
    {
      name: "✦ Galactic Ceremony — London",
      date: "August 2, 2025",
      venue: "The Rose Theatre",
      location: "London, UK 🇬🇧",
      desc: "You immerse yourself in celestial vocals. You weave the collective frequency. You become the light.",
    },
    {
      name: "✦ Online: Full Moon Activation",
      date: "August 19, 2025",
      venue: "Global / Zoom",
      location: "The Digital Void 🌐",
      desc: "You harness the lunar peak. You activate your field from the void. You are everywhere at once.",
    }
  ];

  const pastEvents = [
    { city: "Bali, Indonesia", attendance: "120 Seekers" },
    { city: "Berlin, Germany", attendance: "85 Souls" },
    { city: "New York, USA", attendance: "210 Participants" },
    { city: "Tokyo, Japan", attendance: "60 Healers" },
    { city: "Paris, France", attendance: "95 Creatives" },
    { city: "Reykjavik, Iceland", attendance: "40 Mystics" }
  ];

  return (
    <section id="events" className="py-32 px-6 relative overflow-hidden">
      {/* Unique Background: Deep Midnight Nebula */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,0,20,1)_0%,rgba(4,0,10,1)_100%)]" />
      
      {/* Sacred Geometry Watermark */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-[0.04] pointer-events-none">
        <Merkaba />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-lato text-gold text-xs uppercase tracking-[0.5em] mb-4 block font-bold"
          >
            ✦ GATHER
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mt-4 font-cinzel"
          >
            Meet Your Tribe in the Field ✦ <br />
            A Constellation of Souls
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/50 via-violet/50 to-transparent hidden md:block" />

          <div className="space-y-24">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <div className="glass p-8 rounded-2xl border-gold/10 hover:border-gold/30 transition-all group">
                    <h3 className="text-2xl font-cinzel text-gold mb-2">{event.name}</h3>
                    <div className="text-luminance/80 font-lato mb-1">{event.venue}</div>
                    <div className="text-sm text-luminance/40 mb-4 tracking-widest uppercase">{event.location}</div>
                    <p className="text-sm text-luminance/60 mb-6 italic">{event.desc}</p>
                    <button className="px-6 py-2 bg-violet text-luminance text-xs font-cinzel tracking-widest hover:bg-rose transition-all rounded-sm">
                      ✦ SECURE YOUR PLACE
                    </button>
                  </div>
                </div>

                {/* Date Bubble */}
                <div className="relative z-10 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 shrink-0">
                  <div className="absolute inset-0 bg-gold/10 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-full h-full rounded-full border border-gold/30 glass flex flex-col items-center justify-center text-center p-4">
                    <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Date</span>
                    <span className="font-cinzel text-gold text-xs md:text-sm leading-tight">{event.date}</span>
                  </div>
                </div>

                {/* Spacer for alternating */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Transmissions Accordion */}
        <div className="mt-32 max-w-2xl mx-auto">
          <button 
            onClick={() => setIsPastOpen(!isPastOpen)}
            className="w-full flex items-center justify-between p-6 border border-white/10 glass rounded-xl hover:border-gold/30 transition-all group"
          >
            <span className="font-cinzel text-xl tracking-widest text-gold group-hover:text-luminance transition-colors">✦ PAST TRANSMISSIONS</span>
            <motion.div animate={{ rotate: isPastOpen ? 180 : 0 }}>
              <Waves className="text-gold w-6 h-6 rotate-90" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {isPastOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                  {pastEvents.map((event, i) => (
                    <div key={i} className="p-4 glass rounded-lg border-white/5 flex justify-between items-center">
                      <span className="font-lato text-sm text-luminance/80">{event.city}</span>
                      <span className="font-cinzel text-gold text-[10px] tracking-widest">{event.attendance}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <WaveDivider flip />
    </section>
  );
};

const LeadMagnet = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Unique Background: Vibrant Aurora */}
      <div className="absolute inset-0 aurora-bg -z-10 opacity-80" />
      
      {/* Sacred Geometry Watermark */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <FlowerOfLife />
      </div>

      <div className="max-w-xl mx-auto text-center glass p-12 md:p-16 rounded-[3rem] border-gold/20 shadow-[0_0_100px_rgba(107,33,168,0.2)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto text-gold">
            <Sparkles size={24} />
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl mb-6 font-cinzel leading-tight"
        >
          Your Soul is Calling ✦ <br />
          <span className="text-gold">A Gift from the Void</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-luminance/80 font-cormorant italic text-xl mb-10"
        >
          "You receive a 12-minute activation. You awaken your inner light. You channel the equinox energy."
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-left space-y-4 mb-12 max-w-sm mx-auto"
        >
          {[
            "The 'Soul Tuning' audio activation (MP3)",
            "Amrita's Sacred Listening Guide (PDF)",
            "Weekly frequency transmissions to your inbox"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm md:text-base text-luminance/70 font-lato">
              <div className="mt-1 text-gold shrink-0">✦</div>
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-1 text-left">
              <label htmlFor="lead-name" className="sr-only">Your name</label>
              <input 
                id="lead-name"
                type="text" 
                placeholder="Your name"
                className="w-full bg-void/50 border border-white/10 rounded-sm px-6 py-4 focus:border-gold outline-none transition-colors font-lato"
              />
            </div>
            <div className="space-y-1 text-left">
              <label htmlFor="lead-email" className="sr-only">Your email</label>
              <input 
                id="lead-email"
                type="email" 
                placeholder="Your email"
                className="w-full bg-void/50 border border-white/10 rounded-sm px-6 py-4 focus:border-gold outline-none transition-colors font-lato"
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(245, 200, 66, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 bg-gold text-void font-cinzel font-bold text-lg tracking-widest rounded-sm transition-all pulse-glow"
          >
            SEND ME THE ACTIVATION ✦
          </motion.button>
        </motion.form>

        <div className="mt-8 space-y-2">
          <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">
            Join 8,400+ souls already in the field
          </p>
          <p className="text-[9px] text-luminance/30 font-lato">
            Your frequency is safe with us. No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
      <WaveDivider flip />
    </section>
  );
};

const Booking = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Unique Background: Midnight Nebula with Gold Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(245,200,66,0.05)_0%,transparent_40%)]" />
      
      {/* Sacred Geometry Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.04] pointer-events-none -z-10 w-[800px] h-[800px]">
        <Mandala />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column: Invitation */}
          <div className="space-y-12">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="font-lato text-gold text-xs uppercase tracking-[0.5em] mb-4 block font-bold"
              >
                ✦ OPEN A PORTAL
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-cinzel leading-tight"
              >
                Your Intention is the Key ✦ <br />
                <span className="text-gold">The Doorway to the Infinite</span>
              </motion.h2>
            </div>

            <div className="space-y-6 text-luminance/70 font-lato text-lg leading-relaxed">
              <p>
                You take the first step into the unknown. You remember the frequency of your own soul. You send your intention into the field, a ripple in the cosmic ocean. You wait for the resonance to return, a whisper from the void.
              </p>
              <p>
                You receive a response within two sun-cycles. You schedule your alignment call, a bridge between worlds. You begin your journey into the sound, where the original light awaits.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-luminance/80 hover:text-gold transition-colors">
                <Mail size={20} className="text-gold" />
                <span className="font-lato tracking-wider">amrita@amritavibration.com</span>
              </div>
              <div className="flex items-center gap-4 text-luminance/80">
                <MapPin size={20} className="text-gold" />
                <span className="font-lato tracking-wider">Prague, CZ / Worldwide</span>
              </div>
            </div>

            {/* Social Proof Counter */}
            <div className="bg-gold/5 border border-gold/20 p-4 rounded-xl flex items-center gap-4 max-w-sm">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gold uppercase tracking-widest">✦ Live Resonance</p>
                <p className="text-sm text-luminance/80">23 souls joined the field this week</p>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, label: "Instagram" },
                { icon: <Youtube size={20} />, label: "YouTube" },
                { icon: <Music size={20} />, label: "Spotify" },
                { icon: <Moon size={20} />, label: "Insight Timer" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: "rgba(245, 200, 66, 1)", color: "#04000a" }}
                  className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-8 md:p-12 rounded-3xl border-gold/10 relative"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="full-name" className="text-[10px] uppercase tracking-widest text-gold font-bold">Full Name</label>
                <input 
                  id="full-name"
                  type="text" 
                  placeholder="Your name"
                  className="w-full bg-void/30 border border-white/10 rounded-sm px-6 py-4 focus:border-gold outline-none transition-colors font-lato"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email-address" className="text-[10px] uppercase tracking-widest text-gold font-bold">Email Address</label>
                <input 
                  id="email-address"
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full bg-void/30 border border-white/10 rounded-sm px-6 py-4 focus:border-gold outline-none transition-colors font-lato"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="offering" className="text-[10px] uppercase tracking-widest text-gold font-bold">Which offering interests you?</label>
                <select 
                  id="offering"
                  className="w-full bg-void/30 border border-white/10 rounded-sm px-6 py-4 focus:border-gold outline-none transition-colors font-lato appearance-none text-luminance/60"
                >
                  <option className="bg-void">Select an offering...</option>
                  <option className="bg-void">Private Voice Activation</option>
                  <option className="bg-void">Group Sound Ceremony</option>
                  <option className="bg-void">Voice Alchemy Mentorship</option>
                  <option className="bg-void">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="intention" className="text-[10px] uppercase tracking-widest text-gold font-bold">What calls you here?</label>
                <textarea 
                  id="intention"
                  rows={4}
                  placeholder="Tell us about your intention..."
                  className="w-full bg-void/30 border border-white/10 rounded-sm px-6 py-4 focus:border-gold outline-none transition-colors font-lato resize-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="referral" className="text-[10px] uppercase tracking-widest text-gold font-bold">How did you find Amrita?</label>
                <input 
                  id="referral"
                  type="text" 
                  placeholder="Instagram, a friend, etc."
                  className="w-full bg-void/30 border border-white/10 rounded-sm px-6 py-4 focus:border-gold outline-none transition-colors font-lato"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(107, 33, 168, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-violet to-rose text-luminance font-cinzel font-bold text-lg tracking-widest rounded-sm transition-all"
              >
                SEND MY INTENTION ✦
              </motion.button>
            </form>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <ShieldCheck size={16} />, label: "Secure" },
                { icon: <Lock size={16} />, label: "Private" },
                { icon: <Zap size={16} />, label: "Transformative" },
                { icon: <CheckCircle size={16} />, label: "Guaranteed" }
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
                  <div className="text-gold">{badge.icon}</div>
                  <span className="text-[8px] uppercase tracking-widest font-bold">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <WaveDivider flip />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-void pt-32 pb-12 px-6 relative overflow-hidden">
      {/* Unique Background: Subtle Nebula Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(107,33,168,0.1)_0%,transparent_60%)]" />
      
      {/* Sacred Geometry Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
        <FlowerOfLife />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Row: Logo & Mandala */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-20 h-20 mb-6 relative">
            <div className="absolute inset-0 opacity-20">
              <Mandala />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Moon className="text-gold w-8 h-8" />
            </div>
          </div>
          <h2 className="font-cinzel text-2xl md:text-3xl tracking-[0.4em] text-gold">AMRITA VIBRATION</h2>
          <p className="text-[10px] uppercase tracking-[0.5em] text-luminance/40 mt-2">Frequency Channeler</p>
        </div>

        {/* Decorative Dot Line */}
        <div className="flex justify-center gap-4 mb-16 opacity-20">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-gold" />
          ))}
        </div>

        {/* Middle Row: Nav Links */}
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
          {["About", "Offerings", "Listen", "Events", "Contact"].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="font-cinzel text-xs tracking-[0.2em] text-luminance/60 hover:text-gold transition-colors"
            >
              ✦ {link.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Social Icons Row */}
        <div className="flex justify-center gap-8 mb-20">
          {[
            { icon: <Instagram size={20} />, label: "Instagram" },
            { icon: <Youtube size={20} />, label: "YouTube" },
            { icon: <Music size={20} />, label: "Spotify" },
            { icon: <Moon size={20} />, label: "Insight Timer" }
          ].map((social, i) => (
            <a 
              key={i} 
              href="#" 
              className="text-luminance/40 hover:text-gold transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Newsletter One-liner */}
        <div className="max-w-md mx-auto mb-24">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-lato text-sm text-luminance/60 whitespace-nowrap">✦ Stay in the field</span>
            <div className="relative w-full flex">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input 
                id="footer-email"
                type="email" 
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-sm focus:border-gold outline-none transition-colors"
              />
              <button className="absolute right-0 top-0 bottom-0 px-4 bg-gold text-void text-[10px] font-bold tracking-widest uppercase hover:bg-luminance transition-colors rounded-r-sm">
                ✦ Join the Field
              </button>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <div className="text-[10px] uppercase tracking-widest text-luminance/30">
            © 2025 Amrita Vibration · Privacy Policy · Terms · Cookie Settings
          </div>
          <div className="text-[11px] italic text-rose font-lato tracking-widest">
            Made with love, sound, and stardust ✦
          </div>
        </div>
      </div>
    </footer>
  );
};

const SoulPulse = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-1 pointer-events-none z-[100] overflow-hidden">
      <motion.div 
        animate={{ 
          x: ["-100%", "100%"],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="w-full h-full bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
    </div>
  );
};

const SoulReflection = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-5]">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-violet/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-rose/5 to-transparent" />
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gold/5 to-transparent" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-violet/5 to-transparent" />
    </div>
  );
};

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-gold selection:text-void cursor-none">
      <CosmicBackground />
      <Navbar />
      <SoulPulse />
      <SoulReflection />
      <StickyCTA />
      <ExitIntentPopup />
      <FloatingContact />
      
      <main>
        <Hero />
        <FrequencyTuner />
        <FrequencyGrid />
        <About />
        <Services />
        <Media />
        <Events />
        <Testimonials />
        <LeadMagnet />
        <Booking />
      </main>

      <Footer />

      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_15px_rgba(245,200,66,0.8)]"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-12 h-12 bg-violet/20 rounded-full blur-xl pointer-events-none z-[9998] hidden md:block"
        animate={{ 
          x: mousePos.x - 24, 
          y: mousePos.y - 24,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          x: { type: "spring", damping: 20, stiffness: 100, mass: 0.8 },
          y: { type: "spring", damping: 20, stiffness: 100, mass: 0.8 },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Ambient Glow Effect */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-violet/10 blur-[150px] pointer-events-none -z-10"
      />
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaChartLine, FaGlobe, FaExclamationTriangle } from 'react-icons/fa';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-6"
          >
            Desert AAED
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl mb-8"
          >
            The Most Stable Digital Currency in the Middle East
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </header>

      {/* Features Section */}
      <section ref={ref} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose Desert AAED?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Feature 
              icon={<FaShieldAlt className="text-4xl text-amber-500" />}
              title="Unmatched Stability"
              description="Backed by real assets and maintained through advanced algorithmic mechanisms"
            />
            <Feature 
              icon={<FaChartLine className="text-4xl text-amber-500" />}
              title="Market Leadership"
              description="Leading market position in the Middle East with growing global presence"
            />
            <Feature 
              icon={<FaGlobe className="text-4xl text-amber-500" />}
              title="Global Accessibility"
              description="Available worldwide with instant transfers and minimal fees"
            />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Competitor Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ComparisonCard 
              title="Other Stablecoins"
              points={[
                "Limited regional focus",
                "Higher volatility risk",
                "Complex regulatory compliance",
                "Limited asset backing"
              ]}
            />
            <ComparisonCard 
              title="Desert AAED Advantages"
              points={[
                "Middle East market expertise",
                "Advanced stability mechanisms",
                "Full regulatory compliance",
                "Comprehensive asset backing"
              ]}
              highlighted={true}
            />
          </div>
        </div>
      </section>

      {/* Risk Warning Section */}
      <section className="py-10 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-4">
          <FaExclamationTriangle className="text-2xl text-amber-500" />
          <p className="text-sm">
            Cryptocurrency investments carry inherent risks. Please read our risk disclosure before investing.
          </p>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 rounded-lg bg-white shadow-lg"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function ComparisonCard({ title, points, highlighted = false }) {
  return (
    <div className={`p-6 rounded-lg ${highlighted ? 'bg-amber-500 text-white' : 'bg-white'}`}>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-lg">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
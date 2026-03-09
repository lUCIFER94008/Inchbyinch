import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Dumbbell, Play } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const equipmentVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const textVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1643369283064-f9146f94c6c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>

      {/* Fluid Background Blobs */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 bg-[#FFD200] rounded-full filter blur-[120px] opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-[#FFD200] rounded-full filter blur-[120px] opacity-20"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated Equipment Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={equipmentVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
          >
            <Dumbbell 
              className="text-[#FFD200] opacity-20" 
              size={40 + i * 10}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-[#FFD200] tracking-[0.3em] text-sm md:text-base uppercase">
              Premium Fitness Center
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 900 }}
          >
            <span className="block text-white">INCH BY</span>
            <span className="block text-[#FFD200]">INCH</span>
            <span className="block text-white">FITNESS</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            Transform Your Body – <span className="text-[#FFD200]">Inch By Inch</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 210, 0, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFD200] text-black px-10 py-5 text-lg uppercase tracking-wider transition-all hover:bg-[#ffd900]/90"
            >
              Join Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 210, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#FFD200] text-[#FFD200] px-10 py-5 text-lg uppercase tracking-wider transition-all hover:bg-[#FFD200]/10 flex items-center gap-2"
            >
              <Play size={20} />
              Book Free Trial
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#FFD200] rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-[#FFD200] rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

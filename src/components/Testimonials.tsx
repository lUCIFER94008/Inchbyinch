import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Fasila Beegum',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1759300642261-6a1dcd0d19f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    rating: 5,
    text: 'One of the best gym. In kaloor.Good service with friendly staff and super clean and comfortable gym......'
  },
  {
    name: 'Shijaas KM',
    role: 'Entrepreneur',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjVsUbyGK_6O4OO5ibQ4_1N2Bh_qELW0FS01g5ohhOFmND2jxrZ0=w45-h45-p-rp-mo-br100',
    rating: 5,
    text: 'Best gym in town ...friendly trainers nd good ambience for workout 💪🏻.'
  },
  {
    name: 'Karthik Menon',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1734189605012-f03d97a4d98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    rating: 5,
    text: 'From day one, I felt welcomed and supported. The community here is amazing, and the results speak for themselves. Highly recommend!'
  },
  {
    name: 'Sneha Pillai',
    role: 'Doctor',
    image: 'https://images.unsplash.com/photo-1630415188550-9e454489ce3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200',
    rating: 5,
    text: 'Professional, clean, and motivating environment. The group sessions are energizing and the trainers push you to achieve your best.'
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev: number) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev: number) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD200] rounded-full filter blur-[200px] opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-6" style={{ fontWeight: 900 }}>
            WHAT OUR <span className="text-[#FFD200]">MEMBERS SAY</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Join thousands of satisfied members who achieved their fitness goals
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Testimonial Carousel */}
          <div className="relative h-[500px] md:h-[400px] flex items-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 relative">
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 md:top-8 md:right-8 text-[#FFD200]/20" size={60} />

                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Avatar */}
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#FFD200] shadow-[0_0_40px_rgba(255,210,0,0.3)]">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Stars */}
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="text-[#FFD200] fill-[#FFD200]" size={20} />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed italic">
                        "{testimonials[currentIndex].text}"
                      </p>

                      {/* Author Info */}
                      <div>
                        <h4 className="text-xl md:text-2xl text-white mb-1" style={{ fontWeight: 800 }}>
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-[#FFD200] text-sm md:text-base uppercase tracking-wider">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 210, 0, 0.4)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="bg-white/10 hover:bg-[#FFD200] text-white hover:text-black p-4 rounded-full border border-white/20 hover:border-[#FFD200] transition-all"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 210, 0, 0.4)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="bg-white/10 hover:bg-[#FFD200] text-white hover:text-black p-4 rounded-full border border-white/20 hover:border-[#FFD200] transition-all"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#FFD200] w-8' : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
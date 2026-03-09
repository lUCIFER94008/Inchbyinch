import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const transformations = [
  {
    name: 'Rajesh Kumar',
    duration: '6 Months',
    achievement: 'Lost 25kg',
    before: 'https://images.unsplash.com/photo-1759300642261-6a1dcd0d19f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    after: 'https://images.unsplash.com/photo-1734189605012-f03d97a4d98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    name: 'Anita Menon',
    duration: '4 Months',
    achievement: 'Gained 8kg Muscle',
    before: 'https://images.unsplash.com/photo-1630415188550-9e454489ce3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    after: 'https://images.unsplash.com/photo-1739430548335-6b3e76ddbd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    name: 'Vishnu Prasad',
    duration: '8 Months',
    achievement: 'Complete Body Transformation',
    before: 'https://images.unsplash.com/photo-1643369283064-f9146f94c6c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    after: 'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
];

export function Transformations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    setSliderPosition(50);
  };

  const current = transformations[currentIndex];

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Blob */}
      <motion.div
        className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#FFD200] rounded-full filter blur-[180px] opacity-10"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 18,
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
            AMAZING <span className="text-[#FFD200]">TRANSFORMATIONS</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Real people, real results. See how our members transformed their lives.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            {/* Before/After Slider */}
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden bg-zinc-900 border-4 border-[#FFD200]/30">
              {/* After Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${current.after})` }}
              />

              {/* Before Image with Clip */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${current.before})`,
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
              />

              {/* Slider Control */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-[#FFD200] cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-[#FFD200] rounded-full flex items-center justify-center shadow-lg">
                  <div className="flex gap-1">
                    <ChevronLeft size={16} className="text-black" />
                    <ChevronRight size={16} className="text-black" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white uppercase tracking-wider text-sm">Before</span>
              </div>
              <div className="absolute top-6 right-6 bg-[#FFD200]/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-black uppercase tracking-wider text-sm">After</span>
              </div>

              {/* Interactive Slider Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>

            {/* Info Card */}
            <motion.div
              className="mt-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl mb-2" style={{ fontWeight: 800 }}>
                {current.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-300">
                <div>
                  <span className="text-[#FFD200] text-xl md:text-2xl block" style={{ fontWeight: 700 }}>
                    {current.duration}
                  </span>
                  <span className="text-sm uppercase tracking-wider">Duration</span>
                </div>
                <div className="h-12 w-px bg-white/20 hidden md:block" />
                <div>
                  <span className="text-[#FFD200] text-xl md:text-2xl block" style={{ fontWeight: 700 }}>
                    {current.achievement}
                  </span>
                  <span className="text-sm uppercase tracking-wider">Achievement</span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="bg-white/10 hover:bg-[#FFD200] text-white hover:text-black p-3 rounded-full border border-white/20 hover:border-[#FFD200] transition-all"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="bg-white/10 hover:bg-[#FFD200] text-white hover:text-black p-3 rounded-full border border-white/20 hover:border-[#FFD200] transition-all"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#FFD200] w-8' : 'bg-white/30 w-2'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
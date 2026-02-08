import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Award, Users, TrendingUp, Target } from 'lucide-react';

const stats = [
  { icon: Award, number: '10+', label: 'Years Experience' },
  { icon: Users, number: '5000+', label: 'Happy Members' },
  { icon: TrendingUp, number: '95%', label: 'Success Rate' },
  { icon: Target, number: '50+', label: 'Expert Trainers' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Blob */}
      <motion.div
        className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[#FFD200] rounded-full filter blur-[150px] opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [-100, 100, -100],
        }}
        transition={{
          duration: 15,
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
            ABOUT <span className="text-[#FFD200]">US</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Kerala's premier fitness destination where transformation happens one inch at a time. 
            We combine cutting-edge equipment, expert trainers, and proven methodologies to help you achieve your fitness goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255, 210, 0, 0.3)"
              }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:border-[#FFD200]/50 transition-all duration-300">
                <div className="bg-[#FFD200]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFD200]/20 transition-all">
                  <stat.icon className="text-[#FFD200]" size={32} />
                </div>
                <div className="text-4xl md:text-5xl text-[#FFD200] mb-2" style={{ fontWeight: 900 }}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
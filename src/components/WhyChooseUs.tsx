import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Award, Clock, Users, Zap, Heart, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Certified Trainers',
    description: 'All our trainers are internationally certified and experienced professionals.'
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Work out on your schedule with round-the-clock gym access for members.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a motivating community of fitness enthusiasts who support each other.'
  },
  {
    icon: Zap,
    title: 'Modern Equipment',
    description: 'State-of-the-art fitness equipment from leading international brands.'
  },
  {
    icon: Heart,
    title: 'Personalized Plans',
    description: 'Custom workout and nutrition plans tailored to your unique goals.'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Comprehensive safety protocols and professional supervision at all times.'
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-zinc-950 to-black">
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#FFD200] rounded-full filter blur-[150px] opacity-10"
        animate={{
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
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
            WHY CHOOSE <span className="text-[#FFD200]">US</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Experience the difference at Kerala's most premium fitness destination
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
              }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#FFD200]/50 transition-all duration-300 h-full">
                {/* Icon Container */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-[#FFD200] to-[#FFD200]/80 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(255,210,0,0.5)] transition-all duration-300">
                    <reason.icon className="text-black" size={32} />
                  </div>
                  
                  {/* Animated Glow Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-[#FFD200] rounded-2xl opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                <h3 className="text-xl md:text-2xl mb-3 text-white group-hover:text-[#FFD200] transition-colors duration-300" style={{ fontWeight: 800 }}>
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FFD200] to-transparent"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
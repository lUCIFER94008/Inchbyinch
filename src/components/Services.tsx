import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { TrendingDown, Dumbbell, User, Users, Activity } from 'lucide-react';

const services = [
  {
    icon: TrendingDown,
    title: 'Weight Loss',
    description: 'Science-backed programs designed to help you shed pounds safely and effectively.',
    image: 'https://images.unsplash.com/photo-1734189605012-f03d97a4d98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    icon: Dumbbell,
    title: 'Body Building',
    description: 'Build muscle mass and strength with our specialized bodybuilding programs.',
    image: 'https://images.unsplash.com/photo-1759300642261-6a1dcd0d19f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    icon: User,
    title: 'Personal Training',
    description: 'One-on-one sessions with expert trainers tailored to your specific goals.',
    image: 'https://images.unsplash.com/photo-1739430548335-6b3e76ddbd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    icon: Users,
    title: 'Group Sessions',
    description: 'High-energy group workouts that motivate and push you to your limits.',
    image: 'https://images.unsplash.com/photo-1630415188550-9e454489ce3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    icon: Activity,
    title: 'Rehab & Posture',
    description: 'Corrective exercises and rehabilitation programs for injury recovery.',
    image: 'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black to-zinc-950">
      {/* Background Elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#FFD200] rounded-full filter blur-[150px] opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
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
            OUR <span className="text-[#FFD200]">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive fitness solutions designed to meet your unique goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:from-black/95 group-hover:via-black/85 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-end min-h-[320px]">
                <motion.div
                  className="bg-[#FFD200] w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="text-black" size={28} />
                </motion.div>

                <h3 className="text-2xl md:text-3xl mb-3 text-white group-hover:text-[#FFD200] transition-colors duration-300" style={{ fontWeight: 800 }}>
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FFD200]/50 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
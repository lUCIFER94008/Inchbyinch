import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentLocation, setCurrentLocation] = useState(0);

  const locations = [
    {
      name: 'INCH BY INCH FITNESS - Kaloor',
      address: 'Kaloor, Kochi',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.0594480280797!2d76.29219412507815!3d10.006036440099713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0ec56de0d1%3A0x613527b35d3c6fc7!2sINCH%20BY%20INCH%20FITNESS%20Kaloor!5e1!3m2!1sen!2sin!4v1768845816334!5m2!1sen!2sin'
    },
    {
      name: 'INCH BY INCH FITNESS - Kalamassery',
      address: 'Kalamassery, Kochi',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31758.30208188386!2d76.28821156130094!3d10.028235415016388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c3391d4ad49%3A0xb0ef6dc26f1c5d0e!2sINCH%20BY%20INCH%20FITNESS%20-%20Kalamassery!5e1!3m2!1sen!2sin!4v1768845784685!5m2!1sen!2sin'
    },
    {
      name: 'INCH BY INCH FITNESS - HMT Colony',
      address: 'HMT Colony, Kochi',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31757.768974127077!2d76.30169816130561!3d10.033672864686272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d99bf4d1afb%3A0xc2030be88579f7f7!2sInch%20By%20Inch%20Fitness%20-%20HMT%20Colony!5e1!3m2!1sen!2sin!4v1768845866302!5m2!1sen!2sin'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+91 98765 43210',
      link: 'https://wa.me/919876543210'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@inchbyinch.fit',
      link: 'mailto:info@inchbyinch.fit'
    },
    {
      icon: MapPin,
      title: 'Locations',
      content: '3 Showrooms in Kochi',
      link: '#locations'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Open 24/7',
      link: '#'
    },
  ];

  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % locations.length);
  };

  const prevLocation = () => {
    setCurrentLocation((prev) => (prev - 1 + locations.length) % locations.length);
  };

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black to-zinc-950">
      {/* Background Elements */}
      <motion.div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#FFD200] rounded-full filter blur-[200px] opacity-10"
        animate={{
          scale: [1, 1.3, 1],
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
            GET IN <span className="text-[#FFD200]">TOUCH</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Ready to start your transformation? Contact us today for a free consultation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-[#FFD200]/50 transition-all duration-300 block"
              >
                <motion.div
                  className="bg-[#FFD200]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFD200]/20 transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="text-[#FFD200]" size={24} />
                </motion.div>
                <h3 className="text-lg text-white mb-2" style={{ fontWeight: 700 }}>
                  {info.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {info.content}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Map Carousel Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-2 overflow-hidden"
          >
            <div className="w-full h-full min-h-[300px] bg-zinc-900 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)'
                }}
              />
              <div className="relative z-10 text-center">
                <MapPin className="text-[#FFD200] mx-auto mb-3" size={48} />
                <p className="text-white text-lg mb-2" style={{ fontWeight: 700 }}>
                  3 Locations in Kochi
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  Kaloor • Kalamassery • HMT Colony
                </p>
                <a 
                  href="#locations"
                  className="inline-block bg-[#FFD200] text-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-[#FFD200]/90 transition-all"
                >
                  View on Map
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
        >
          <motion.a
            href="tel:+919876543210"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 210, 0, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFD200] text-black px-12 py-5 text-lg uppercase tracking-wider transition-all hover:bg-[#ffd900]/90 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Phone size={20} />
            Call Now
          </motion.a>
          <motion.a
            href="https://wa.me/919876543210"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37, 211, 102, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#25D366] text-white px-12 py-5 text-lg uppercase tracking-wider transition-all hover:bg-[#25D366]/90 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            WhatsApp
          </motion.a>
        </motion.div>

        {/* Map Carousel Section */}
        <motion.div
          id="locations"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 900 }}>
              OUR <span className="text-[#FFD200]">LOCATIONS</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Visit any of our 3 premium fitness centers across Kochi
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Map Container */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-[#FFD200]/30 rounded-3xl p-4 overflow-hidden">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <iframe
                  src={locations[currentLocation].mapUrl}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Location Info */}
              <div className="mt-6 text-center">
                <h4 className="text-xl md:text-2xl text-white mb-2" style={{ fontWeight: 800 }}>
                  {locations[currentLocation].name}
                </h4>
                <p className="text-gray-400 flex items-center justify-center gap-2">
                  <MapPin size={16} className="text-[#FFD200]" />
                  {locations[currentLocation].address}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 210, 0, 0.4)" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevLocation}
              className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-[#FFD200] text-black p-3 md:p-4 rounded-full shadow-lg hover:bg-[#FFD200]/90 transition-all z-10"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 210, 0, 0.4)" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextLocation}
              className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-[#FFD200] text-black p-3 md:p-4 rounded-full shadow-lg hover:bg-[#FFD200]/90 transition-all z-10"
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {locations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLocation(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentLocation ? 'bg-[#FFD200] w-8' : 'bg-white/30 w-2 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Location Labels */}
            <div className="grid grid-cols-3 gap-2 mt-8">
              {locations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLocation(index)}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    index === currentLocation
                      ? 'border-[#FFD200] bg-[#FFD200]/10 text-white'
                      : 'border-white/20 bg-white/5 text-gray-400 hover:border-[#FFD200]/50'
                  }`}
                >
                  <p className="text-xs md:text-sm uppercase tracking-wider" style={{ fontWeight: 700 }}>
                    {location.name.split(' - ')[1]}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center pt-12 border-t border-white/10"
      >
        <p className="text-3xl md:text-4xl mb-4 text-white" style={{ fontWeight: 900 }}>
          INCH BY INCH <span className="text-[#FFD200]">FITNESS</span>
        </p>
        <p className="text-gray-500 text-sm">
          © 2026 Inch By Inch Fitness. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-1">
  Designed by{" "}
  <a
    href="https://r7-olive.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#FFD200] hover:text-[#FFE766] cursor-pointer hover:underline transition"
  >
    R7
  </a>
</p>
      </motion.div>
    </section>
  );
}
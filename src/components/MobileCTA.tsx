import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-black/95 backdrop-blur-xl border-t border-[#FFD200]/30 p-4 shadow-[0_-10px_40px_rgba(255,210,0,0.2)]"
    >
      <div className="flex gap-3 max-w-md mx-auto">
        <motion.a
          href="tel:+919876543210"
          whileTap={{ scale: 0.95 }}
          className="flex-1 bg-[#FFD200] text-black py-4 px-6 uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
          style={{ fontWeight: 800 }}
        >
          <Phone size={20} />
          <span>Call</span>
        </motion.a>
        <motion.a
          href="https://wa.me/919876543210"
          whileTap={{ scale: 0.95 }}
          className="flex-1 bg-[#25D366] text-white py-4 px-6 uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
          style={{ fontWeight: 800 }}
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

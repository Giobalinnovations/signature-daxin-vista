'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ui/contact-form';
import CloudinaryImage from '../cloudinary-image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative py-5 min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative z-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Featured Image */}
          <motion.div
            variants={fadeIn}
            className="flex-1 relative w-full max-w-2xl lg:order-last"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Signature Daxin Vista
                </h2>
                <p className="text-lg md:text-xl mb-2">Sector 36, Sohna</p>
                <p className="text-xl md:text-2xl font-semibold">
                  Starting from ₹1.9 Crores
                </p>
              </div>
              <CloudinaryImage
                src="signaturedaxinvist_gz0zph"
                alt="Signature Daxin Vista"
                fill
                sizes="100vw"
                className="object-cover"
                quality={90}
                priority
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="flex-1 w-full">
            <motion.div variants={fadeIn} className="space-y-4">
              <h2 className="text-2xl font-semibold text-center">
                Enquire Now for Amazing Deals!
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

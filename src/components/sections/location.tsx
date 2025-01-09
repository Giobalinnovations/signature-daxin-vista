'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import CloudinaryImage from '../cloudinary-image';

const Location = () => {
  return (
    <Section id="location" variant="default" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Strategic Location
          </h2>
          <p className="text-foreground/80 max-w-4xl mx-auto text-lg leading-relaxed">
            Strategically located in the heart of New Gurugram, offering
            excellent connectivity and accessibility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <CloudinaryImage
            src="mobile-Map_psynz8"
            alt="Signature Daxin Vista Location Map"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 90vw"
            crop="fit"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Location;

'use client';

import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CloudinaryImage from '../cloudinary-image';

const floorPlans = [
  {
    id: 1,
    title: 'Basement Floor Plan',
    category: 'Basement',
    image: 'basemeny_t8fht3',
  },
  {
    id: 2,
    title: 'Stilt Floor Plan',
    category: 'Stilt',
    image: 'stilt_vpyuuw',
  },
  {
    id: 3,
    title: 'Typical Floor Plan',
    category: 'Typical',
    image: 'flooooor_h7cxp6',
  },
];

const categories = ['Basement', 'Stilt', 'Typical'];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

export default function FloorPlansGallery() {
  const [activeCategory, setActiveCategory] = useState('Basement');

  const filteredItems = floorPlans.filter(
    item => item.category === activeCategory
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Section id="floor-plans" variant="default">
      <div className="space-y-6">
        <SectionHeading
          title="Floor Plans"
          description="Explore our thoughtfully designed retail spaces across different blocks and floors."
          alignment="center"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'shadow-md scale-105'
                  : 'hover:scale-105'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Floor Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="group flex flex-col bg-white rounded-2xl overflow-hidden"
              >
                {/* Image Container */}
                <div className="aspect-[16/9] relative h-[250px] md:h-[400px] flex items-center justify-center">
                  <CloudinaryImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Title */}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}

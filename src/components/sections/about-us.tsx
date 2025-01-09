'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import CloudinaryImage from '../cloudinary-image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8 },
};

export default function AboutUs() {
  return (
    <Section id="about" variant="default" className="overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left side - Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl space-y-8"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-sm font-medium uppercase tracking-wider">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Welcome to Signature Daxin Vista
                <span className="block mt-2 bg-gradient-to-r from-primary/50 to-primary text-transparent bg-clip-text">
                  Daxin Vistas
                </span>
              </h2>
            </div>

            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p className="leading-relaxed">
                Welcome to Signature Daxin Vista Daxin Vistas, a luxury home
                project carefully crafted to revolutionise contemporary urban
                life. Featuring a selection of carefully designed 2 BHK and 3
                BHK flats, our houses are made to guarantee the best use of
                space, plenty of natural light, and great ventilation. Situated
                in a bustling metropolitan centre, Signature Daxin Vista Daxin
                Vistas provides families and professionals the ideal location,
                as it offers easy access to important businesses, prestigious
                universities, healthcare facilities, and prominent retail
                centres.
              </p>
              <p className="leading-relaxed">
                Look no further than Signature Daxin Vista Daxin Vistas if
                you&apos;re seeking a home. The project offers a great range of
                world-class conveniences meant to improve your daily life. These
                include an opulent clubhouse, a glistening swimming pool, and
                exquisitely designed gardens and peaceful strolling paths for
                leisure. While the multipurpose hall fits your social parties
                and meetings, children may enjoy specific play spaces. Modern
                24-hour security ensures peace of mind for all residents, while
                eco-friendly projects such as rainwater collection and solar
                power systems prioritise sustainability.
              </p>
              <p className="leading-relaxed">
                Location details enhance the appeal of Signature Daxin Vista
                Daxin Vistas. Designed with great care, it provides quick access
                to main roads and other facilities, thereby making sure you
                never live far from what you need. Signature Daxin Vista offers
                the ideal mix of luxury and elegance, whether your preferred way
                of relaxation is in the peaceful grounds or keeping active with
                our leisure amenities.
              </p>
              <p className="leading-relaxed">
                Discover a neighbourhood where every element—from first-rate
                conveniences to roomy floor plans—has been planned to improve
                your way of life. At Signature Daxin Vista Daxin Vistas, we
                provide a style of life that mixes contemporary conveniences
                with classic elegance rather than merely residences. Welcome to
                Signature Daxin Vista; your ideal house is waiting.
              </p>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={imageVariants}
            className="relative lg:sticky lg:top-24 aspect-[4/3] lg:aspect-[3/4]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <CloudinaryImage
                src="signaturedaxinvist_gz0zph"
                alt="Signature Daxin Vista Daxin Vistas"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

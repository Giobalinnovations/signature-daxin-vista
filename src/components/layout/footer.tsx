'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Sticky Mobile Consultation Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-lg border-t md:hidden z-50">
        <Link
          href="#hero"
          className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-full font-medium shadow-lg transition-all active:scale-95"
        >
          <Phone className="w-4 h-4" />
          Enquire Now
        </Link>
      </div>

      {/* Main Footer */}
      <footer className=" border-t">
        <div className="container px-4 md:px-6 py-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          >
            <p>© {currentYear} . All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cookie-policy"
                className="hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Extra padding for mobile to prevent button overlap */}
      <div className="h-24 md:hidden" />
    </>
  );
}

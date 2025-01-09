'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Terms() {
  return (
    <Section className="py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="space-y-4">
          <Button variant="ghost" size="sm" className="mb-8" asChild>
            <Link href="/" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          variants={itemVariants}
          className="prose dark:prose-invert max-w-none"
        >
          <p>
            Welcome to Signature Daxin Vista. By accessing our website and using
            our services, you agree to be bound by these Terms and Conditions.
          </p>
        </motion.div>

        {/* Acceptance of Terms */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using this website, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Services</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>Our services include but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Interior design consultation</li>
              <li>Space planning and layout design</li>
              <li>Furniture and decor selection</li>
              <li>Project management</li>
              <li>Design implementation</li>
            </ul>
          </div>
        </motion.div>

        {/* Payment Terms */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Payment Terms</h2>
          <div className="space-y-4 text-muted-foreground">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Payment schedules will be outlined in the service agreement
              </li>
              <li>All prices are subject to change without notice</li>
              <li>Deposits may be required for certain services</li>
              <li>Refunds are subject to our refund policy</li>
            </ul>
          </div>
        </motion.div>

        {/* Intellectual Property */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content on this website, including images, text, designs, and
            logos, is the property of Signature Daxin Vista and is protected by
            intellectual property laws.
          </p>
        </motion.div>

        {/* Limitation of Liability */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p className="text-muted-foreground">
            Signature Daxin Vista shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages resulting
            from your use of our services.
          </p>
        </motion.div>

        {/* Termination */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Termination</h2>
          <p className="text-muted-foreground">
            We reserve the right to terminate or suspend access to our services
            immediately, without prior notice or liability, for any reason
            whatsoever.
          </p>
        </motion.div>

        {/* Governing Law */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms shall be governed by and construed in accordance with
            the laws of [Your Jurisdiction], without regard to its conflict of
            law provisions.
          </p>
        </motion.div>

        {/* Contact Information */}
        {/* <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms, please contact us at:
            <br />
            Email: jasperreed1873@gmail.com
            <br />
            Phone: +918291435253
          </p>
        </motion.div> */}
      </motion.div>
    </Section>
  );
}

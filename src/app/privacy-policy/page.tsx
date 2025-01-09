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

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
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
            At Signature Daxin Vista, we take your privacy seriously. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or use our services.
          </p>
        </motion.div>

        {/* Information Collection */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Messages and communication preferences</li>
              <li>Project requirements and preferences</li>
            </ul>
          </div>
        </motion.div>

        {/* How We Use Information */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you updates and marketing communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
        </motion.div>

        {/* Information Sharing */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Information Sharing</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              We do not sell or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors and consultants</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </div>
        </motion.div>

        {/* Data Security */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </motion.div>

        {/* Your Rights */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with supervisory authorities</li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Information */}
        {/* <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact
            us at:
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

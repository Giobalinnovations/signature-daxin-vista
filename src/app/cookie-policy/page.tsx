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

export default function CookiePolicy() {
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
          <h1 className="text-4xl font-bold">Cookie Policy</h1>
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
            This Cookie Policy explains how Signature Daxin Vista uses cookies
            and similar technologies to recognize you when you visit our
            website.
          </p>
        </motion.div>

        {/* What are Cookies */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">What are Cookies?</h2>
          <p className="text-muted-foreground">
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website. They are widely used to make
            websites work more efficiently and provide reporting information.
          </p>
        </motion.div>

        {/* Types of Cookies We Use */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Types of Cookies We Use</h2>
          <div className="space-y-6">
            <div className="bg-secondary/20 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Essential Cookies</h3>
              <p className="text-muted-foreground">
                These cookies are necessary for the website to function
                properly. They enable basic functions like page navigation and
                access to secure areas of the website.
              </p>
            </div>

            <div className="bg-secondary/20 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Performance Cookies</h3>
              <p className="text-muted-foreground">
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously.
              </p>
            </div>

            <div className="bg-secondary/20 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Functionality Cookies</h3>
              <p className="text-muted-foreground">
                These cookies allow the website to remember choices you make and
                provide enhanced, more personal features.
              </p>
            </div>

            <div className="bg-secondary/20 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Marketing Cookies</h3>
              <p className="text-muted-foreground">
                These cookies track your online activity to help advertisers
                deliver more relevant advertising or to limit how many times you
                see an ad.
              </p>
            </div>
          </div>
        </motion.div>

        {/* How to Control Cookies */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">How to Control Cookies</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>You can control and/or delete cookies as you wish by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adjusting your browser settings to refuse cookies</li>
              <li>Deleting cookies that are already stored on your device</li>
              <li>Using our cookie consent manager</li>
            </ul>
            <p>
              Please note that restricting cookies may impact your experience on
              our website as some features may not function properly.
            </p>
          </div>
        </motion.div>

        {/* Updates to Policy */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Updates to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Cookie Policy from time to time to reflect
            changes in our practices or for operational, legal, or regulatory
            reasons.
          </p>
        </motion.div>

        {/* Contact Information */}
        {/* <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about our use of cookies, please contact
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

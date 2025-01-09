import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title:
    'Signature Global Daxin Vistas - Luxurious 2- and 3-BHK Apartments in Sector 36, Sohna',
  description:
    "Discover Sector 36, Sohna's Signature Global Daxin Vistas. Offering 2- and 3-BHK flats starting at ₹1.9 Cr with world-class conveniences like a clubhouse, swimming pool, manicured gardens, and environmentally friendly elements. Your ideal house is waiting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: 'Remy Zins, FullStack Web Developer',
  description: 'A FullStack developper crafting fully personalized web solutions with precision and passion',
  generator: 'Next.js',
  applicationName: 'Remy Zins Portfolio Website',
  referrer: 'origin-when-cross-origin',
  keywords: ['Web Developer', 'Fullstack', 'Rest API', 'Next.js', 'React', 'Symfony'],
  authors: [{ name: 'Remy Zins', url: 'https://www.linkedin.com/in/remyzins/' }, ],
  creator: 'Remy Zins',
  publisher: 'Remy Zins',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Remy Zins, FullStack Web Developer',
    description: 'A FullStack developper crafting fully personalized web solutions with precision and passion',
    url: 'https://www.remyzins.net/',
    siteName: 'Remy Zins Portfolio Website',
    images: [
      {
        url: 'https://www.remyzins.net/_next/image?url=%2Fhero.png&w=3840&q=75',
        width: 1440,
        height: 893,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-KX472VF101" />
    </html>
  );
}

import type React from 'react';
import '@/app/globals.css';
import { JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

import type { Metadata } from 'next';

const title = 'Diego Maroto | Cloud & DevOps Architect';
const description =
  'I craft resilient cloud platforms that automate workflows and scale securely. Specializing in AWS, Terraform and CI/CD with a security-first mindset.';
const url = 'https://marotodiego.com';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: ['Cloud Architect', 'DevOps', 'AWS', 'Terraform', 'CI/CD', 'Kubernetes', 'Serverless', 'Diego Maroto'],
  authors: [{ name: 'Diego Maroto', url }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/cloud-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'marotodiego.com',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

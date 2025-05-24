import type React from 'react';
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Diego Maroto | Cloud & DevOps Architect',
  description:
    'I craft resilient cloud platforms that automate workflows and scale securely. Specializing in AWS, Terraform and CI/CD with a security-first mindset.',
  generator: 'v0.dev, OpenAI Codex, Github Copilot Agent, and more',
  icons: {
    icon: '/cloud-icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

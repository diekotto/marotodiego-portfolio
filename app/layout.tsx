import type React from 'react';
import '@/app/globals.css';
import { JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

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
      <body className={jetbrainsMono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type React from 'react';
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Diego Maroto | Cloud & DevOps Architect · AWS Solutions Architect · Security-First Engineer',
  description:
    'I build resilient, highly-scalable cloud platforms that turn business problems into automated, serverless, and container-driven solutions. With deep expertise in AWS, Terraform, and CI/CD automation, I enable teams to ship faster and sleep better. Passionate about clean architectures, mentoring, and driving a security-first culture.',
  generator: 'v0.dev',
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

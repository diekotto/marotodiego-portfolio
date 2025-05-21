import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDownIcon, GithubIcon, LinkedinIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-blue-950 -z-10" />

      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="block">Diego Maroto</span>
          <span className="block mt-2 text-blue-600 dark:text-blue-400">Cloud Architect & DevOps Engineer</span>
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl mb-8 text-slate-700 dark:text-slate-300">
          Specialized in designing and building scalable, resilient and secure cloud infrastructure.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button asChild size="lg" className="rounded-full">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>

        <div className="flex gap-6 mb-16">
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>

        <Button variant="ghost" size="icon" asChild className="animate-bounce">
          <Link href="#about">
            <ArrowDownIcon className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}

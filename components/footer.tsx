import Link from 'next/link';
import { GithubIcon, LinkedinIcon, MailIcon, RssIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold">
              <span className="text-primary">diek@portfolio</span>
              <span className="text-muted-foreground">:~$ </span>
              <span>whoami</span>
            </h3>
            <p className="text-muted-foreground mt-2">
              Cloud & DevOps Architect · AWS Solutions Architect · Security-First Engineer
            </p>
          </div>

          <div className="flex gap-6">
            <Link
              href="https://github.com/diekotto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/diegomaroto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://dev.to/diek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <RssIcon className="h-5 w-5" />
              <span className="sr-only">Blog</span>
            </Link>
            <Link
              href="mailto:hola@marotodiego.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MailIcon className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            <span className="text-primary"># </span>
            {currentYear} Diego Maroto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

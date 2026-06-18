import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon, LinkedinIcon, MailIcon, RssIcon } from 'lucide-react';

function Prompt() {
  return (
    <>
      <span className="text-primary">diek@portfolio</span>
      <span className="text-muted-foreground">:</span>
      <span className="text-foreground/70">~</span>
      <span className="text-muted-foreground">$ </span>
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center border-b border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/penguin-logo.png"
              alt="Penguin logo"
              width={64}
              height={64}
              className="border border-border"
            />
            <p className="text-xs md:text-sm text-muted-foreground">
              Last login: today on ttys001
              <br />
              type a command to explore the portfolio
            </p>
          </div>

          <div className="space-y-4 text-sm md:text-base">
            <div>
              <p>
                <Prompt />
                whoami
              </p>
              <h1 className="text-2xl md:text-4xl font-bold mt-1">Diego Maroto</h1>
            </div>

            <div>
              <p>
                <Prompt />
                cat role.txt
              </p>
              <p className="text-lg md:text-2xl font-bold text-primary mt-1">Cloud &amp; DevOps Architect</p>
            </div>

            <div>
              <p>
                <Prompt />
                cat bio.txt
              </p>
              <p className="text-muted-foreground max-w-2xl mt-1">
                I craft resilient cloud platforms that automate workflows and scale securely. Specializing in AWS,
                Terraform and CI/CD with a security-first mindset.
              </p>
            </div>

            <div>
              <p>
                <Prompt />
                ls ~/links
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-1">
                <Link
                  href="https://github.com/diekotto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <GithubIcon className="h-4 w-4" /> github
                </Link>
                <Link
                  href="https://www.linkedin.com/in/diegomaroto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4" /> linkedin
                </Link>
                <Link
                  href="https://dev.to/diek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <RssIcon className="h-4 w-4" /> dev.to
                </Link>
                <Link
                  href="mailto:hola@marotodiego.com"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MailIcon className="h-4 w-4" /> email
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild className="border border-primary/50 bg-primary/10 text-primary hover:bg-primary/20">
                <Link href="#contact">./contact.sh</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#projects">./list-projects.sh</Link>
              </Button>
            </div>

            <p className="pt-2">
              <Prompt />
              <span className="term-cursor" aria-hidden="true" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

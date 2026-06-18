import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/section-heading';

export default function Community() {
  const contributions = [
    {
      title: 'Readme AI',
      description:
        'AI-powered CLI that autogenerates rich, customizable README files from any repo; supports OpenAI, Anthropic, Gemini, Ollama, and even offline mode. My contributions: Shipped a GitHub-Action wrapper, added Spanish locale, and refactored the CLI to support larger Claude context windows while tightening tests.',
      image: '/images/community/readme-ai-logo.svg?height=400&width=600',
      tags: ['CLI', 'GitHub Action'],
      githubUrl: 'https://github.com/eli64s/readme-ai',
      liveUrl: 'https://github.com/eli64s/readme-ai',
    },
    {
      title: 'Size Limit',
      description:
        'Performance-budget tool for JavaScript that runs in CI, calculates real download & exec cost, and fails the build if a PR tips the budget; includes tree-shaking and time-based metrics. My contributions: Fixed PNPM-workspace resolution, added Vite example, and triaged bundle-size regressions across three major frameworks.',
      image: '/images/community/size-limit-logo.svg?height=400&width=600',
      tags: ['JavaScript', 'CI'],
      githubUrl: 'https://github.com/ai/size-limit',
      liveUrl: 'https://github.com/ai/size-limit',
    },
  ];

  return (
    <section id="community" className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <SectionHeading command="git log --author=diek ~/contributions" />

        <div className="grid md:grid-cols-2 gap-8">
          {contributions.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative w-full aspect-[3/2] border-b border-border">
                <Image src={project.image} alt={project.title} fill className="object-contain" />
              </div>
              <CardHeader>
                <CardTitle className="text-primary before:content-['>_']">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

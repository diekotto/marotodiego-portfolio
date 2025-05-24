import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio',
      description:
        'Modern, fully-responsive site that showcases my work, skills and writing. Dark-mode-first, smooth-scroll navigation and Terraform IaC for one-command infra replication. Serves as a live demo of my front-end chops and cloud discipline.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['React', 'Vite', 'Tailwind', 'shadcn/ui', 'AWS'],
      githubUrl: 'https://github.com/diekotto/marotodiego-portfolio',
      liveUrl: 'https://marotodiego.com',
    },
    {
      title: 'Code Digest Action',
      description:
        'Generates an LLM-optimised digest of any repo—metadata, directory tree and per-file summary for lightning-fast onboarding. Ships secure artifact retention, configurable ignore globs and works both as uses: diekotto/code-digest-action@v2 or npx @diekotto/code-digest.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['GitHub Action', 'CLI', 'Node.js'],
      githubUrl: 'https://github.com/diekotto/code-digest-action',
      liveUrl: 'https://github.com/diekotto/code-digest-action',
    },
    {
      title: 'AI Pull Review',
      description:
        'Turns every PR into a conversation with Claude—flags bugs, reviews architecture, checks docs and estimates costs, then posts rich comments back on the PR. Invited by Ready Tensor to showcase this project in the Agentic AI Innovation Challenge 2025.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['GitHub Action', 'Anthropic', 'Node.js'],
      githubUrl: 'https://github.com/diekotto/ai-pull-review',
      liveUrl: 'https://github.com/diekotto/ai-pull-review',
    },
    {
      title: 'Sonar Scanner Analysis',
      description:
        'Spins up a local SonarQube server + scanner inside CI, runs analysis, and uploads a Markdown report artifact—no external server required. Perfect for private or air-gapped repos; v1 delivers full quality-gate status, metrics and detailed issue breakdowns.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['GitHub Action', 'Docker', 'SonarQube'],
      githubUrl: 'https://github.com/diekotto/sonar-scanner-analysis',
      liveUrl: 'https://github.com/diekotto/sonar-scanner-analysis',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
            A selection of projects that showcase my expertise in cloud architecture and DevOps engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={project.image || '/placeholder.svg'} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
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
                <Button size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              View More Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Redlock K8s Laboratory',
      description:
        'Blueprint that demonstrates Redlock-based distributed locking and cron scheduling across micro-services, with Docker-Compose & K8s manifests for local or cluster testing. Archived Jan 2025 but remains a solid reference for fault-tolerant job orchestration.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['Node.js', 'Redis', 'Kubernetes'],
      githubUrl: 'https://github.com/diekotto/redlock-k8s-laboratory',
      liveUrl: 'https://github.com/diekotto/redlock-k8s-laboratory',
    },
    {
      title: 'Repository Dispatch Action',
      description:
        'Triggers repository_dispatch events so one workflow can fan-out to other repos, passing custom JSON payloads. Single-step usage (uses: diekotto/repository-dispatch@v1) and clear error handling/PAT support.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['GitHub Action', 'Node.js'],
      githubUrl: 'https://github.com/diekotto/repository-dispatch',
      liveUrl: 'https://github.com/diekotto/repository-dispatch',
    },
    {
      title: 'Code Digest Action',
      description:
        'Generates an LLM-ready digest of any repo: metadata, directory map and per-file summary—ideal for onboarding or AI agents. Works via GH Action or npx @diekotto/code-digest; artifact retention and glob ignores built-in.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['GitHub Action', 'CLI', 'Node.js'],
      githubUrl: 'https://github.com/diekotto/code-digest-action',
      liveUrl: 'https://github.com/diekotto/code-digest-action',
    },
    {
      title: 'AI Pull Review',
      description:
        'Turns every PR into a conversation with Claude—flags bugs, reviews architecture, checks docs and estimates cost, then posts rich comments. **Invited by Ready Tensor to showcase this project in the Agentic AI Innovation Challenge 2025.** Multiple scan depths, already adopted by several orgs.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['GitHub Action', 'CLI', 'Node.js', 'Anthropic'],
      githubUrl: 'https://github.com/diekotto/ai-pull-review',
      liveUrl: 'https://github.com/diekotto/ai-pull-review',
    },
    {
      title: 'Sonar Scanner Analysis',
      description:
        'Spins up SonarQube + Scanner inside CI, runs analysis and uploads a Markdown report artifact—no external server needed. Perfect for private or air-gapped repos; v1 delivers full quality-gate metrics and issue breakdowns.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['GitHub Action', 'Docker-in-Docker', 'SonarQube'],
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

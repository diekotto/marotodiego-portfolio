import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/section-heading';

export default function Projects() {
  const projects = [
    {
      title: 'Redlock K8s Laboratory',
      description:
        'Blueprint that demonstrates Redlock-based distributed locking and cron scheduling across micro-services, with Docker-Compose & K8s manifests for local or cluster testing. Archived Jan 2025 but remains a solid reference for fault-tolerant job orchestration.',
      image: '/images/projects/red-lock-laboratory-logo.jpg',
      tags: ['Node.js', 'Redis', 'Kubernetes', 'Minikube', 'Parallel Jobs', 'Docker'],
      githubUrl: 'https://github.com/diekotto/redlock-k8s-laboratory',
      liveUrl: 'https://github.com/diekotto/redlock-k8s-laboratory',
    },
    {
      title: 'Repository Dispatch Action',
      description:
        'Triggers repository_dispatch events so one workflow can fan-out to other repos, passing custom JSON payloads. Single-step usage (uses: diekotto/repository-dispatch@v1) and clear error handling/PAT support.',
      image: '/images/projects/repository-dispatch-action-logo.jpg',
      tags: ['GitHub Action', 'Node.js', 'Tools', 'Automation'],
      githubUrl: 'https://github.com/diekotto/repository-dispatch',
      liveUrl: 'https://github.com/diekotto/repository-dispatch',
    },
    {
      title: 'Code Digest Action',
      description:
        'Generates an LLM-ready digest of any repo: metadata, directory map and per-file summary—ideal for onboarding or AI agents. Works via GH Action or npx @diekotto/code-digest; artifact retention and glob ignores built-in.',
      image: '/images/projects/code-digest-logo.jpg',
      tags: ['GitHub Action', 'CLI', 'Node.js', 'Automation', 'AI'],
      githubUrl: 'https://github.com/diekotto/code-digest-action',
      liveUrl: 'https://github.com/diekotto/code-digest-action',
    },
    {
      title: 'AI Pull Review',
      description:
        'Turns every PR into a conversation with Claude—flags bugs, reviews architecture, checks docs and estimates cost, then posts rich comments. **Invited by Ready Tensor to showcase this project in the Agentic AI Innovation Challenge 2025.** Multiple scan depths, already adopted by several orgs.',
      image: '/images/projects/ai-pull-review-logo.jpg',
      tags: ['GitHub Action', 'CLI', 'Node.js', 'Anthropic', 'AI', 'Automation'],
      githubUrl: 'https://github.com/diekotto/ai-pull-review',
      liveUrl: 'https://github.com/diekotto/ai-pull-review',
    },
    {
      title: 'Sonar Scanner Analysis',
      description:
        'Spins up SonarQube + Scanner inside CI, runs analysis and uploads a Markdown report artifact—no external server needed. Perfect for private or air-gapped repos; v1 delivers full quality-gate metrics and issue breakdowns.',
      image: '/images/projects/sonar-scanner-logo.jpg',
      tags: ['GitHub Action', 'Docker', 'SonarQube', 'CI/CD', 'Automation', 'Open Source'],
      githubUrl: 'https://github.com/diekotto/sonar-scanner-analysis',
      liveUrl: 'https://github.com/diekotto/sonar-scanner-analysis',
    },
  ];

  return (
    <section id="projects" className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <SectionHeading command="ls projects/" className="mb-4" />
        <p className="mb-12 max-w-3xl text-muted-foreground">
          # A selection of projects that showcase my expertise in cloud architecture and DevOps engineering.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full border-b border-border">
                <Image src={project.image || '/placeholder.svg'} alt={project.title} fill className="object-cover" />
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

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="https://github.com/diekotto" target="_blank" rel="noopener noreferrer">
              View More Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

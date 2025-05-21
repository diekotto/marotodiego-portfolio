import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Cloud Cost Optimization Platform',
      description:
        'Developed a platform that analyzes cloud resource usage and provides recommendations for cost optimization, resulting in 30% cost reduction for clients.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['AWS', 'Terraform', 'React', 'Node.js', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Serverless Microservices Architecture',
      description:
        'Designed and implemented a serverless architecture for a fintech application, improving scalability and reducing operational costs by 40%.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Serverless Framework', 'TypeScript'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Multi-Cloud Kubernetes Platform',
      description:
        'Built a Kubernetes platform that spans multiple cloud providers, ensuring high availability and disaster recovery capabilities.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['Kubernetes', 'Terraform', 'Helm', 'GitOps', 'Prometheus'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Automated CI/CD Pipeline',
      description:
        'Implemented a fully automated CI/CD pipeline for a large e-commerce platform, reducing deployment time from days to minutes.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['GitHub Actions', 'Docker', 'AWS', 'Node.js', 'Jest'],
      githubUrl: '#',
      liveUrl: '#',
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

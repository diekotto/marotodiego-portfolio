import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  const experiences = [
    {
      title: 'Cloud Architect',
      company: 'Softtek',
      period: 'Mar 2022 – Present',
      description:
        'Lead architect designing AWS-native, multi-account infrastructures using Terraform and GitHub Actions.',
      achievements: [
        'Designed and delivered AWS-native, multi-account architectures with Terraform and GitHub Actions',
        'Championed serverless & micro-services patterns, slashing deployment times by 60%',
        'Mentored 10+ engineers in cloud-native design, security, and IaC best practices',
      ],
      technologies: ['AWS', 'Terraform', 'GitHub Actions', 'Serverless', 'Microservices'],
    },
    {
      title: 'Cloud & Software Engineer',
      company: 'Insanity Dev',
      period: 'Jan 2019 – Present',
      description:
        'Engineer focused on Kubernetes-based micro-services and automated deployments for fintech applications.',
      achievements: [
        'Built Kubernetes-based micro-services in Node.js & TypeScript for high-traffic fintech apps',
        'Automated blue/green deployments and stress-testing pipelines, ensuring 99.99% uptime',
        'Led AWS cost-optimization initiative, cutting monthly spend by 30%',
      ],
      technologies: ['Kubernetes', 'Node.js', 'TypeScript', 'AWS', 'Automation'],
    },
    {
      title: 'Software Engineer',
      company: 'Bit2Me',
      period: 'Apr 2020 – Mar 2022',
      description: 'Developed crypto-exchange services and migrated workloads to GKE to boost deployment frequency.',
      achievements: [
        'Created crypto-exchange services with NestJS, PostgreSQL & MongoDB',
        'Migrated legacy workloads to GKE, improving release frequency from weekly to daily',
      ],
      technologies: ['NestJS', 'PostgreSQL', 'MongoDB', 'GKE', 'Kubernetes'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
            My professional journey in cloud architecture and DevOps engineering.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle>{exp.title}</CardTitle>
                  <Badge variant="outline" className="md:self-start">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{exp.company}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-slate-700 dark:text-slate-300">{exp.description}</p>
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-700 dark:text-slate-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

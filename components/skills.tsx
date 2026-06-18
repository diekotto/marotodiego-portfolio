import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from '@/components/section-heading';

export default function Skills() {
  const skillCategories = [
    {
      title: 'AWS & Serverless',
      skills: ['Lambda', 'API Gateway', 'SQS', 'SNS', 'ECS', 'EKS', 'RDS'],
    },
    {
      title: 'Infrastructure as Code',
      skills: ['Terraform', 'CloudFormation', 'CDK', 'Projen'],
    },
    {
      title: 'Containers & Orchestration',
      skills: ['Docker', 'Kubernetes'],
    },
    {
      title: 'Languages',
      skills: ['TypeScript / Node.js', 'Python', 'Bash'],
    },
    {
      title: 'Databases & Caching',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'InfluxDB'],
    },
    {
      title: 'DevOps DNA',
      skills: ['Github Actions workflows', 'CI/CD pipelines', 'automated testing', 'security hardening'],
    },
    {
      title: 'Observability & Monitoring',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch', 'Sentry', 'New Relic'],
    },
    {
      title: 'Scripting & Automation',
      skills: [
        'Python scripts',
        'Bash automation',
        'Data mining',
        'Pattern recognition',
        'Selenium',
        'Data extraction',
      ],
    },
    {
      title: 'Security & Compliance',
      skills: [
        'IAM policies',
        'VPC security',
        'KMS encryption',
        'AWS Security Best Practices',
        'Pentesting',
        'Api Abuse',
        'OWASP',
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <SectionHeading command="ls -la ~/stack" className="mb-4" />
        <p className="mb-12 max-w-3xl text-muted-foreground">
          # My go-to tools and areas of expertise for building resilient, automated cloud platforms.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-base text-primary before:content-['#_']">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm py-1">
                      {skill}
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

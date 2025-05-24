import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Stack &amp; Superpowers</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
            My go-to tools and areas of expertise for building resilient, automated cloud platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
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

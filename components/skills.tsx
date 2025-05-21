import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Heroku'],
    },
    {
      title: 'DevOps & CI/CD',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD', 'Terraform', 'Ansible'],
    },
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Bash', 'Go'],
    },
    {
      title: 'Frameworks & Technologies',
      skills: ['Node.js', 'Express', 'Next.js', 'FastAPI', 'Serverless Framework', 'AWS CDK'],
    },
    {
      title: 'Monitoring & Observability',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic'],
    },
    {
      title: 'Databases & Storage',
      skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'S3', 'Elasticsearch'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
            A comprehensive set of technical skills and expertise that I bring to every project.
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

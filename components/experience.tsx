import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Cloud Architect',
      company: 'TechCloud Solutions',
      period: '2020 - Present',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      achievements: [
        'Designed and implemented cloud-native architectures for enterprise clients, resulting in 40% reduction in operational costs',
        'Led a team of 5 DevOps engineers in implementing CI/CD pipelines and infrastructure automation',
        'Migrated legacy applications to containerized microservices architecture',
      ],
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'CI/CD'],
    },
    {
      title: 'DevOps Engineer',
      company: 'Innovate Systems',
      period: '2018 - 2020',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      achievements: [
        'Implemented infrastructure as code using Terraform and AWS CloudFormation',
        'Reduced deployment time by 70% through automation and CI/CD implementation',
        'Improved system reliability with comprehensive monitoring and alerting solutions',
      ],
      technologies: ['AWS', 'Terraform', 'Jenkins', 'Python', 'ELK Stack'],
    },
    {
      title: 'Backend Developer',
      company: 'Digital Solutions Inc.',
      period: '2016 - 2018',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      achievements: [
        'Developed RESTful APIs using Node.js and Express',
        'Implemented serverless architectures for high-traffic applications',
        'Optimized database performance and implemented caching strategies',
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'AWS Lambda', 'Redis'],
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

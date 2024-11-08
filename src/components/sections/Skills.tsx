import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cloud,
  Code,
  Database,
  Settings,
  Shield,
  Terminal,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      skills: [
        {
          name: "AWS Architecture",
          details: "Solutions Architect Certified",
        },
        {
          name: "Infrastructure as Code",
          details: "Terraform, CloudFormation, Ansible",
        },
        {
          name: "Containers",
          details: "Docker, Kubernetes, Open Shift",
        },
      ],
    },
    {
      title: "Development",
      icon: <Code className="w-6 h-6 text-green-500" />,
      skills: [
        {
          name: "Backend",
          details: "Node.js, TypeScript, Python, Go",
        },
        {
          name: "Frontend",
          details: "Angular, React, Vite, TailwindCSS, Shadcn",
        },
        {
          name: "Misc",
          details:
            "Serverless, Rest, WebSockets, gRPC, Kafka, RabbitMQ, SonarQube",
        },
      ],
    },
    {
      title: "Scripting & Automation",
      icon: <Terminal className="w-6 h-6 text-yellow-500" />,
      skills: [
        {
          name: "Data Mining",
          details: "High-frequency data mining, Pattern recognition",
        },
        {
          name: "Web Scraping",
          details: "Selenium, Python scripts, Data extraction",
        },
        {
          name: "Process Automation",
          details: "Task automation, Workflow optimization",
        },
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      skills: [
        { name: "NoSQL", details: "MongoDB, DynamoDB, Influx" },
        { name: "SQL", details: "PostgreSQL, MySQL" },
        { name: "Caching", details: "Redis, Memoization" },
      ],
    },
    {
      title: "DevOps",
      icon: <Settings className="w-6 h-6 text-orange-500" />,
      skills: [
        {
          name: "CI/CD",
          details: "GitHub Actions, BitBucket",
        },
        {
          name: "Monitoring",
          details: "Grafana, ELK, Sentry, New Relic",
        },
        {
          name: "Version Control",
          details: "Git, GitFlow",
        },
      ],
    },
    {
      title: "Security",
      icon: <Shield className="w-6 h-6 text-red-500" />,
      skills: [
        {
          name: "Security Testing",
          details: "Pentesting, Api Abuse, OWASP",
        },
        {
          name: "Cloud Security",
          details: "AWS Security Best Practices",
        },
        {
          name: "Infrastructure Security",
          details: "Network & Application Security",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="w-full">
              <CardHeader className="flex flex-row items-center space-y-0 gap-2 pb-2">
                {category.icon}
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 block">
                        {skill.details}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

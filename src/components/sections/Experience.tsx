// src/components/sections/Experience.tsx
import { Briefcase } from 'lucide-react';

interface JobExperience {
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const experiences: JobExperience[] = [
  {
    title: "Cloud Architect",
    company: "Softtek",
    description: "Leading AWS architecture and cloud transformation initiatives as a consultant. Responsible for designing and implementing scalable cloud solutions, automating infrastructure deployment, and mentoring teams in cloud-native development practices. Specializing in serverless architectures and establishing robust CI/CD pipelines for enterprise clients.",
    technologies: ["AWS", "Terraform", "GitHub Actions", "Python", "Node.js", "Serverless", "Arquitecture design"]
  },
  {
    title: "Cloud & Software Engineer",
    company: "Insanity Dev",
    description: "Architecting and developing cloud-native applications with a focus on serverless technologies. Leading the design and implementation of highly available systems, implementing infrastructure as code practices, and conducting performance optimization and stress testing for critical applications.",
    technologies: ["AWS", "Terraform", "Node.js", "DevOps", "Serverless", "Docker", "Kubernetes"]
  },
  {
    title: "Software Engineer",
    company: "Bit2Me",
    description: "Developed and maintained high-performance cryptocurrency trading systems. Built robust backend services using Node.js and TypeScript, managing complex database architectures, and implementing Kubernetes-based infrastructure. Focused on creating secure and scalable financial technology solutions.",
    technologies: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Kubernetes", "AWS", "GCloud"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-500 mr-3" />
                <div>
                  <h3 className="text-xl font-bold">{job.title} @ {job.company}</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-blue-900 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

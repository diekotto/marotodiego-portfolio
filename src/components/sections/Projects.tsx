// src/components/sections/Projects.tsx
import { Code, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: 'Repository Dispatch',
    description:
      'A GitHub action that dispatches events to other repositories. It allows you to trigger workflows in other repositories, enabling cross-repository workflows.',
    technologies: ['Node.js', 'GitHub API', 'Github Actions'],
    githubUrl: 'https://github.com/diekotto/repository-dispatch',
  },

  {
    title: 'AI Pull Review',
    description:
      "A powerful tool for automated code review powered by Anthropic's Claude AI. Available both as a GitHub Action and as an NPM package for CLI usage.",
    technologies: ['Node.js', 'Claude AI', 'GitHub API', 'Github Actions', 'NPM'],
    githubUrl: 'https://github.com/diekotto/ai-pull-review',
  },
  {
    title: 'Sonar Scanner Analysis',
    description:
      'A GitHub Action that runs SonarQube analysis using local Docker containers, providing a self-contained analysis environment without requiring an external SonarQube server.',
    technologies: ['Node.js', 'SonarQube', 'GitHub API', 'Github Actions', 'Docker'],
    githubUrl: 'https://github.com/diekotto/sonar-scanner-analysis',
  },
  {
    title: 'Redlock k8s laboratory',
    description:
      'A Kubernetes cluster with redis Redlock semaphores for testing distributed systems. Laboratory with mini-kube instructions, includes full client-server system to see in life the cluster communicaiton blockers.',
    technologies: ['Kubernetes', 'minikube', 'Redlock', 'Docker', 'Docker-compose', 'Node.js', 'Cron'],
    githubUrl: 'https://github.com/diekotto/redlock-k8s-laboratory',
  },
  {
    title: 'Social Food Bank Management System - Final Degree Project',
    description:
      'Final grade: 9/10. Full-stack web application developed for social food banks, facilitating access to basic food supplies for vulnerable families. The system enables inventory control, user management, and statistical reporting.',
    technologies: ['Typescript', 'Angular', 'Node.js', 'Nestjs', 'Websockets', 'Aws', 'MongoDB'],
    githubUrl: 'https://github.com/diekotto/TFG',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Code className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <a href={project.githubUrl} className="text-blue-400 hover:text-blue-300">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
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

export default Projects;

// src/components/sections/Skills.tsx
import { Cloud, Terminal, Book } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-700 bg-opacity-50 transform hover:scale-105 transition-transform">
            <Cloud className="w-8 h-8 mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Cloud</h3>
            <ul className="space-y-2">
              <li>AWS arquitecture and design</li>
              <li>IaC - Terraform, Cloudformation, Ansible</li>
              <li>Docker & Kubernetes</li>
              <li>Serverless Paradigm</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-700 bg-opacity-50 transform hover:scale-105 transition-transform">
            <Terminal className="w-8 h-8 mb-4 text-green-500" />
            <h3 className="text-xl font-bold mb-2">Development</h3>
            <ul className="space-y-2">
              <li>Node.js & TypeScript</li>
              <li>Python</li>
              <li>MongoDB & PostgreSQL</li>
              <li>DevOps & CI/CD</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-gray-700 bg-opacity-50 transform hover:scale-105 transition-transform">
            <Book className="w-8 h-8 mb-4 text-purple-500" />
            <h3 className="text-xl font-bold mb-2">Certifications</h3>
            <ul className="space-y-2">
              <li>AWS Certified Solutions Architect</li>
              <li>Terraform</li>
              <li>Docker, Compose and Swarm</li>
              <li>Security & Pentesting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

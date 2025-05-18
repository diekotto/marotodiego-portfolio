// src/components/sections/Hero.tsx
import { Linkedin, NotebookPen, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-6">Cloud Architect & DevOps Engineer</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Specialized in designing and building scalable, resilient and secure cloud infrastructure. Extensive
          experience with Node.js, TypeScript, Python and serverless architectures.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/diekotto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/diegomaroto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://dev.to/diek"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <NotebookPen className="w-5 h-5" />
            <span>Dev.to</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

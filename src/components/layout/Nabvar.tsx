// src/components/layout/Navbar.tsx
import { Cloud } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full backdrop-blur-sm bg-opacity-80 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Cloud className="w-6 h-6" />
          <span className="text-xl font-bold">Diego Maroto</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-blue-400 transition-colors">
            Experience
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('articles')} className="hover:text-blue-400 transition-colors">
            Articles
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

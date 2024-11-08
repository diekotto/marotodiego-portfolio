// src/App.tsx
import Navbar from './components/layout/Nabvar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Articles from './components/sections/Articles';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Articles />
    </div>
  );
}

export default App;

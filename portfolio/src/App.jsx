import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-blue-500/30 font-sans flex flex-col relative overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;

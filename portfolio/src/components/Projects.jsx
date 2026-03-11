import React from 'react';
import { projects } from '../config/data';
import { ProjectCard } from './ui/ProjectCard';

export const Projects = () => {
    return (
        <section id="projects" className="py-24 relative border-t border-slate-800">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of my recent work in web3, cloud infrastructure, and full-stack development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={project.id} className="h-full">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

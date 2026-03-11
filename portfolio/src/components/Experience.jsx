import React from 'react';
import { experience } from '../config/data';

export const Experience = () => {
    return (
        <section id="experience" className="py-24 relative bg-slate-900/50 border-t border-slate-800">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My professional journey and the impact I've made across different organizations.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                    {experience.map((exp, index) => (
                        <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12 last:mb-0">
                            {/* Timeline marker */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 group-hover:bg-blue-500 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10 relative left-0 md:left-1/2 ml-[2px] md:ml-0"></div>

                            {/* Content box */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-xl glass-card hover:-translate-y-1 transition-transform duration-300 ml-4 md:ml-0">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{exp.role}</h3>
                                    <span className="text-blue-400 font-medium text-sm px-3 py-1 bg-blue-500/10 rounded-full w-fit">{exp.duration}</span>
                                </div>
                                <h4 className="text-lg font-medium text-slate-300 mb-4">{exp.company}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

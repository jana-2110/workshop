import React from 'react';
import { techSkills } from '../config/data';
import { ProgressBar } from './ui/ProgressBar';

export const Skills = () => {
    return (
        <section id="skills" className="py-24 relative border-t border-slate-800">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My core competencies and technologies I specialize in for building scalable and reliable systems.
                    </p>
                </div>

                <div className="glass-card p-8 md:p-12 rounded-2xl max-w-3xl mx-auto">
                    {techSkills.map((skill, index) => (
                        <div key={skill.name} className={index !== techSkills.length - 1 ? 'mb-8' : ''}>
                            <ProgressBar
                                label={skill.name}
                                percentage={skill.level}
                                icon={skill.icon}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

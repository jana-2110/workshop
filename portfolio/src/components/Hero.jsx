import React from 'react';
import { personalInfo } from '../config/data';

export const Hero = () => {
    return (
        <section id="about" className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left animate-slideUp">
                    <h2 className="text-blue-400 font-semibold tracking-wide mb-4 flex items-center justify-center md:justify-start gap-2">
                        <span className="w-8 h-[2px] bg-blue-400 inline-block"></span>
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                        {personalInfo.name}
                    </h1>
                    <h3 className="text-2xl md:text-3xl font-medium text-slate-300 mb-6">
                        <span className="gradient-text">{personalInfo.role}</span>
                    </h3>
                    <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                        {personalInfo.tagline} {personalInfo.about}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 text-lg">
                            View Work
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="px-8 py-3.5 glass hover:bg-slate-800 text-white rounded-lg font-medium transition-all border border-slate-700 hover:border-slate-600 text-lg">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Abstract shape visual / Avatar placeholder */}
                <div className="flex-1 flex justify-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full animate-pulse-slow blur-xl opacity-50"></div>
                        <div className="absolute inset-2 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center overflow-hidden">
                            <span className="text-8xl">🧑‍💻</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

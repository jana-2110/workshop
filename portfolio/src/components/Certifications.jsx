import React from 'react';
import { certifications } from '../config/data';

export const Certifications = () => {
    return (
        <section id="certifications" className="py-24 relative bg-slate-900/50 border-t border-slate-800">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Licenses & <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Professional credentials validating my expertise in cloud and blockchain technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform group flex flex-col h-full border-slate-700/60 hover:border-blue-500/30">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-5 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{cert.title}</h3>
                            <p className="text-slate-400 font-medium mb-6 flex-1">{cert.issuer}</p>
                            <div className="text-sm text-slate-300 font-semibold bg-slate-800 py-1.5 px-3 rounded-md w-fit mt-auto border border-slate-700/50">
                                Issued: <span className="text-blue-400">{cert.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

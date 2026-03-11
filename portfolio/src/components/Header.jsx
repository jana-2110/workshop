import React, { useState, useEffect } from 'react';
import { personalInfo } from '../config/data';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                    {personalInfo.name.split(' ')[0]}<span className="text-white">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6 border-t border-slate-800 animate-slideUp">
                    {navLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-slate-300 hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

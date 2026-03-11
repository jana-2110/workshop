import React, { useEffect, useState, useRef } from 'react';

export const ProgressBar = ({ label, percentage, icon }) => {
    const [width, setWidth] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setWidth(percentage);
            }
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, [percentage]);

    return (
        <div className="w-full mb-4" ref={ref}>
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-200 flex items-center gap-2">
                    {icon && <span className="text-lg">{icon}</span>}
                    {label}
                </span>
                <span className="text-xs font-bold text-blue-400">{percentage}%</span>
            </div>
            <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden border border-slate-700/50">
                <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${width}%` }}
                >
                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

import React from 'react';

export const Badge = ({ text }) => {
    return (
        <span className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full inline-block backdrop-blur-sm">
            {text}
        </span>
    );
};

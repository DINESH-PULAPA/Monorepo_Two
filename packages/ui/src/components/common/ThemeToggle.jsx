import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon } from 'lucide-react';

export const ThemeToggle = () => {
    const { theme, changeTheme } = useTheme();

    const themes = [
        { id: 'variation-1', name: 'Modern SaaS' },
        { id: 'variation-2', name: 'Pro Developer' },
        { id: 'variation-3', name: 'Creative Studio' }
    ];

    const handleThemeToggle = () => {
        const currentIndex = themes.findIndex(t => t.id === theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        changeTheme(themes[nextIndex].id);
    };

    return (
        <button
            onClick={handleThemeToggle}
            className="p-2 rounded-full text-title-color hover:text-first-color transition-colors"
            title="Switch Theme"
            aria-label="Switch Theme"
        >
            <Moon size={20} />
        </button>
    );
};

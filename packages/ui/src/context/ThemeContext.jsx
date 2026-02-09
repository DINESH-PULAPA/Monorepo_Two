import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children, defaultTheme = 'variation-1' }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || defaultTheme;
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);

        // Remove all previous variation classes
        document.body.classList.remove(
            'variation-1', 'variation-2', 'variation-3',
            'variation-4', 'variation-5', 'variation-6'
        );

        // Add current theme class
        document.body.classList.add(theme);
    }, [theme]);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

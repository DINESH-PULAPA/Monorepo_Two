import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';
import { ThemeToggle } from '../common/ThemeToggle';

export const Header = ({ data }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed w-full top-0 left-0 z-fixed transition-all duration-300 ${isScrolled ? 'bg-body-color shadow-lg' : 'bg-transparent'
            }`}>
            <nav className="h-[3.5rem] flex justify-between items-center max-w-[1120px] mx-auto px-6">
                <a href="#" className="flex items-center gap-2 text-title-color font-second font-semibold">
                    {data?.basics?.name || 'Anid'}
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-title-color font-medium hover:text-first-color transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-title-color transition-colors hover:text-first-color"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-[3.5rem] right-0 w-full bg-container-color p-8 shadow-xl transition-all duration-300 md:hidden border-t border-white/10 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-[150%] opacity-0'
                    }`}>
                    <ul className="flex flex-col gap-6 text-center">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-title-color text-lg font-medium hover:text-first-color block"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

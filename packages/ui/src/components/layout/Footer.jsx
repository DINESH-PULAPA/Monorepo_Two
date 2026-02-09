import React from 'react';
import { FadeIn } from '../common/FadeIn';

export const Footer = ({ data }) => {
    return (
        <footer className="footer bg-body-color border-top border-white/5 pt-12 pb-8">
            <div className="container text-center">
                <FadeIn>
                    <h1 className="text-2xl font-second font-semibold text-title-color mb-4">
                        {data?.basics?.name || 'Rohan'}
                    </h1>

                    <ul className="flex justify-center gap-8 mb-8">
                        <li><a href="#about" className="text-text-color hover:text-first-color transition-colors">About</a></li>
                        <li><a href="#projects" className="text-text-color hover:text-first-color transition-colors">Projects</a></li>
                        <li><a href="#skills" className="text-text-color hover:text-first-color transition-colors">Skills</a></li>
                    </ul>

                    <p className="text-sm text-text-color mb-2">
                        All Rights Reserved By <span className="text-first-color font-medium">{data?.basics?.name}</span>
                    </p>
                    <p className="text-sm text-text-color-light">
                        &#169; {new Date().getFullYear()}
                    </p>
                </FadeIn>
            </div>
        </footer>
    );
};

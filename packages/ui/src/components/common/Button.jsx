import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({
    children,
    variant = 'primary',
    className,
    href,
    ...props
}) {
    const baseStyles = "inline-flex items-center gap-2 font-medium transition-transform duration-300 hover:scale-105 active:scale-95";

    const variants = {
        primary: "bg-gradient-to-r from-first-color to-first-color-alt text-white py-3 px-6 rounded-full shadow-lg hover:shadow-xl",
        outline: "border-2 border-first-color text-first-color py-2.5 px-6 rounded-full hover:bg-first-color hover:text-white",
        ghost: "text-first-color hover:text-first-color-alt",
        link: "text-title-color hover:text-first-color"
    };

    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </Component>
    );
}

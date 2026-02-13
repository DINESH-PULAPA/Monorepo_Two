/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                // Colors from CSS variables - using var() to reference the actual CSS custom properties
                "first-color": "var(--first-color)",
                "first-color-alt": "var(--first-color-alt)",
                "first-color-alt-2": "var(--first-color-alt-2, var(--first-color-alt))",
                "first-color-light": "var(--first-color-light, var(--first-color))",
                "title-color": "var(--title-color)",
                "text-color": "var(--text-color)",
                "text-color-light": "var(--text-color-light)",
                "body-color": "var(--body-color)",
                "container-color": "var(--container-color)",
            },
            fontFamily: {
                body: ['"Montserrat"', "sans-serif"],
                second: ['"Unbounded"', "sans-serif"],
            },
            zIndex: {
                tooltip: "10",
                fixed: "100",
            },
            animation: {
                blob: "blob 10s infinite ease-in-out alternate",
                'fade-up': 'fadeUp 0.5s ease-out forwards',
                'scale-down': 'scaleDown 0.2s ease-out forwards',
                'glow-pulse': 'glowPulse 2s infinite',
                'slide-reveal': 'slideReveal 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0, 0) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0, 0) scale(1)" },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleDown: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0.98)' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                slideReveal: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            },
        },
    },
    plugins: [],
}

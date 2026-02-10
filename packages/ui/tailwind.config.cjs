/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                // Colors from UTube-code style.css variables
                "first-color": "hsl(var(--hue), 60%, 64%)",
                "first-color-alt": "hsl(var(--hue), 80%, 56%)",
                "first-color-alt-2": "hsl(var(--hue), 60%, 56%)",
                "first-color-light": "hsl(var(--hue), 60%, 74%)",
                "title-color": "hsl(240, 8%, 95%)",
                "text-color": "hsl(240, 8%, 70%)",
                "text-color-light": "hsl(240, 8%, 50%)",
                "body-color": "hsl(240, 100%, 2%)",
                "container-color": "hsl(240, 8%, 6%)",
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

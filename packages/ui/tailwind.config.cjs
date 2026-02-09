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
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0, 0) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0, 0) scale(1)" },
                },
            },
            animation: {
                blob: "blob 10s infinite ease-in-out alternate",
            },
        },
    },
    plugins: [],
}

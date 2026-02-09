/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/src/**/*.{js,ts,jsx,tsx}", // Scan UI package
    ],
    theme: {
        extend: {},
    },
    presets: [require('../../packages/ui/tailwind.config.cjs')], // Inherit UI config
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                navbar: '#1A2634',
                sidebar: '#3b4956',
            },
            fontFamily: {
                sans: ['Poppins'],
            },
        },
    },
    plugins: [],
};

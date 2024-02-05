/** @type {import('tailwindcss').Config} */
module.exports = {
    // in content we want to search for any html and js files that have tailwind classes
    // with content: ['./*.html'], we are searching in the root for any HTML file
    content: ['./*.html'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                strongCyan: 'hsl(171,66%,44%)',
                lightBlue: 'hsl(233,100%,69%)',
                darkGrayishBlue: 'hsl(210,10%,33%)',
                grayishBlue: 'hsl(201,11%,66%)',
            },
            fontFamily: {
                sans: ['Bai Jamjuree', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

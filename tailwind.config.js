/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                wave: "url('/src/assets/svg.png')",
            },
            colors: {
                primary: '#102E4A',
                primaryDark: '#0A1E31',
                secondary: '#A23B72',
                accent: '#70EE9C',
                green: '#459ba7',
                'grey-light': '#91ADC2',
                'grey-regular': '#7A8B99',
                neutral: '#3d4451',
                white: '#f4f4f4',
                sky: '#0369a1',
                indigo: '#4338ca',
            },
            fontFamily: {
                monserrat: ['Montserrat', 'sans-serif'],
                fira: ['Fira Sans', 'sans-serif'],
            },
            keyframes: {
                loader: { '100%': { transform: 'translateY(-30px)' } },
            },
            animation: {
               'loader' : 'loader infinite 0.3s alternate',
            },
        },
    },

    plugins: [require('daisyui')],
};

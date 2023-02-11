/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/*.{html,js}'],
    theme: {
        extend: {
            backgroundImage: {
                banner: "url('/dist/img/banner.png')",
            },
            fontFamily: {
                manrope: "'Manrope', sans-serif",
            },
        },
    },
    plugins: [],
};

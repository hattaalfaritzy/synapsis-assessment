import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#346BB3',
                    50: '#B5CCEA',
                    100: '#A5C1E5',
                    200: '#86ABDC',
                    300: '#6695D3',
                    400: '#467FC9',
                    500: '#346BB3',
                    600: '#275188',
                    700: '#1B375C',
                    800: '#0E1D31',
                    900: '#010305',
                    950: '#000000'
                },
                secondary: {
                    DEFAULT: '#49BBE7',
                    50: '#EBF8FC',
                    100: '#D9F1FA',
                    200: '#B5E3F5',
                    300: '#91D6F1',
                    400: '#6DC8EC',
                    500: '#49BBE7',
                    600: '#1DA6DB',
                    700: '#1680A9',
                    800: '#105B78',
                    900: '#093546',
                    950: '#06232E'
                },
                informative: {
                    DEFAULT: '#00AEEB',
                    200: '#E5F6FD',
                    300: '#B0EBFF',
                    400: '#51D2FF',
                    500: '#00AEEB',
                    600: '#006285',
                    700: '#003C52',
                },
                success: {
                    DEFAULT: '#27AE60',
                    200: '#E9F6F0',
                    300: '#D4FFDE',
                    400: '#A9EFB9',
                    500: '#27AE60',
                    600: '#188130',
                    700: '#105620',
                },
                warning: {
                    DEFAULT: '#DF7B33',
                    200: '#FBF1EB',
                    300: '#FFD5B7',
                    400: '#F5A164',
                    500: '#DF7B33',
                    600: '#A6551A',
                    700: '#814813',
                },
                error: {
                    DEFAULT: '#CF3F24',
                    200: '#FAEBEA',
                    300: '#F6D2CB',
                    400: '#E78674',
                    500: '#CF3F24',
                    600: '#A5321D',
                    700: '#7A2515',
                },
            },
            fontFamily: {
                sans: ['var(--font-poppins)', ..._fontFamily.sans],
                mono: ['var(--font-roboto-mono)', ..._fontFamily.mono],
            },
            fontSize: {
                xxxs: '.5rem',
                xxs: '.625rem',
            },
            screens: {
                xsm: '360px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
    },
    plugins: [],
};
export default config;

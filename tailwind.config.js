/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				purple: {
					200: '#C2A5F9CC',
					500: '#7025FB',
				},
				orange: '#FD5334',
				black: '#212529',
				green: {
					100: '#E9FAF1',
				},
				gray: {
					100: '#F5F5F5',
					200: '#E9ECEF',
					300: '#F8F9FA',
					400: '#E5E6E8',
					500: '#95939A',
					600: '#F7F7F9',
					800: '#B9B4C34D',
				},
				red: {
					100: '#FFEFEF',
					700: '#DC3545',
				},
			},
			backgroundImage: {
				landing: "url('./assets/img/landing-page.png')",
				secondary: "url('./assets/img/secondary.png')",
			},
			fontFamily: {
				sans: ['Open Sans', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif'],
			},
			boxShadow: {
				xl: '0px 2px 4px rgba(0, 0, 0, 0.1);',
			},
		},
	},
	plugins: [],
}

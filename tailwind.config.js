/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				purple: '#7025FB',
				orange: '#FD5334',
				black: '#212529',
			},
			backgroundImage: {
				landing: "url('./assets/img/landing-page.png')",
			},
		},
	},
	plugins: [],
}

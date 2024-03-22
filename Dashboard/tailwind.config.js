/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Rubik: ["Rubik", "sans-serif"],
				OpenSans: ["OpenSans-Regular", "sans-serif"],
				OpenSansBold: ["OpenSans-SemiBold", "sans-serif"],
			},
			backgroundImage: {
				login: "url('../src/Assets/login.png')",
			},
		},
	},
	plugins: [],
};

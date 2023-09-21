/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		backgroundImage: {
			mainBackground: "url('/src/assets/images/background.jpg')",
		},
		extend: {},
	},
	plugins: [require("daisyui")],
};

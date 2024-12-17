import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				outfit: ["Outfit", "sans-serif"],
				montesrrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				customOrange: "#F26101",
				customBlue: "#3C97AB",
			},
		},
	},
	plugins: [],
};
export default config;

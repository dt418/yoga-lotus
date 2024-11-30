import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				suse: ['"SUSE"', ...fontFamily.sans],
				gotham_black: ['"Gotham Black"', ...fontFamily.serif],
			},
			colors: {
				"lotus-main": "#c7a78a",
				"lotus-hover": "#9a816b",
				"lotus-black": "#191614",
				"lotus-text": "#ffffff",
			},
		},
		variants: {
			extend: {},
		},
	},
	plugins: [typography(), tailwindcssAnimate],
} satisfies Config;
export default config;

import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	theme: {
    	extend: {
    		colors: {
    			input: '',
    			ring: '',
    			background: {
    				DEFAULT: '#191919',
    				lightDark: '#232323',
					white: '#E7E7E7',
    			},
    			text: {
    				DEFAULT: '#E7E7E7',
    				body: '#898989'
    			}
    		},
    	}
    },
	plugins: [
		require("tailwindcss-animate")
	],
	
} satisfies Config;

export default config;

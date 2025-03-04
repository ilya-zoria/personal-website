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
    				DEFAULT: '#F8F7F1',
    				dark: '#191919',
    				lightDark: '#252525',
    				grey: '#fff'
    			},
    			text: {
    				DEFAULT: 'theme(colors.gray.800)',
					gray: 'theme(colors.gray.400)',
    				dark: '#D5D5D5',
    				darkBody: '#989898'
    			}
    		},
    	}
    },
	plugins: [
		require("tailwindcss-animate")
	],
	
} satisfies Config;

export default config;

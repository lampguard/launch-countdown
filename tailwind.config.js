const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				scale: 'scale 1s infinite',
				slide: 'slide 500ms infinite',
			},
			keyframes: {
				scale: {
					'0%, 100%': {
						transform: 'scale(1)',
						translate: '0px 0px',
					},
					'50%': {
						transform: 'scale(0.98)',
						translate: '0px -10px',
					},
				},
				slide: {
					'0%, 100%': {
						translate: '0px 0px',
					},
					'50%': {
						translate: '0px -10px',
					},
				},
			},
		},
	},
	plugins: [daisyui],
};

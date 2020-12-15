module.exports = {
	theme: {
		extend: {
			screens: {
				portrait: { raw: '(orientation: portrait)' },
			},
			spacing: {
				'100vh': '100vh',
			},
		},
	},
	variants: {
		textColor: [
			'responsive',
			'group-hover',
			'focus-within',
			'hover',
			'focus',
			'active',
			'disabled',
		],
		backgroundColor: [
			'responsive',
			'group-hover',
			'focus-within',
			'hover',
			'focus',
			'active',
			'disabled',
		],
		cursor: ['responsive', 'disabled'],
	},
	plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/ui')],
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js',
			// TypeScript
			'plugins/**/*.ts',
			'nuxt.config.ts',
		],
	},
}

const px2rem = require('postcss-px2rem')

export default {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'nuxt-flexible',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		// script: [
		// 	{ src: '/flexible/index.js', type: 'text/javascript', charset: 'utf-8' },
		// ],
		script: [
			{
				src: '/flexible/dashboard.js',
				type: 'text/javascript',
			},
		],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		'element-ui/lib/theme-chalk/reset.css',
		'element-ui/lib/theme-chalk/index.css',
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: ['@/plugins/vue-echarts', '@/plugins/element-ui'],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: false,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		postcss: [
			// require('postcss-px2rem')({
			// remUnit: 192,
			// }),
			require('@njleonzhang/postcss-px-to-rem')({
				unitToConvert: 'px',
				widthOfDesignLayout: 1920, // (Number) The width of the viewport.
				unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
				selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
				minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
				mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
			}),
		],
	},
}

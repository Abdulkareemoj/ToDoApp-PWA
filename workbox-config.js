module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,css,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/essential',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	plugins: ['prettier'],
	rules: {},
}

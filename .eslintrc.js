module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
		jest: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		"react/prop-types": "off",
		"react/display-name": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"prettier/prettier": [
			1,
			{
				trailingComma: "es5",
				singleQuote: true,
				semi: false,
			},
		],
		...require("eslint-config-prettier").rules,
		// ...require("eslint-config-prettier/@typescript-eslint").rules,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
}

/* globals module */

let SEV1 = "error";
let SEV2 = 1;
let SEV3 = 1;
const strict = false;
const loose = false;
const errorsOnly = false;
const hasBabel = true;
const hasReact = true;
const tabsOrSpaces = "tab";

if (strict) {
	SEV2 = "error";
	SEV3 = "error";
}
else if (loose) {
	SEV3 = "off";
}
else if (errorsOnly) {
	SEV2 = "off";
	SEV3 = "off";
}

const eslintConf = {
	parser: hasBabel ? "babel-eslint" : undefined,
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	plugins: [],
	rules: {
		/**
		 * ERROR CATCHING
		 * These rules ideally catch errors before they happen. They are all pretty
		 * much SEV1s, and have no reason to disagree with them.
		 */

		"array-callback-return": SEV1,
		"no-const-assign": SEV1,
		"no-dupe-class-members": SEV1,
		"no-undef": SEV1,
		"eqeqeq": [SEV1, "always"],
		"semi": [SEV1, "always"],
		"radix": SEV1,
		"no-extra-boolean-cast": SEV1,
		"no-cond-assign": SEV1,
		"no-dupe-args": SEV1,
		"no-irregular-whitespace": SEV1,
		"no-sparse-arrays": SEV1,
		"valid-typeof": [SEV1, { requireStringLiterals: false }],
		"constructor-super": SEV1,

		/**
		 * BEST PRACTICES
		 * These don't inherently catch errors, but they may help prevent mistakes
		 * that come from not using best practices.
		 */

		"no-bitwise": SEV1,
		"no-param-reassign": SEV2,
		"no-ex-assign": SEV2,
		"no-new-func": SEV1,
		"no-confusing-arrow": SEV2,
		"no-iterator": SEV2,
		"no-restricted-syntax": [
			SEV2,
			"ForInStatement",
			"ForOfStatement",
			"WithStatement",
		],
		"no-multi-assign": SEV1,
		"no-case-declarations": SEV1,
		"comma-dangle": [SEV3, "always-multiline"],
		"no-underscore-dangle": [SEV2, { allowAfterThis: false }],
		"no-func-assign": SEV1,
		"no-class-assign": SEV1,
		"max-statements-per-line": [SEV1, { max: 1 }],
		"no-unreachable": SEV2,
		"valid-jsdoc": [SEV2, { requireReturn: false }],
		"curly": [SEV2, "all"],

		/**
		 * STYLE
		 * These are purely stylistic, and may be disagreed with, but convention
		 * over configuration should usually win out. Favor brevity without
		 * sacrificing readability with these.
		 */

		// General
		"indent": [SEV2, tabsOrSpaces],
		"max-len": [SEV2, {
			code: 100,
			ignoreUrls: true,
		}],
		"space-before-blocks": [SEV3, "always"],
		"keyword-spacing": [SEV3, { before: true, after: true }],
		"space-infix-ops": SEV3,
		"no-trailing-spaces": SEV3,
		"padded-blocks": [SEV3, "never"],
		"space-in-parens": [SEV3, "never"],
		"comma-style": [SEV3, "last"],
		"no-extra-semi": SEV2,
		"camelcase": [SEV3, { properties: "never" }],

		// Comments
		"spaced-comment": SEV3,

		// Strings
		"no-useless-escape": SEV3,

		// Objects
		"no-new-object": SEV3,
		"object-shorthand": hasBabel ? [SEV3, "always"] : "off",
		"dot-notation": [SEV3, { allowKeywords: true }],
		"object-curly-spacing": [SEV3, "always"],

		// Arrays
		"no-array-constructor": SEV3,
		"array-bracket-spacing": [SEV3, "never"],

		// Functions
		"space-before-function-paren": [SEV3, {
			anonymous: "never",
			named: "never",
			asyncArrow: "never",
		}],
		"wrap-iife": [SEV2, "outside"],
		"arrow-spacing": [SEV3, { before: true, after: true }],
		"arrow-body-style": [SEV3, "as-needed"],
		"arrow-parens": [SEV3, "always"],

		// Classes
		"no-useless-constructor": SEV3,
	},
};

// Babel rules
if (hasBabel) {
	// eslintConf.env.commonjs = true;
	eslintConf.rules = Object.assign({}, eslintConf.rules, {
		"no-var": SEV1,
		"prefer-spread": SEV1,
		"prefer-const": SEV1,
		"prefer-destructuring": [SEV2, { object: true }],
		"prefer-rest-params": hasBabel ? SEV2 : "off",

		"no-duplicate-imports": SEV2,
		// "import/no-mutable-exports": SEV1,
		// "import/prefer-default-export": SEV2,
		// "import/first": SEV2,
		// "import/no-webpack-loader-syntax": SEV2,
	});
}

// React rules
if (hasReact) {
	eslintConf.plugins.push("react");
	eslintConf.rules = Object.assign({}, eslintConf.rules, {
		"react/require-render-return": SEV1,
		"react/no-is-mounted": SEV1,
		"react/no-direct-mutation-state": SEV1,
		// "react/no-mutation-props": SEV1,
		"react/no-string-refs": SEV1,
		"react/no-unknown-property": SEV1,
		"react/style-prop-object": SEV1,
		"react/void-dom-elements-no-children": SEV1,
		"react/no-danger-with-children": SEV1,

		"react/prefer-es6-class": SEV2,
		"react/jsx-pascal-case": SEV2,
		"react/jsx-wrap-multilines": SEV2,
		"react/self-closing-comp": SEV2,

		"react/jsx-closing-bracket-location": SEV3,
	});
}

module.exports = eslintConf;

// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const ngrx = require('@ngrx/eslint-plugin/v9');

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      ...ngrx.configs.signals,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: ["enumMember", "typeLike"],
          format: ["PascalCase"],
          custom: {
            regex: "(My|my)(?=[A-Z]\\w*)",
            match: false,
          },
        },
        {
          selector: ["parameter"],
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: [
            "variable",
            "function",
            "method",
            "classProperty",
            "typeProperty",
          ],
          format: ["camelCase"],
          custom: {
            regex: "(My|my)(?=[A-Z]\\w*)",
            match: false,
          },
        },
        {
          selector: ["variable"],
          format: ["UPPER_CASE", "camelCase"],
          modifiers: ["global"],
          custom: {
            regex: "(My|my)(?=[A-Z]\\w*)",
            match: false,
          },
        },
        {
          selector: ["variable"],
          types: ["function"],
          format: ["camelCase"],
        },
        {
          selector: "interface",
          custom: {
            regex: "[Ii](?=[A-Z]\\w*)",
            match: false,
          },
          format: ["PascalCase"],
        },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
  {
    files: ['**/*.ts'],
    extends: [
      ...ngrx.configs.signals,
    ],
    rules: {
      '@ngrx/enforce-type-call': 'error',
      '@ngrx/prefer-protected-state': 'error',
      '@ngrx/signal-state-no-arrays-at-root-level': 'error',
      '@ngrx/signal-store-feature-should-use-generic-type': 'error',
      '@ngrx/with-state-no-arrays-at-root-level': 'error',
    },
  }
);

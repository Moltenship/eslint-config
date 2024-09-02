import { defineFlatConfig, type FlatESLintConfig } from "eslint-define-config";
import globals from 'globals'

import eslintTypescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import vitest from 'eslint-plugin-vitest'
import eslintImport from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'
import stylistic from '@stylistic/eslint-plugin'

export default defineFlatConfig([
  {
    ignores: ["**/node_modules/**", "**/dist/**", ".git/**"],
  },
  {
    "files": ["*.ts", "*.tsx", "*.astro"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    }
  },
  {
    plugins: {
      import: eslintImport,
      '@typescript-eslint': eslintTypescript,
      perfectionist,
      vitest,
      stylistic,
    }
  } as unknown as FlatESLintConfig,
  {
    rules: {
      ...perfectionist.configs["recommended-alphabetical"].rules,
      "@typescript-eslint/no-shadow": ["error"],
      "@stylistic/space-infix-ops": ["error", { "int32Hint": false }],
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": ["error", {
        "fixStyle": "inline-type-imports"
      }],
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/member-ordering": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      "@typescript-eslint/no-implicit-any-catch": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/no-empty-interface": [
        "error",
        {
          "allowSingleExtends": false
        }
      ],
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "vars": "all",
          "args": "after-used",
          "ignoreRestSiblings": false,
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }
      ],
      "@typescript-eslint/type-annotation-spacing": "error",
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@stylistic/comma-dangle": [
        "error",
        {
          "arrays": "always-multiline",
          "objects": "always-multiline",
          "imports": "always-multiline",
          "exports": "always-multiline",
          "functions": "always-multiline",
          "enums": "always-multiline",
          "generics": "always-multiline",
          "tuples": "always-multiline"
        }
      ],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          "multiline": {
            "delimiter": "semi",
            "requireLast": true
          },
          "singleline": {
            "delimiter": "semi",
            "requireLast": true
          }
        }
      ],
      "@stylistic/indent": [
        "error",
        2,
        {
          "SwitchCase": 1,
          "ignoredNodes": [
            "TSTypeAliasDeclaration *",
            "TSTypeParameterInstantiation > *",
            "TSTypeAnnotation"
          ]
        }
      ],
      "implicit-arrow-linebreak": 0,
      "no-dupe-class-members": 0,
      "getter-return": "error",
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-console": [
        "error",
        {
          "allow": ["error", "warn"]
        }
      ],
      "no-void": "error",
      "no-constant-condition": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "@stylistic/no-extra-semi": "error",
      "no-func-assign": "error",
      "no-import-assign": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-obj-calls": "error",
      "no-promise-executor-return": "error",
      "no-prototype-builtins": "error",
      "no-regex-spaces": "error",
      "no-setter-return": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "no-unreachable-loop": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": "error",
      "require-atomic-updates": "error",
      "use-isnan": "error",
      "curly": ["error", "all"],
      "default-case": "error",
      "default-case-last": "error",
      "@stylistic/dot-location": ["error", "property"],
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": ["error"],
      "eqeqeq": ["error", "smart"],
      "no-alert": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-constructor-return": "error",
      "no-else-return": "error",
      "no-empty-function": [
        "error",
        {
          "allow": ["constructors"]
        }
      ],
      "no-empty-pattern": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-fallthrough": "error",
      "no-floating-decimal": "error",
      "no-global-assign": "error",
      "no-implied-eval": "error",
      "no-iterator": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-loop-func": "error",
      "no-magic-numbers": "off",
      "no-multi-spaces": "error",
      "no-multi-str": "off",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-param-reassign": [
        "error",
        {
          "props": true,
          "ignorePropertyModificationsFor": ["state"]
        }
      ],
      "no-proto": "error",
      "no-return-assign": "error",
      "no-return-await": "error",
      "no-script-url": "error",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-unused-expressions": "error",
      "no-useless-call": "error",
      "no-useless-catch": "error",
      "no-useless-concat": "error",
      "no-useless-escape": "error",
      "no-useless-return": "error",
      "no-with": "error",
      "prefer-named-capture-group": "off",
      "prefer-promise-reject-errors": "error",
      "radix": "error",
      "require-await": "error",
      "require-unicode-regexp": "off",
      "yoda": [
        "error",
        "never",
        {
          "exceptRange": true
        }
      ],
      "no-delete-var": "error",
      "no-shadow-restricted-names": "error",
      "no-shadow": "off",
      "@stylistic/array-bracket-newline": [
        "error",
        {
          "multiline": true
        }
      ],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/array-element-newline": ["error", "consistent"],
      "@stylistic/comma-spacing": [
        "error",
        {
          "before": false,
          "after": true
        }
      ],
      "@stylistic/comma-style": "error",
      "@stylistic/computed-property-spacing": ["error", "never"],
      "@stylistic/eol-last": "error",
      "@stylistic/func-call-spacing": ["error", "never"],
      "func-name-matching": "error",
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/function-paren-newline": ["error", "consistent"],
      "@stylistic/key-spacing": [
        "error",
        {
          "mode": "strict"
        }
      ],
      "@stylistic/keyword-spacing": [
        "error",
        {
          "after": true,
          "before": true
        }
      ],
      "@stylistic/line-comment-position": [
        "error",
        {
          "position": "above"
        }
      ],
      "@stylistic/linebreak-style": ["error", "unix"],
      "@stylistic/lines-around-comment": [
        "error",
        {
          "beforeLineComment": true,
          "allowBlockStart": true,
          "allowBlockEnd": true,
          "allowObjectStart": true,
          "allowObjectEnd": true,
          "allowArrayStart": true,
          "allowArrayEnd": true,
          "allowClassStart": true,
          "allowClassEnd": true
        }
      ],
      "@stylistic/lines-between-class-members": ["error", "always"],
      "max-depth": ["error", 3],
      "@stylistic/max-len": ["error", {
        "code": 140,
        "ignoreComments": true,
        "ignoreStrings": true
      }],
      "max-lines": "off",
      "max-lines-per-function": "off",
      "max-params": "off",
      "@stylistic/max-statements-per-line": [
        "error",
        {
          "max": 1
        }
      ],
      "no-lonely-if": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-multi-assign": "error",
      "@stylistic/no-multiple-empty-lines": [
        "error",
        { "max": 1, "maxEOF": 0, "maxBOF": 1 }
      ],
      "no-negated-condition": "off",
      "no-nested-ternary": "error",
      "no-new-object": "error",
      "@stylistic/no-tabs": "error",
      "@stylistic/no-trailing-spaces": "error",
      "no-underscore-dangle": "off",
      "no-unneeded-ternary": "error",
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/object-curly-newline": [
        "error",
        {
          "multiline": true,
          "consistent": true
        }
      ],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/object-property-newline": [
        "error",
        {
          "allowAllPropertiesOnSameLine": true
        }
      ],
      "one-var": ["error", "never"],
      "operator-assignment": "error",
      "@stylistic/operator-linebreak": ["error", "after"],
      "prefer-exponentiation-operator": "error",
      "prefer-object-spread": "error",
      "@stylistic/quote-props": ["error", "consistent-as-needed"],
      "@stylistic/quotes": [
        "error",
        "single",
        {
          "allowTemplateLiterals": true
        }
      ],
      "@stylistic/semi-style": ["error", "last"],
      "@stylistic/space-before-blocks": "error",
      "@stylistic/space-before-function-paren": ["error", "never"],
      "@stylistic/space-unary-ops": "error",
      "@stylistic/spaced-comment": ["error", "always"],
      "@stylistic/switch-colon-spacing": "error",
      "@stylistic/template-tag-spacing": ["error", "never"],
      "@stylistic/arrow-body-style": ["error", "as-needed"],
      "@stylistic/arrow-parens": ["error", "as-needed"],
      "@stylistic/arrow-spacing": "error",
      "object-shorthand": [
        "error",
        "always",
        {
          "avoidExplicitReturnArrows": true
        }
      ],
      "no-restricted-imports": [
        "error",
        {
          "paths": ["rxjs/Rx"]
        }
      ],
      "no-bitwise": "error",
      "no-undef-init": "error",
      "@stylistic/new-parens": "error",
      "@stylistic/newline-per-chained-call": [
        "error",
        {
          "ignoreChainWithDepth": 2
        }
      ],
      "no-array-constructor": "error",
      "no-class-assign": "error",
      "no-duplicate-imports": "error",
      "no-this-before-super": "error",
      "no-useless-computed-key": "error",
      "no-useless-rename": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-destructuring": [
        "error",
        {
          "object": true,
          "array": false
        }
      ],
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "require-yield": "error",
      "@stylistic/rest-spread-spacing": ["error", "never"],
      "@stylistic/template-curly-spacing": ["error", "never"],
      "symbol-description": "error",
      "func-style": [
        "error",
        "declaration",
        {
          "allowArrowFunctions": true
        }
      ],
      "import/order": "off",
      "import/prefer-default-export": "off",
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
      "class-methods-use-this": "off",
      "max-classes-per-file": "off"
    },
  },
  {
    files: [
      "**/test/*.js",
      "**/test/*.jsx",
      "**/test/*.ts",
      "**/test/*.tsx",
      "**/*.test.js",
      "**/*.test.jsx",
      "**/*.test.ts",
      "**/*.test.tsx"
    ],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs["recommended"].rules,
    }
  }
]);



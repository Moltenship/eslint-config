import { defineConfig } from "eslint-define-config";

export default defineConfig({
  "plugins": [
    "react-hooks",
    "jsx-a11y"
  ],
  "extends": [
    "@moltenship/eslint-config-typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:testing-library/react"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/jsx-wrap-multilines": ["error", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "parens-new-line"
    }],
    "react/prop-types": "off",
    "react/forbid-foreign-prop-types": ["error", { "allowInPropTypes": true }],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": "error",
    "react/no-danger-with-children": "error",
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/no-direct-mutation-state": "error",
    "react/no-is-mounted": "error",
    "react/no-typos": "error",
    "react/require-render-return": "error",
    "react/style-prop-object": "error",
    "react/jsx-max-props-per-line": ["error", { "maximum": { "single": 4, "multi": 1 } }],
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-one-expression-per-line": ["error", {"allow": "literal"}],
    "react/jsx-indent": ["error", 2],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/function-component-definition": ["error", {
      "namedComponents": "arrow-function"
    }],
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "aspects": ["noHref", "invalidHref"]
      }
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": ["error", { "ignoreNonDOM": true }],
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error"
  }
})
const path = require('path');

module.exports = {
  extends: [
    path.join(path.dirname(require.resolve('stylelint-config-standard')), './'),
    path.join(path.dirname(require.resolve('stylelint-config-recommended-scss')), './')
  ],
  plugins: [
    path.join(path.dirname(require.resolve('stylelint-order')), './')
  ],
  rules: {
    "at-rule-empty-line-before": null,
    "at-rule-name-space-after": "always",
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-space-before": "never",
    "block-closing-brace-empty-line-before": null,
    "block-closing-brace-newline-after": null,
    "block-opening-brace-space-before": null,
    "color-hex-length": null,
    "color-named": "never",
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-no-important": true,
    "font-family-name-quotes": "always-where-recommended",
    "font-weight-notation": "numeric",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "length-zero-no-unit": true,
    "max-empty-lines": 2,
    "max-line-length": null,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "never",
    "no-descending-specificity": null,
    "no-duplicate-selectors": true,
    "no-empty-source": null,
    "number-leading-zero": "always",
    "media-feature-name-no-unknown": [
      true,
      {
        "ignoreMediaFeatureNames": [
          "prefers-reduced-motion"
        ]
      }
    ],
    "order/order": [
      "dollar-variables",
      "declarations",
      "rules"
    ],
    "order/properties-alphabetical-order": true,
    "property-no-vendor-prefix": true,
    "selector-attribute-quotes": "always",
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never-single-line",
    "selector-max-attribute": 2,
    "selector-max-class": 4,
    "selector-max-combinators": 4,
    "selector-max-compound-selectors": 4,
    "selector-max-empty-lines": 1,
    "selector-max-id": 0,
    "selector-max-specificity": null,
    "selector-max-type": 2,
    "selector-max-universal": 1,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "string-quotes": "double",
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "never-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always",
    "value-no-vendor-prefix": true
  },
};

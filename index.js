module.exports = {
  env: {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "standard"
  ].map(require),
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        "project": "tsconfig.base.json",
        "sourceType": "module"
      },
      plugins: [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
      ],
      rules: {
        "@typescript-eslint/class-name-casing": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
          "error",
          {
            "default": "array"
          }
        ],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-member-accessibility": [
          "off",
          {
            "accessibility": "explicit"
          }
        ],
        "@typescript-eslint/explicit-module-boundary-types": "warn",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/member-delimiter-style": [
          "off",
          {
            "multiline": {
              "delimiter": "none",
              requireLast: true
            },
            singleline: {
              delimiter: "semi",
              requireLast: false
            }
          }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "warn",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-param-reassign": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "warn",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "off",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/prefer-regexp-exec": "off",
        "@typescript-eslint/quotes": [
          "warn",
          "single"
        ],
        "@typescript-eslint/restrict-plus-operands": "warn",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/semi": [
          "off",
          null
        ],
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/triple-slash-reference": [
          "error",
          {
            "path": "always",
            "types": "prefer-import",
            "lib": "always"
          }
        ],
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/unbound-method": "off",
        "arrow-parens": [
          "off",
          "always"
        ],
        "brace-style": [
          "warn",
          "1tbs"
        ],
        "camelcase": "off",
        "complexity": ["warn"],
        "constructor-super": "error",
        "curly": [
          "error",
          "multi-line"
        ],
        "default-case": "error",
        "eol-last": "error",
        "eqeqeq": [
          "error",
          "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": "off",
        "id-match": "off",
        "import/export": "warn",
        "import/no-default-export": "off",
        "import/no-deprecated": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-internal-modules": "off",
        "import/no-unassigned-import": "off",
        "jsdoc/check-alignment": "off",
        "jsdoc/check-indentation": "off",
        "jsdoc/newline-after-description": "off",
        "jsdoc/no-types": "off",
        "linebreak-style": "off",
        "max-classes-per-file": [
          "error",
          3
        ],
        "max-len": [
          "error",
          {
            "code": 140
          }
        ],
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "off",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-magic-numbers": "off",
        "no-multi-str": "off",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-null/no-null": "off",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-imports": "off",
        "no-restricted-syntax": [
          "error",
          "ForInStatement"
        ],
        "no-return-await": "error",
        "no-sequences": "error",
        "no-shadow": [
          "error",
          {
            "hoist": "all"
          }
        ],
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "off",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",
        "no-unused-labels": "error",
        "no-unused-vars": "warn",
        "no-useless-catch": "warn",
        "no-var": "warn",
        "no-void": "off",
        "object-shorthand": "off",
        "one-var": [
          "error",
          "never"
        ],
        "padding-line-between-statements": [
          "error",
          {
            "blankLine": "always",
            "prev": "*",
            "next": "return"
          }
        ],
        "prefer-arrow/prefer-arrow-functions": "off",
        "prefer-exponentiation-operator": "warn",
        "prefer-const": "error",
        "prefer-object-spread": "error",
        "prefer-template": "error",
        "quote-props": [
          "error",
          "as-needed"
        ],
        "radix": "warn",
        "space-before-function-paren": "off",
        "space-in-parens": [
          "error",
          "never"
        ],
        "unicorn/filename-case": "off",
        "use-isnan": "error",
        "valid-typeof": "off",
        "yoda": "error",
        "indent": "warn"
      }
    }
  ],
  rules: {
    "no-duplicate-imports": ["off"],
    "no-useless-escape": ["off"],
    "promise/always-return": ["off"],
    "array-bracket-newline": ["off"],
    "array-bracket-spacing": ["error"],
    "array-callback-return": ["error"],
    "array-element-newline": ["off"],
    "arrow-body-style": ["off"],
    "arrow-parens": ["error", "as-needed"],
    "callback-return": ["error"],
    "camelcase": ["warn"],
    "capitalized-comments": ["off"],
    "class-methods-use-this": ["off"],
    "complexity": ["off"],
    "consistent-return": ["off"],
    "consistent-this": ["warn"],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }],
    "default-case": ["error"],
    "dot-notation": ["off"],
    "func-names": ["warn", "as-needed"],
    "func-style": ["off"],
    "function-paren-newline": ["off"],
    "getter-return": ["error"],
    "global-require": ["warn"],
    "guard-for-in": ["off"],
    "id-length": ["off"],
    "implicit-arrow-linebreak": ["off"],
    "import/first": ["off"],
    "init-declarations": ["off"],
    "line-comment-position": ["warn"],
    "lines-around-comment": ["error", { "allowBlockStart": true }],
    "lines-between-class-members": ["off"],
    "max-depth": ["warn"],
    "max-len": ["error", { "code": 120, "ignoreComments": true }],
    "max-lines": ["warn"],
    "max-params": ["off"],
    "max-statements-per-line": ["off"],
    "max-statements": ["off"],
    "multiline-comment-style": ["off"],
    "multiline-ternary": ["off"],
    "newline-per-chained-call": ["error"],
    "no-alert": ["error"],
    "no-await-in-loop": ["error"],
    "no-catch-shadow": ["off"],
    "no-confusing-arrow": ["off"],
    "no-continue": ["off"],
    "no-else-return": ["error"],
    "no-empty-function": ["error"],
    "no-eq-null": ["error"],
    "no-implicit-coercion": ["off"],
    "no-inline-comments": ["warn"],
    "no-invalid-this": ["off"],
    "no-lonely-if": ["error"],
    "no-loop-func": ["warn"],
    "no-magic-numbers": ["warn", { "ignore": [-1, 0, 1] }],
    "no-multi-assign": ["off"],
    "no-negated-condition": ["error"],
    "no-nested-ternary": ["error"],
    "no-param-reassign": ["error"],
    "no-plusplus": ["off"],
    "no-process-env": ["off"],
    "no-process-exit": ["error"],
    "no-prototype-builtins": ["off"],
    "no-shadow": ["off"],
    "no-sync": ["warn"],
    "no-ternary": ["off"],
    "no-undefined": ["off"],
    "no-underscore-dangle": ["off"],
    "no-useless-concat": ["error"],
    "no-var": ["warn"],
    "no-void": ["off"],
    "no-warning-comments": ["warn"],
    "object-curly-newline": ["error", { "consistent": true }],
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": ["error"],
    "operator-assignment": ["error"],
    "prefer-arrow-callback": ["error"],
    "prefer-const": ["error"],
    "prefer-destructuring": ["warn"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    "promise/catch-or-return": ["error"],
    "quote-props": ["warn", "as-needed"],
    "radix": ["warn", "as-needed"],
    "require-await": ["error"],
    "require-jsdoc": ["off"],
    "semi-style": ["error"],
    "sort-imports": ["off"],
    "sort-keys": ["off"],
    "sort-vars": ["off"],
    "valid-jsdoc": ["off"],
    "vars-on-top": ["error"],
    "wrap-regex": ["error"],
    "no-unused-vars": ["warn"],
    "no-useless-catch": "warn",
    "no-async-promise-executor": "warn"
  }
};
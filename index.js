module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "babel"
  ],
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "ecmaFeatures": {
    "modules": false
  },
  "rules": {
    "no-constant-condition": [2, { "checkLoops": false }],
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 2,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-obj-calls": 2,
    "no-prototype-builtins": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 1,
    "no-template-curly-in-string": 1,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 1,
    "no-unsafe-negation": 2,
    "use-isnan": 2,
    "valid-typeof": 2,
    "array-callback-return": 2,
    "block-scoped-var": 1,
    "class-methods-use-this": 1,
    "consistent-return": 2,
    "curly": [2, "multi-line"],
    "dot-location": [2, "property"],
    "dot-notation": 2,
    "eqeqeq": [2, "allow-null"],
    "guard-for-in": 1,
    "no-alert": 1,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    "no-else-return": 1,
    "no-empty-pattern": 2,
    "no-eval": 2,
    "no-extend-native": 1,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-fallthrough": 1,
    "no-floating-decimal": 2,
    "no-global-assign": 2,
    "no-implicit-coercion": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 1,
    "no-iterator": 2,
    "no-loop-func": 1,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 1,
    "no-unused-expressions": 1,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-void": 2,
    "no-with": 2,
    "wrap-iife": 1,
    "yoda": 1,
    "strict": [2, "never"],
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-restricted-globals": 2,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-unused-vars": 1,
    "no-use-before-define": [1, { "classes": false, "functions": false }],
    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "brace-style": [2, "stroustrup", { "allowSingleLine": true }],
    "comma-dangle": 2,
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": 2,
    "eol-last": 2,
    "func-call-spacing": 2,
    "key-spacing": 2,
    "keyword-spacing": 2,
    "max-depth": 2,
    "max-len": [
      1,
      {
        "code": 80,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "max-nested-callbacks": [1, 5],
    "max-params": [1, 4],
    "max-statements-per-line": [1, { "max": 2 }],
    "new-parens": 2,
    "no-array-constructor": 2,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": 1,
    "no-negated-condition": 1,
    "no-nested-ternary": 2,
    "no-tabs": 1,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "object-curly-spacing": [2, "always"],
    "operator-assignment": 2,
    "operator-linebreak": [1, "after", {
        "overrides": {
          "?": "before",
          ":": "before"
        }
      }
    ],
    "semi-spacing": 2,
    "semi": [2, "never"],
    "space-before-function-paren": [2, "never"],
    "space-in-parens": 2,
    "space-infix-ops": 2,
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "spaced-comment": 2,
    "unicode-bom": 2,
    "arrow-spacing": 2,
    "constructor-super": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": 1,
    "no-new-symbol": 2,
    "no-this-before-super": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 1,
    "no-useless-rename": 2,
    "no-var": 2,
    "object-shorthand": 1,
    "prefer-numeric-literals": 1,
    "prefer-rest-params": 1,
    "prefer-spread": 1,
    "prefer-template": 1,
    "require-yield": 2,
    "rest-spread-spacing": 2,
    "yield-star-spacing": [2, "after"],
    "babel/func-params-comma-dangle": 2,
    "babel/flow-object-type": [2, "comma"],
    "babel/no-await-in-loop": 1
  }
}

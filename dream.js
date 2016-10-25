module.exports = {
  "plugins": [
    "flowtype",
    "flowtype-errors"
  ],
  "extends": "eslint-config-mirage",
  "rules": {
    "flowtype/boolean-style": [2, "boolean"],
    "flowtype/define-flow-type": 2,
    "flowtype/delimiter-dangle": 2,
    "flowtype/generic-spacing": 2,
    "flowtype/no-dupe-keys": 2,
    "flowtype/semi": [2, "never"],
    "flowtype/space-after-type-colon": 2,
    "flowtype/space-before-generic-bracket": 2,
    "flowtype/space-before-type-colon": 2,
    "flowtype/type-id-match": [2, "^([A-Z][a-z0-9]*)+$"],
    "flowtype/union-intersection-spacing": 2,
    "flowtype-errors/show-errors": 2
  }
}

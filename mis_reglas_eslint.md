mi json de reglas extras, si no es un proyecto react quitar la parte de extends.
las reglas pueden estar en el package.json, o en eslintrc.json/js

  ```json
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "rules": {
      "no-magic-numbers": [
        "warn",
        {
          "ignore": [
            0
          ],
          "ignoreArrayIndexes": true
        }
      ],
      "multiline-ternary": ["error", "never"],
      "max-len": ["error", 100],
      "no-var": "warn",
      "no-self-compare": "error",
      "no-unused-vars": [
        "warn",
        {
          "args": "all",
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }
      ],
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 2
        }
      ],
      "prefer-const": [
        "error",
        {
          "destructuring": "any",
          "ignoreReadBeforeAssign": false
        }
      ],
      "no-extend-native": "warn",
      "no-use-before-define": [
        "error",
        {
          "functions": false,
          "classes": true,
          "variables": true,
          "allowNamedExports": false
        }
      ],
      "block-scoped-var": "warn",
      "no-bitwise": "error",
      "indent": [
        "error",
        2
      ],
      "no-mixed-operators": "error",
      "no-new-object": 1,
      "linebreak-style": [
        "error",
        "unix"
      ],
      "quotes": [
        "error",
        "double"
      ],
      "semi": [
        "error",
        "always"
      ]
    }
  },

  ```

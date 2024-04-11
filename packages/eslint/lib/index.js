var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/next.js
var require_next = __commonJS({
  "src/next.js"(exports2, module2) {
    module2.exports = {
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "next/core-web-vitals",
        "plugin:tailwindcss/recommended",
        "prettier"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "plugins": ["unused-imports", "strict-dependencies"],
      "rules": {
        "prettier/prettier": ["error", {
          "printWidth": 120,
          "tabWidth": 2,
          "semi": true,
          "trailingComma": "all",
          "singleQuote": true,
          "arrowParens": "always"
        }],
        "unused-imports/no-unused-imports": "error",
        "react/jsx-sort-props": "error",
        "import/order": [
          "error",
          {
            "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
            "newlines-between": "always",
            "pathGroupsExcludedImportTypes": ["builtin"],
            "pathGroups": [
              {
                "pattern": "@/components/**",
                "group": "internal",
                "position": "before"
              }
            ],
            "alphabetize": {
              "order": "asc"
            }
          }
        ],
        "strict-dependencies/strict-dependencies": [
          "error",
          [
            {
              "module": "next/link",
              "allowReferenceFrom": ["components/Link.tsx"],
              "allowSameModule": false
            }
          ],
          {
            "resolveRelativeImport": true
          }
        ]
      }
    };
  }
});

// index.js
var next = require_next();
module.exports = {
  configs: {
    next
  }
};
/*! For license information please see index.js.LEGAL.txt */
//# sourceMappingURL=index.js.map

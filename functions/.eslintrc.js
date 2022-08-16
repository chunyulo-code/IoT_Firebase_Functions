module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  rules: {
    quotes: ["error", "double"],
  },
};


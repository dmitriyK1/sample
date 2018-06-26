module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:prettier/recommended"
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  "plugins": [
    "prettier"
  ],
  rules: {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "trailingComma": "all",
    }],
    "no-underscore-dangle": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0,
    "import/prefer-default-export": 1,
    "react/sort-comp": 0,
    "jsx-a11y/media-has-caption": 0,
    "react/require-default-props": 0,
    "class-methods-use-this": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
  },
};

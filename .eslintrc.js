module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
    "quotes": [2, "single"],
    "eol-last": [0],
    "no-mixed-requires": [0],
    "no-underscore-dangle": [0],
    "no-unused-vars": [0],
    "no-multiple-empty-lines": [0],
    "arrow-body-style": [0],
    "no-trailing-spaces": [0],
    "no-console": [1],
    "no-undef": [0],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": false, "optionalDependencies": false, "peerDependencies": false}]
  }
};

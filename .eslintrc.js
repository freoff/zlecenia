module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "flowtype"
  ],
	"parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
	env:{
    browser: true,
    mocha: true,
    node: true,
    jest: true,
  },
    "extends": "airbnb",
    rules: {
    	"no-console": "off",
    	"no-unused-vars": "off",
    	"no-unused-vars": 0,

    	"react/prefer-stateless-function": "off",
    	"react/jsx-filename-extension": "off",
    	"react/jsx-filename-extension": "off",

    	"import/prefer-default-export": "off"


    }
};

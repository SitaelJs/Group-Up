module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx', '.js', '.ts'],
      },
    ],
    semi: ['error', 'never'],
    'no-console': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-react': 0,
    'react/prop-types': 0,
    'comma-dangle': ['error', 'only-multiline'],
    // 'no-confusing-arrow': ['error', { allowParens: true }],
    // 'implicit-arrow-linebreak': ['error', 'below'],
    // 'function-paren-newline': ['error', 'never'],
    // 'jsx-a11y/alt-text': 0
  },
}

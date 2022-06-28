module.exports = {
  extends: [
    'plugin:@next/next/core-web-vitals',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    '@croquiscom/eslint-config-www',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: __dirname,
      },
    },
  },
};

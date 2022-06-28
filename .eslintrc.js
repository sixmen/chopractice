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
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};

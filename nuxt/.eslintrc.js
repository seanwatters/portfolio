module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    semi: [
      2,
      'always',
    ],
    '@typescript-eslint/no-unused-vars': 0,
    'comma-dangle': ['error',
      {
        arrays: 'always',
        objects: 'always',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'array-element-newline': ['error',
      {
        ArrayExpression: 'consistent',
        ArrayPattern: { minItems: 1, },
      },
    ],
  },
};

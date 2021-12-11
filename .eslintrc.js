module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    warnOnUnsupportedTypeScriptVersion: false,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/unbound-method': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: [
          'variable',
          'function',
          'objectLiteralMethod',
          'parameterProperty',
          'classProperty',
        ],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-floating-promises': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    '@typescript-eslint/prefer-optional-chain': ['off'],
    '@typescript-eslint/member-ordering': ['off'],
    '@typescript-eslint/consistent-type-assertions': ['off'],
    '@typescript-eslint/no-misused-promises': ['off'],
  },
}

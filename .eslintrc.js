/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  plugins: [
    'import',
    'testing-library',
    'jest-dom',
    '@typescript-eslint',
    'react',
    'react-hooks',
  ],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/eslint-recommended', // disables rules from eslint:recommended that are already checked by the TypeScript compiler and enables rules that promote using the more modern constructs TypeScript allows for.
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // More recommended rules from @typescript-eslint/eslint-plugin
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'next',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    files: ['*.ts', '*.tsx'], // Typescript file extensions
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: ['./tsconfig.json'], // needed for rules requiring type information
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-eval': 'error',
    curly: ['error', 'multi-line'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unused-vars':
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'react/jsx-boolean-value': 2,
    'import/first': 'error',
    'import/named': 2,
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'import/no-unresolved': 2,
    'import/no-duplicates': 2,
    'react/self-closing-comp': 'error',
    'import/order': [
      1,
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // config for eslint-import-resolver-typescript package
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
    'import/external-module-folders': ['node_modules', '@types', '@testing-library'],
  },
}

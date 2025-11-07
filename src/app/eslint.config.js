export default [
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: ['expo'],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];

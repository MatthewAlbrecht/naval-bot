module.exports = {
  // processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-prettier',
    'stylelint-config-styled-components',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true, // Ensure CSS properties are ordered
    'declaration-block-trailing-semicolon': 'always', // Ensure there is a semi-colon at the end of a declaration block
    /**
     * https://github.com/stylelint/stylelint/issues/4953
     * There are currently bugs for rules `value-keyword-case` and `function-name-case` - for example:
     * ERROR: Expected "theme.borderRadius}" to be "theme.borderradius}"
     */
    'value-keyword-case': null,
    'function-name-case': null,
  },
}

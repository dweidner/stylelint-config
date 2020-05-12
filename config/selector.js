module.exports = {
  // Disallow whitespace on the inside of brackets within attribute selectors.
  'selector-attribute-brackets-space-inside': 'never',
  // Require quotes for attribute values.
  'selector-attribute-quotes': 'always',
  // Limit the number of classes in a selector.
  'selector-max-class': 3,
  // Limit the number of combinators in a selector.
  'selector-max-combinators': 1,
  // Limit the number of compound selectors in a selector.
  'selector-max-compound-selectors': 3,
  // Limit the number of ID selectors in a selector.
  'selector-max-id': 0,
  // Limit the specificity of selectors.
  'selector-max-specificity': '0,4,0',
  // Limit the number of type selectors in a selector.
  'selector-max-type': 2,
  // Limit the number of universal selectors in a selector.
  'selector-max-universal': 1,
  // Disallow qualifying a selector by type.
  'selector-no-qualifying-type': [
    true,
    {
      ignore: [
        'attribute'
      ]
    }
  ],
  // Disallow vendor prefixes for selectors (use autoprefixer instead).
  'selector-no-vendor-prefix': true
};

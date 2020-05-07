module.exports = {
  // Disallow longhand properties that can be combined into shorthand property.
  'declaration-block-no-redundant-longhand-properties': [
    true,
    {
      ignoreShorthands: [
        '/^flex./',
        '/^grid.*/'
      ]
    }
  ],
  // Ignore whitespace after the colon, allows to align property values.
  'declaration-colon-space-after': null,
  // Disallow property and value pairs.
  'declaration-property-value-blacklist': {
    '/^animation/': [
      'linear'
    ]
  }
};

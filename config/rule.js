module.exports = {
  // Disallow vendor prefixes for at-rules (use autoprefixer instead).
  'at-rule-no-vendor-prefix': true,
  // Require an empty line before rules.
  'rule-empty-line-before': [
    'always-multi-line',
    {
      ignore: [
        'after-comment',
        'first-nested'
      ]
    }
  ]
};

const merge = require('merge');

module.exports = {
  plugins: [
    'stylelint-config-standard'
  ],
  rules: merge(
    require('./config/general'),
    require('./config/color'),
    require('./config/comment'),
    require('./config/declaration'),
    require('./config/font'),
    require('./config/function'),
    require('./config/property'),
    require('./config/rule'),
    require('./config/selector')
  )
};

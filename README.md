# @dweidner/stylelint-config

[![NPM version](https://img.shields.io/npm/v/@dweidner/stylelint-config.svg)](https://www.npmjs.org/package/@dweidner/stylelint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.txt)

> An opinionated, shareable config for stylelint.

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard).

Turns on a handful of additional rules in addition to those already activated in the standard configuration:

- Standardize quotes
  - [`font-family-name-quotes`](https://github.com/stylelint/stylelint/blob/master/lib/rules/font-family-name-quotes/README.md)
  - [`function-url-quotes`](https://github.com/stylelint/stylelint/blob/master/lib/rules/function-url-quotes/README.md)
  - [`selector-attribute-quotes`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-attribute-quotes/README.md)
  - [`string-quotes`](https://github.com/stylelint/stylelint/blob/master/lib/rules/string-quotes/README.md)
- Standardize font notations
  - [`font-weight-notation`](https://github.com/stylelint/stylelint/blob/master/lib/rules/font-weight-notation/README.md)
- Prefer [`hsl`](https://css-tricks.com/hsl-hsla-is-great-for-programmatic-color-control/) for color notations
  - [`color-named`](https://github.com/stylelint/stylelint/blob/master/lib/rules/color-named/README.md)
  - [`color-no-hex`](https://github.com/stylelint/stylelint/blob/master/lib/rules/color-no-hex/README.md)
- Disallow vendor prefixes (use [autoprefixer](https://github.com/postcss/autoprefixer) instead)
  - [`at-rule-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/lib/rules/at-rule-no-vendor-prefix/README.md)
  - [`property-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/lib/rules/property-no-vendor-prefix/README.md)
  - [`selector-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-no-vendor-prefix/README.md)
  - [`value-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/lib/rules/value-no-vendor-prefix/README.md)
- Control specificity
  - [`max-nesting-depth`](https://github.com/stylelint/stylelint/blob/master/lib/rules/max-nesting-depth/README.md)
  - [`selector-max-attribute`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-max-attribute/README.md)
  - [`selector-max-class`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-max-class/README.md)
  - [`selector-max-combinators`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-max-combinators/README.md)
  - [`selector-max-compound-selectors`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-max-compound-selectors/README.md)
  - [`selector-max-id`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-max-id/README.md)
  - [`selector-max-pseudo-class`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-max-pseudo-class/README.md)
  - [`selector-max-specificity`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-max-specificity/README.md)
  - [`selector-max-type`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-max-type/README.md)
  - [`selector-max-universal`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-max-universal/README.md)

## Installation

Install [stylelint](https://stylelint.io/) and `@dweidner/stylelint-config`

**With npm**
```bash
npm install --save-dev stylelint @dweidner/stylelint-config
```

**With yarn**
```bash
yarn add --dev stylelint @dweidner/stylelint-config
```

## Usage

If you've installed `@dweidner/stylelint-config` locally within your project, just reference it in your `stylelint` config. See the [stylelint configuration documentation](https://stylelint.io/user-guide/configuration/) for more details.

```json
{
  "extends": "@dweidner/stylelint-config"
}
```

Check the [stylelint CLI documentation]((https://stylelint.io/user-guide/cli/) to see how to execute the linter. One possibility would to add the following configuration to your `package.json`:

```json
{
  "scripts": {
    "stylelint": "stylelint 'src/**/*.scss'"
  }
}
```

Now you can check for style violation by running the following commands:

**With npm**
```bash
npm run stylelint
```

**With Yarn**
```bash
yarn run stylelint
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE.txt)

module.exports = {
  'extends': [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order'
  ],
  'plugins': [
    'stylelint-order'
  ],
  'rules': {
    'indentation': [
      2
    ],
    'selector-class-pattern': [
      '^[A-Z][a-zA-Z0-9]+',
      {
        'message': 'Expected class selector to be UpperCamelCase'
      }
    ],
    'unit-allowed-list': [
      'em',
      'rem',
      '%',
      'vw',
      'vh'
    ]
  }
}
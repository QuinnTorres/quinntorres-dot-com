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
    'scss/dollar-variable-pattern': [
      '^_([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        'message': 'Expected variable to be kebab-case, starting with an underscore'
      }
    ],
    'selector-class-pattern': [
      '^[A-Z][a-zA-Z0-9]+',
      {
        'message': 'Expected class selector to be UpperCamelCase'
      }
    ],
    'unit-disallowed-list': [
      'px',
    ]
  }
};
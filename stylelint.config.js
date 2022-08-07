module.exports = {
  'extends': 'stylelint-config-standard',
  'rules': {
    'indentation': [
      2
    ],
    'selector-class-pattern': [
      '^[A-Z][a-zA-Z0-9]+$',
      {
        'message': 'Expected class selector to be UpperCamelCase'
      }
    ]
  }
}
var CalculatorApp = require('./components/CalculatorApp.react')
var React = require('react')

React.render(
  React.createElement(CalculatorApp, {}),
  document.getElementById('calculator')
)

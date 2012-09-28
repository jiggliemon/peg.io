var Cell = require('../cell')
var tmpl = require('text!./tmpl/grammar.tmpl')
var Output = new Cell('grammar',{
  template: tmpl
})

module.exports = Grammer
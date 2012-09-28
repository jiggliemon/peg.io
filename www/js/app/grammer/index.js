var Cell = require('../cell')
var prime = require('prime/prime')

var tmpl = require('text!./tmpl/grammar.tmpl')
var Grammer = new prime({
   inherits: Cell
  ,constructor: function (options) {
    this.setTemplate(tmpl)
    Cell.prototype.constructor.call(this, 'grammar', options)
  }
})

module.exports = Grammer
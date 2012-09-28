var Cell = require('../cell')
var prime = require('prime/prime')

var tmpl = require('text!./tmpl/program.tmpl')

var Program = new prime({
   inherits: Cell
  ,constructor: function (options) {
    this.setTemplate(tmpl)
    Cell.prototype.constructor.call(this, 'program', options)
  }
})

module.exports = Program
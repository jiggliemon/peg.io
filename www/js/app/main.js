var Block = require('blocks/block')
var prime = require('prime/prime')
var elements = require('elements')
var Cell = require('./cell')
var tmpl = require('text!./tmpl/layout.tmpl')

var Grammer = require('./grammer/index')
var Program = require('./program/index')

var Peg = new Block({
  template: tmpl
  ,children: {
     grammar: new Grammer({
      text: "Hello there"
     })
    ,program: new Program
    ,output: new Cell('output')
  }
  ,events: {
     'run:click': function (e) {
      e.preventDefault()
      console.log('Run clicked')
    }
    ,'run:mousedown': function (e) {
      e.preventDefault()
      var runBtn = this.bound('run')
      elements(runBtn).addClass('active')
    }
    ,'run:mouseup': function (e) {
      e.preventDefault()
      var runBtn = this.bound('run')
      if (runBtn ) {
        setTimeout(function () {
          elements(runBtn).removeClass('active')
        }, 25)
      }
    }
    ,'update:click': function (e) {
      e.preventDefault()
      //console.log('Update clicked')
    }
    ,'save:click': function (e) {
      e.preventDefault()
      //console.log('Save clicked')
    }
  }
}, {
  // Methods
  getName: function () {
    return "Chase"
  }

})


document.body.appendChild(Peg.toElement())

module.exports = Peg
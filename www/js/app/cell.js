var Editor = require('ace/ace')
var prime = require('prime/prime')
var extend = require('yaul/extend')
var block = require('blocks/block')
var tmpl = require('text!./tmpl/cell.tmpl')
var make = require('yaul/make')

var Cell = new prime(extend({

  constructor: function ( language, options ) {
    options = options || {}
    var self = this

    self.setText(options.text)
    self.setLanguage(language)
    self.setupEditor()

    if ( !!!self.getTemplate() ) {
      self.setTemplate(options.template || tmpl)
    }
    self.bindTemplate()
    self.ready = true 
  }

  ,setupEditor: function () {
    var self = this
    if ( self.__editorSetup ) {
      return self.editor 
    }

    var editor = self.editor = Editor.edit(document.createElement('pre'))
    self.addEvent('after:toElement', function () {
      var editorWrapper = self.bound('editor')
      if ( editorWrapper ) {
        editorWrapper.appendChild(editor.container)
      }
    })

    editor.setValue(self.getText())
    self.__editorSetup = true
    return editor
  }

  ,setText: function (text) {
    var _text = this._text = make(this, '_text', '')
    if ( !text ) {
      return
    }
    _text = text
    
    this.editor && this.editor.setValue(_text)
    return this
  }
  
  ,getText: function () {
    var _text = this._text = make(this, '_text', '')
    console.log(_text)
    return _text || this.editor && this.editor.getValue()
  }

  ,getEditor: function () {
    return this.editor
  }

  ,setLanguage: function ( language ) {
    this.language = language
  }

  ,getLanguage: function () {
    return this.language
  }

}, block.prototype ))

module.exports = Cell
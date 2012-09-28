
/*
 * GET home page.
 */

//var parse = require('parse')
var config = require('../config')
//var PegDB = new parse(config.getAppId(), config.getRestKey())
//var tink = require('../tinker').tink

module.exports = {
    "GET /": function(req, res){
      res.render('index', {
        peg: {grammer: '' }
      })
    }
    
  , "GET /p/:id?/:version?": function (req, res, next) {
      var id = req.params.id
        , version = req.params.version

      if ( id ) {
        PegDB.find('Peg', id, {
          include:"base"
        }, function (err, response) {
          if (err) {
            return res.json({error:{status: err.type}})
          }

          res.json(tink.sanitizeOut(response))
        })
      } else {
        res.json({error: "You failed to provide a Tink `id`"})
      }
    }

  , "POST /p/:id?": function (req, res) {

    }
  , "POST /run": function (req, res) {
      var grammer = req.params.grammer
      var program = req.params.program
      
   }
}
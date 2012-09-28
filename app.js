/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
//  app.use(express.compiler({ src : __dirname + '/www', enable: ['less']}));
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('_pegio_'));
  app.use(express.session());
  app.use(app.router);
  //app.use(require('less-middleware')({ src: __dirname + '/www' }));
  app.use(express.static(path.join(__dirname, '/www')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// This is a pretty lame hack
// todo: Fix the way our API is handled
for(var route in routes ) {
  var handler = routes[route]
    , method
    , path

  route = route.split(' ').map(function (el) {
    return String(el).trim().toLowerCase()
  })

  switch (route.length) {
    case 1:
      method = 'get'
      path = route[0]
      break
    case 2:
      method = route[0]
      path = route[1]
      break
  }

  app[method](path, handler)
}


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var express = require('express');
var requireDir = require('require-dir');

var config = require('./config');
var routes = requireDir('./routes');

// Application configuration
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));
app.listen(config.server.port);
console.log(config.app.title + ' started at http://localhost:' + config.server.port);

// Register routes
app.get('/',routes.index.getContent);
app.get('/search', routes.search.getContent);
app.get('/search/:query', routes.search.getResults);

// Register REST feeds
app.get('/api', routes.rest.getRESTEndpoints);
app.get('/api/search', routes.rest.getRESTSearchResults);
app.get('/api/search/:query', routes.rest.getRESTSearchResults);

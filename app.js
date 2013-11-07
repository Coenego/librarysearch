var express = require('express');
var requireDir = require('require-dir');

var config = require('./config');
var controllers = requireDir('./lib/controllers');

// Application configuration
var app = express();
app.set('views', __dirname + '/lib/views');
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
app.get('/',controllers.index.getContent);
app.get('/search', controllers.search.getContent);
app.get('/search/:query', controllers.search.getResults);

// Register REST feeds
app.get('/api', controllers.rest.getRESTEndpoints);
app.get('/api/search', controllers.rest.getRESTSearchResults);
app.get('/api/search/:query', controllers.rest.getRESTSearchResults);

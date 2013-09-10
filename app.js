var express = require('express');
var requireDir = require('require-dir');

var config = require('./config');

var routes = requireDir('./routes');

// Application configuration
var app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));
app.listen(config.server.port);
console.log(config.app.title + ' started at http://localhost:' + config.server.port);

// Register routes
app.get('/', routes.index.getContent);
app.get('/search', routes.index.getContent);
app.get('/search/:query', routes.search.getResults);

var express = require('express');

var config = require('./config');

// Create the web server
var server = express();
server.listen(config.server.port);

// Set up the static file hosting
server.use('/', express.static(__dirname + '/static'));
console.log('Started REST web server at http://localhost:' + config.server.port);

// Catch error
process.on('uncaughtException', function(err) {
    console.error('Caught exception: ' + err.message);
    console.error(err.stack);
});

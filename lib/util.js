var request = require('request');
var xml2js = require('xml2js');

var config = require('../config');

/**
 * Make a request to the Symplectic REST API and convert the XML response into a standard JSON object
 * 
 * @param  {String}     path                The path to the API endpoint (e.g. /users)
 * @param  {Object}     [qs]                Querystring parameters to be passed into the request
 * @param  {Function}   callback            Standard callback function
 * @param  {Object}     callback.err        Error object containing the error code and message
 * @param  {Object}     callback.response   Parsed Symplectic response
 */
var symplecticRequest = module.exports.symplecticRequest = function(path, qs, callback) {
    
    // Make the request to the symplectic API
    request(config.symplectic.api + path, {'qs': qs}, function (error, response, body) {
        if (!error) {
            // Convert the XML response into JSON
            xml2js.parseString(body, callback);
        } else {
            console.log('An error occured: ' + response);
            return callback({'code': 500, 'msg': response});
        }
    });
};

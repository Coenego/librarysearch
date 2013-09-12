var _ = require('underscore');
var $ = require('jquery');
var request = require('request');

var AquabrowserAPI = require('lib-aquabrowser');
var SummonAPI = require('lib-summon');

var config = require('../config');

/**
* Return all the available endpoints for the REST API 
*/
var getRESTEndpoints = exports.getRESTEndpoints = function(req, res) {

    // Construct the url to the API
    var url = 'http://localhost:' + config.server.port + '/api';

    // Collection of endpoints
    var endpoints = {
        'search': {
            'url': url + '/search/[QUERY]'
        }
    };
    res.send(200, endpoints);
}

/**
* Return the search results for the REST API
*/
var getRESTSearchResults = exports.getRESTSearchResults = function(req, res) {

    // When a valid query is entered
    if (req.params.query) {

        // Store the query into a variable
        var query = req.params.query;

        // Store how many external api's have been called
        var searchToComplete = Object.keys(config.constants.engines).length;
        var searchComplete = 0;

        // Create an object to store the search results
        var results = {
            'aquabrowser': {},
            'summon': {}
        };

        // Get Aquabrowser results
        AquabrowserAPI.getAquabrowserResults(query, function(err, _res) {

            // Increase our temporary variable when results are retrieved
            searchComplete++;

            if (err) {
                results['aquabrowser']['error'] = err;
            } else {
                results['aquabrowser'] = _res;
            }

            if (searchComplete === searchToComplete) {
                res.send(200, {'results': results});
            }
        });

        // Get Summon results
        SummonAPI.getSummonResults(query, function(err, _res) {

            // Increase our temporary variable when results are retrieved
            searchComplete++;

            if (err) {
                results['summon']['error'] = err;
            } else {
                results['summon'] = _res;
            }

            if (searchComplete === searchToComplete) {
                res.send(200, {'results': results});
            }
        });

    // When an invalid query is entered
    } else {
        res.send(200, {'error': 'Invalid query'});
    }
};

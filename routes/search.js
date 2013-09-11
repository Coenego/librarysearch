var _ = require('underscore');
var $ = require('jquery');
var request = require('request');

var AquabrowserAPI = require('lib-aquabrowser');
var SummonAPI = require('lib-summon');

var config = require('../config');

/** 
* Renders the template without the results displayed
*/
var getContent = exports.getContent = function(req, res) {

    // Render the partial
    res.render('partials/results', {'query': ''}, function(err, html) {

        // Render the index template and insert the rendered partial
        res.render('index', {'title': 'Results', 'body': html});
    });
};

/**
* Perform a search via the front-end
*/
var getResults = exports.getResults = function(req, res) {

    // When a valid query is entered
    if (req.params.query) {

        // Store the query into a variable
        var query = req.params.query;

        // Construct the url for the AJAX request
        var url = 'http://localhost:' + config.server.port + '/api/search/' + query;

        $.ajax({
            'url': url,
            'timeout': 10000,
            'success': function(results) {
                renderTemplate(res, query, results);
            },
            'error': function() {
                renderTemplate(res, query);
            }
        });

    // When an invalid query is entered
    } else {
        renderTemplate(res);
    }
};

/**
* Renders the template for the results
*
* @param  res
* @param  query
* @param  results  
*/
var renderTemplate = function(res, query, results) {
    if (results) {
        res.render('partials/results', {'query': query, 'data': results}, function(err, html) {
            if (!err) {
                res.render('index', {'body': html});
            } else {
                res.render('index', {'body': null});
            }
        });
    }
};

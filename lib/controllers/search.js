var _ = require('underscore');
var $ = require('jquery');
var request = require('request');

var AquabrowserAPI = require('lib-aquabrowser');
var SummonAPI = require('lib-summon');

var config = require('../../config');

/** 
 * Function that renders the templates for the result page if no query was entered
 */
var getContent = exports.getContent = function(req, res) {

    // Get the media types
    var types = config.constants.types;

    // Render the form
    res.render('partials/form', {'query': '', 'types': types}, function(err, form) {

        // Render the partial
        res.render('partials/results', {'form': form, 'query': ''}, function(err, html) {

            // Render the index template and insert the rendered partial
            res.render('index', {'title': 'Results', 'body': html});
        });
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
        var url = 'http://localhost:' + config.server.port + '/api' + req.url;
        
        $.ajax({
            'url': url,
            'timeout': 10000,
            'success': function(results) {
                _renderTemplate(res, query, results);
            },
            'error': function() {
                _renderTemplate(res, query);
            }
        });

    // When an invalid query is entered
    } else {
        _renderTemplate(res);
    }
};

/**
 * Function that renders the templates for the result page if a valid query was entered
 */
var _renderTemplate = function(res, query, results) {

    // Get the media types
    var types = config.constants.types;

    // Render the form
    res.render('partials/form', {'query': query, 'types': types}, function(err, form) {

        if (results) {
            res.render('partials/results', {'form': form, 'query': query, 'data': results}, function(err, html) {
                if (!err) {
                    res.render('index', {'body': html});
                } else {
                    res.render('index', {'body': null});
                }
            });
        }
    });
};

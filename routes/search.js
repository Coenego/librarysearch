var AquabrowserAPI = require('lib-aquabrowser');
var SummonAPI = require('lib-summon');

var config = require('../config');

/** 
* Renders the template without the results displayed
*/
exports.getContent = function(req, res) {
    res.render('search', { title: 'Search' });
};

/**
* Perform a search
*/
exports.getResults = function(req, res) {

    // If a (valid) query is entered
    if (req.params.length != null) {

        // Store how many external api's have been called
        var searchComplete = 0;

        // Process the query to search for results in the external API's
        getResultsFromAPI(req.params.query, function(results) {

            // Increase our temporary variable when the callback function is executed
            searchComplete++;

            // Check if the data from both the external API's has been collected
            if (searchComplete === Object.keys(config.constants.engines).length) {

                // Render the template (temporary solution with dummy data)
                res.render('search', {
                    'title': 'Search',
                    'query': req.params.query, 
                    'results': results
                });
            }
        });
    }
};

/**
 * Get the search results
 *
 * @param  {String}    query                The query to will be processed to external API
 * @param  {Function}  callback             Standard callback function
 */
var getResultsFromAPI = function(query, callback) {

    // Create variables for both the results from the external API's
    var resAquabrowser = null;
    var resSummon = null;

    // Get Aquabrowser results
    AquabrowserAPI.getAquabrowserResults(query, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            resAquabrowser = res.body;
        }
        callback(['result1','result2','result3','result4','result5']);
    });

    // Get Summon results
    SummonAPI.getSummonResults(query, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            resSummon = res.body
        }
        callback(['result1','result2','result3','result4','result5']);
    });
};

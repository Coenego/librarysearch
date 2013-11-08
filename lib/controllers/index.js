var _ = require('underscore');

var config = require('../../config');

/** 
 * Function that renders all the templates for the index
 */
exports.getContent = function(req, res) {

    // Get the media types
    var types = config.constants.types;

    var params = {
        'records': 10,
        'type': 'All'
    };

    // Render the form
    res.render('partials/form', {'params': params, 'query': '', 'types': types}, function(err, form) {

        // Render the search
        res.render('partials/search', {'form': form}, function(err, search) {
            if (err) {
                res.render('index', {'title': 'Index', 'body': null});
            }

            // Render the index template and insert the rendered partial
            res.render('index', {'title': 'Index', 'body': search});
        });
    });
};

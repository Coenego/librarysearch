/** 
* Gets the content for the index
*/
exports.getContent = function(req, res) {

    // Render the partial
    res.render('partials/search', function(err, html) {
        if (err) {
            res.render('index', {'title': 'Index', 'body': null});
        }

        // Render the index template and insert the rendered partial
        res.render('index', {'title': 'Index', 'body': html});
    });
};

/** 
* Renders the template
*/
exports.getContent = function(req, res) {
    res.render('index', { title: 'Index' });
};

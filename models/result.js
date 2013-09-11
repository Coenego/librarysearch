/**
* A result model
*
* @param  {String}  title               The title of the item
* @param  {String}  link                The url to the 
* @param  {String}  contentType         The content type of the item
* @param  {String}  publicationPlace    The place of publication of the item
* @return {Object}                      The returned item object
*/
exports.Result = function(title, link, contentType, publicationPlace) {
    var that = {};
    that.title = title;
    that.link = link;
    that.contentType = contentType;
    that.publicationPlace = publicationPlace;
    return that;
};

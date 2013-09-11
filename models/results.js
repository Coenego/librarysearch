/**
* A results model
*
* @param  {Number}    rowCount            The total amount of items found
* @param  {Result[]}  items               Collection of items
* @return {Object}                        Returned collection for the used engine
*/
exports.Results = function(rowCount, items) {
    var that = {};
    that.rowCount = rowCount;
    that.items = items;
    return that;
};

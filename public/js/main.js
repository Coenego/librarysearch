/*
* Search for results
*
* @param  {Event}  e                The dispatched event
*/
var searchResults = function(e) {

    // Store the value of the inputfield
    var query = $('#txtQuery').val();

    // Check if the user entered a valid query
    if (query) {
        $('#myModal').modal('show');
        window.location.href  = 'http://localhost:1234/search/' + query;
        return false;
    }

    return false;
};

/*
*   Bind events
*/
var addBinding = function() {

    // When the form gets submitted
    $('form#frmSearch').submit(searchResults);
};

/*
*   Initialization
*/
$(function() {

    // Bind events to components
    addBinding();
});

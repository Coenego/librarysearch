var mediaType = null;
var numRecords = 10;

/*
 * Search for results
 *
 * @param  {Event}    e                The dispatched event
*/
var searchResults = function(e) {

    // Store the value of the inputfield
    var query = $('#txtQuery').val();
    query += '?records=' + numRecords;
    if (mediaType) query += '&type=' + mediaType;

    // Check if the user entered a valid query
    if (query) {
        $('#myModal').modal('show');
        window.location.href  = 'http://localhost:7777/search/' + query;
        return false;
    }

    return false;
};

/**
 * Function that changes the number of results to be found after clicking on a list from the dropdown
 *
 * @param  {Event}    e                The dispatched event
 */
var changeNumRecords = function(e) {
    numRecords = $(e.currentTarget).attr('data-name');
    $('form#frmSearch').find('#dpd-numrecords').find('.numrecords').html(numRecords);
    e.preventDefault();
};

/**
 * Function that changes the media type after clicking on a list from the dropdown
 *
 * @param  {Event}    e                The dispatched event
 */
var changeMediaType = function(e) {
    mediaType = $(e.currentTarget).attr('data-name');
    var label = $(e.currentTarget).find('a').html();
    $('form#frmSearch').find('#dpd-type').find('.type').html(label);
    e.preventDefault();
};

/*
 * Bind events
 */
var addBinding = function() {
    // When the search type dropdown is changed
    $('form#frmSearch').find('#dpd-numrecords').find('.dropdown-menu li').on('click', changeNumRecords);
    // When the search type dropdown is changed
    $('form#frmSearch').find('#dpd-type').find('.dropdown-menu li').on('click', changeMediaType);
    // When the form gets submitted
    $('form#frmSearch').submit(searchResults);
};

/*
 * Initialization
 */
$(function() {

    // Bind events to components
    addBinding();
});

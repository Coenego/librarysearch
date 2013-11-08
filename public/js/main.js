/*
 * Search for results
 *
 * @param  {Event}    e                The dispatched event
*/
var searchResults = function(e) {

    // Store the value of the inputfield
    var query = $('#txtQuery').val();
    query += '?records=' + $('.numrecords').html();
    if ($('.type').html() != 'All') query += '&type=' + $('.type').html();

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
    var numRecords = $(e.currentTarget).attr('data-name');
    $('form#frmSearch').find('#dpd-numrecords').find('.numrecords').html(numRecords);
    e.preventDefault();
};

/**
 * Function that changes the media type after clicking on a list from the dropdown
 *
 * @param  {Event}    e                The dispatched event
 */
var changeMediaType = function(e) {
    var type = $(e.currentTarget).find('a').html();
    $('form#frmSearch').find('#dpd-type').find('.type').html(type);
    e.preventDefault();
};

/**
 * Function that toggles the filter list
 *
 * @param  {Event}    e                The dispatched event
 */
var showCompleteFilterList = function(e) {
    var container = $(e.currentTarget).parent().parent().find('.filter-toggle');
    $(container).slideToggle();
    return false;
};

/**
 * Function that initializes UI components
 */
var initUI = function() {
    // Hide the container that displays the remaining facet filters
    $('.filter-toggle').hide();
};

/*
 * Bind events
 */
var addBinding = function() {
    // When all the filters should be shown
    $('.filter-list').find('.show-more').on('click', showCompleteFilterList);
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
    // Initialize UI components
    initUI();
    // Bind events to components
    addBinding();
});

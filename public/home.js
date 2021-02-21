function initialize() {
    var input = document.getElementById('locationField');

    var autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        //  alert(place.name + "  " + place.geometry.location.lat() + " " + place.geometry.location.lng());
        $('#progress_bar').show()
    });
}
$(document).ready(function () {
    // hide ui
    $('#weather_data').hide()
    $('#progress_bar').hide()

    // init google places auto complete
    google.maps.event.addDomListener(window, 'load', initialize);

});
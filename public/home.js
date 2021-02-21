$(document).ready(function () {
    // hide ui
    $('#weather_data').hide()
    $('#progress_bar').hide()

    // on button click
    $('#searchButton').click(function () {
        // check if city name is not empty
        var cityName = $('#locationField').val();
        if (cityName == '') {
            alert('Enter city name');
        } else {
            // display progress bar
            $('#progress_bar').show()

            // create request data
            var requestData = {
                'cityName': cityName
            }
            // make request to controller
            $.post("/weather", requestData, function (responseData, status) {
                $('#progress_bar').hide()
                // console.log(responseData);
                console.log(status);
            });
        }
    });
});
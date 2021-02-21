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
            // toggle ui
            $('#weather_data').hide()
            $('#progress_bar').show()

            // create request data
            var requestData = {
                'cityName': cityName
            }
            // make request to controller
            $.post("/weather", requestData, function (responseData, status) {
                $('#progress_bar').hide()
                $('#weather_data').show()

                console.log(responseData)
                $('#cityName').text(responseData.cityName)
                $('#cityId').text(responseData.id)
                $('#cord').text(`lat : ${responseData.coord.lat}  lon: ${responseData.coord.lon}`)
                responseData.weather.forEach(element => {
                    $('#weather_table').append(`<tr><td> ${element.time} </td><td>  ${element.temp_max} </td> <td> ${element.temp_min} </td> <td>  ${element.humidity} </td> <td> ${element.pressure}</td> </tr>`);
                });
            });
        }
    });
});
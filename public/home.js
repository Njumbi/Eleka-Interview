window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

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

                var timesOnly = responseData.weather.map(e => {
                    return e.time;
                });

                var temp = responseData.weather.map(e => {
                    return e.temp;
                });

                var humidity = responseData.weather.map(e => {
                    return e.humidity;
                });

                // graph
                var ctx = document.getElementById('myChart').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: timesOnly,
                        datasets: [{
                                label: 'Humidity',
                                data: humidity,
                                backgroundColor: window.chartColors.red,
                                borderColor: window.chartColors.red,
                                fill: false
                            },
                            {
                                label: 'Temperature',
                                data: temp,
                                backgroundColor: window.chartColors.blue,
                                borderColor: window.chartColors.blue,
                                fill: false
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            });
        }
    });
});
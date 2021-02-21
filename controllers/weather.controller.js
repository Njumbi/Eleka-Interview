var axios = require("axios");
var moment = require('moment');

exports.getHomePage = (req, res, next) => {
    res.render('home');
}

exports.postWeather = (req, res, next) => {
    // get params
    var cityName = req.body.cityName;

    // make request
    var headers = {
        "x-rapidapi-key": "90606781a8mshcc86af6d9febc62p1bfd7djsn4d1c8a43cd33",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "useQueryString": true
    }
    axios.get(`https://community-open-weather-map.p.rapidapi.com/forecast?q=${cityName}`, {
            headers: headers
        }).then(response => {

            var daysWeather = []

            // format to days using moment
            response.data.list.forEach(element => {
                // format data to return to table
                const fData = {
                    'time': moment(element.dt_txt).format('ddd h:mm:ss a'),
                    'humidity': element.main.humidity,
                    "temp_min": element.main.temp_min,
                    "temp_max": element.main.temp_max,
                    "pressure": element.main.pressure
                }
                daysWeather.push(fData);
            });

            const responseData = {
                'cityName': response.data.city.name,
                'coord': response.data.city.coord,
                'id': response.data.city.id,
                'weather': daysWeather
            }

            res.json(responseData);
        })
        .catch(error => {
            console.log(error);
            res.json(error)
        });

}
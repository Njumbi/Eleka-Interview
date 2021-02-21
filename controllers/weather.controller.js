var axios = require("axios");
var momnet = require('moment');

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

            // format to days using moment
            var day = moment().format('dddd');  

            res.json(response)
        })
        .catch(error => {
            console.log(error);
            res.json(error)
        });

}
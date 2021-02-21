var unirest = require("unirest");

exports.getHomePage = (req, res, next) => {
    res.render('home');
}

exports.postWeather = async (req, res, next) => {

}
const express = require('express')
const routes = express.Router()

const controller = require('../controllers/weather.controller');

routes.get('/', controller.getHomePage);
routes.post('/weather', controller.postWeather)

module.exports = routes;
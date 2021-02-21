const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/weather.controller');

routes.get('/', controllers.getHomePage)

module.exports = routes;
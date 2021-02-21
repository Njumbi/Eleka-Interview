const express = require('express');
const bodyParser = require('body-parser')
const ejs = require('ejs')
const path = require('path')

const app = express()

// settings
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

// routes


// starts server
app.listen(7000, () => {
    console.log("app has started")
})
/**
 * Created by maliaga on 6/27/17.
 */

const express = require('express')
const bodyParse = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')

app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json());
app.engine('.hbs', hbs({
    defaultLayaout: 'default',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')


app.use('/api',api)
app.use('/login', (req, res) => {
    "use strict";
    res.render('login')
})

module.exports = app
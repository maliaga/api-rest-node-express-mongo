/**
 * Created by maliaga on 6/21/17.
 */
'use strict';

const mongoose = require('mongoose')
var app = require('./app')
const port = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) {
        return console.log(`Error en la conección de la base de datos!`)
    }
    console.log('Connection to data base established...')

    app.listen(port, () => {
        console.log(`API REST run in http://localhost:${port}`)
    })
});

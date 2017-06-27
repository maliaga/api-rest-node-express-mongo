/**
 * Created by maliaga on 6/21/17.
 */
'use strict';

const mongoose = require('mongoose')
var app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error en la conección de la base de datos!`)
    }
    console.log('Connection to data base established...')

    app.listen(config.port, () => {
        console.log(`API REST run in http://localhost:${config.port}`)
    })
});

/**
 * Created by maliaga on 6/21/17.
 */
'use strict'

const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const port = process.env.PORT || 3001

app.use(bodyParse.urlencoded({ extended: false}))
app.use(bodyParse.json())

app.get('/hola/:name', ( req, res) => {
    res.send({ message: `Hola Mundo ${req.params.name}!`})
})

app.listen(port, () => {
        console.log(`API REST run in http://localhost:${port}`);
})
/**
 * Created by maliaga on 6/21/17.
 */
'use strict';

const express = require('express')
const bodyParse = require('body-parser')
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 3001;

const productCtrl = require('./controllers/product')

app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json());

app.get('/api/product', productCtrl.getProducts);
app.get('/api/product/:productId',productCtrl.getProductById);
app.post('/api/product', productCtrl.saveProduct);
app.put('/api/product/:productId', productCtrl.updateProduct);
app.delete('/api/product/:productId', productCtrl.deleteProduct);

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) {
        return console.log(`Error en la conección de la base de datos!`)
    }
    console.log('Connection to data base established...')

    app.listen(port, () => {
        console.log(`API REST run in http://localhost:${port}`)
    })
});

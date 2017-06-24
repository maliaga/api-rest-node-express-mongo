/**
 * Created by maliaga on 6/21/17.
 */
'use strict';

const express = require('express')
const bodyParse = require('body-parser')
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 3001;

const Product = require('./models/product')

app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json());

app.get('/api/product', (req, res) => {

    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message: `A ocurrido un error al tratar de buscar los productos : ${err}`})
        if (!products) return res.status(404).send({message: `Nno se han encontrado productos`})

        res.status(200).send({products})
    })
});

app.get('/api/product/:productId', (req, res) => {

    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `A ocurrido un error al tratar de insertas el producto : ${err}`})
        if (!product) return res.status(404).send({message: `El priducto con el ID ${productId} no se ha encontrado`})

        res.status(200).send({product})
    })
});

app.post('/api/product', (req, res) => {
    console.log(req.body);

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) => {
        if (err) res.status(500).send({message: `Error al guardar producto ne la base de datos : ${err}`})

        res.status(200).send({product: productStored})
    })
});

app.put('/api/product/:productId', (req, res) => {

});

app.delete('/api/product/:productId', (req, res) => {

});

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) {
        return console.log(`Error en la conección de la base de datos!`)
    }
    console.log('Connection to data base established...')

    app.listen(port, () => {
        console.log(`API REST run in http://localhost:${port}`)
    })
});

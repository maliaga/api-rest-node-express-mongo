/**
 * Created by maliaga on 6/27/17.
 */
'use strict'

const Product = require('../models/product')

function getProductById(req, res) {

    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `A ocurrido un error al tratar de insertas el producto : ${err}`})
        if (!product) return res.status(404).send({message: `El priducto con el ID ${productId} no se ha encontrado`})

        res.status(200).send({product})
    })
}

function getProducts(req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message: `A ocurrido un error al tratar de buscar los productos : ${err}`})
        if (!products) return res.status(404).send({message: `Nno se han encontrado productos`})

        res.status(200).send({products})
    })
}

function updateProduct(req, res) {
    let productId = req.params.productId
    let updateBody = req.body

    Product.findByIdAndUpdate(productId, updateBody, {new: true}, (err, productUpdated) => {
        if (err) res.send(`Error al tratar de actualizar el producto con id: ${productId} con el error: ${err}.`)

        res.status(200).send({product: productUpdated})
    })
}

function deleteProduct(req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) res.send(`Error al tratar de eliminar el producto con id: ${productId} con el error: ${err}.`)

        product.remove(err => {
            if (err) res.send(`Error al tratar de eliminar el producto con id ${productId} y el error es ${err}.`)

            res.status(200).send({message: `Producto eliminado correctamente.`})
        })
    })
}

function saveProduct(req, res) {
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
}

module.exports = {
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct,
    saveProduct
}
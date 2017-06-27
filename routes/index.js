/**
 * Created by maliaga on 6/27/17.
 */
const express = require('express')
const api = express.Router()
const productCtrl = require('../controllers/product')

api.get('/product', productCtrl.getProducts);
api.get('/product/:productId',productCtrl.getProductById);
api.post('/product', productCtrl.saveProduct);
api.put('/product/:productId', productCtrl.updateProduct);
api.delete('/product/:productId', productCtrl.deleteProduct);

module.exports = api
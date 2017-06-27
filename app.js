/**
 * Created by maliaga on 6/27/17.
 */

const express = require('express')
const bodyParse = require('body-parser')
const app = express();
const productCtrl = require('./controllers/product')

app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json());

app.get('/api/product', productCtrl.getProducts);
app.get('/api/product/:productId',productCtrl.getProductById);
app.post('/api/product', productCtrl.saveProduct);
app.put('/api/product/:productId', productCtrl.updateProduct);
app.delete('/api/product/:productId', productCtrl.deleteProduct);


module.exports = app
/**
 * Created by maliaga on 6/23/17.
 */
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProducShema = Schema({
    name: String,
    picture: String,
    price: {type: Number, default: 0},
    category: {type: String, enum: ['computers', 'phones', 'accessories']},
    description: String
})

module.exports = mongoose.model('Product', ProducShema)
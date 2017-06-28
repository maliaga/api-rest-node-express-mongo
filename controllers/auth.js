/**
 * Created by maliaga on 6/28/17.
 */

'use strict'

const nomgoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

function signUp(req, res) {
 const user = new User({
     email : req.body.email,
     displayName: req.body.displayName
 })

    user.save((err) => {
     if(err) res.status(500).send({message: `Error al tratar de crear al usuario: ${err}`})

        return res.status(200).send({token: service.createToken(user)})
    })
}

function signIn(req, res) {

}

module.exports = {
    signUp,
    signIn
}
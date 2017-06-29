/**
 * Created by maliaga on 6/28/17.
 */

'use strict'

const User = require('../models/user')
const service = require('../services')

function signUp(req, res) {
    console.log('signUp')
    console.log(req)
    console.log('signUp')
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    })
    console.log('user')
    console.log(user)
    console.log('user')
    user.save((err) => {
        if (err) res.status(500).send({message: `Error al tratar de crear al usuario: ${err}`})

        return res.status(201).send({token: service.createToken(user)})
    })
}

function signIn(req, res) {
    User.find({email: req.body.email}, (err, user) => {
        if (err) return res.status(500).send({message: err})
        if (!user) return res.status(404).send({message: `No se ha encontrado el usuario`})

        req.user = user
        res.status(200).send({
            message: `Te has logueado correctamente`,
            token: service.createToken(user)
        })
    })
}

module.exports = {
    signUp,
    signIn
}
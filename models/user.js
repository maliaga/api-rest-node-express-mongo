/**
 * Created by maliaga on 6/27/17.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

const userSchema = new Schema({
    email: {type: String, unique: true, lowercase: true},
    displayName: String,
    avatar: String,
    password: {type: String, select: false},
    sigupDate: {type: Date, default: Date.now()},
    lastLogin: Date
})

userSchema.pre('save', function(next){
    "use strict";
    let user = this
   // if (!user.isModified('password')) return next()
    console.log('pre')

    console.log(user)

    console.log('pre')
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return next(err)

            user.password = hash
            next()
        })
    })
})

userSchema.methods.gravatar = function () {
    if (!this.email) return 'https://gravatar.com/avatar/?s=200&d=retro'

    const md5 = crypto.createHash('md5').update(this.email).digest('hex')

    return `https://gravatar.com/avatar/${md5}?s200&r=retro`
}


module.exports = mongoose.model('User', userSchema)
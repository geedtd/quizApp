const express = require('express')
const Users = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const checkAuth = require('../middleware/check-auth')
const {loginValidator, regiterValidator, registerValidator } = require('../validators/validators')

const router = express.Router()

router.post('/register', (req, res) => {
    const {errors, isValid } = registerValidator(req.body)
    if (!isValid ) {
        res.json( {success: false, errors})
    } else { 
        const {firstName, lastName, email, password } = req.body 
        const registeredUser = new Users({
            firstName, 
            lastName, 
            email, 
            password, 
            createdAt: new Date()
        })
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(registeredUser.password, salt, (hashErr, hash) => {
                if (err || hashErr ) {
                    res.json({message: "Error occured hashing", success: false})
                return
                }
                registeredUser.password = hash
                registeredUser.save().then(() => {
                    res.json({"message":"User created sucessfully", "success": true})
                }).caych(err => res.json({message: err.message, success: false}))
            })
        })
    }
})

module.exports = router
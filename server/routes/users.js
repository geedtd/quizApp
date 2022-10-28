const express = require('express')
const Users = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const checkAuth = require('../middleware/check-auth')
const {loginValidator, regiterValidator, registerValidator } = require('../validators/validators')

const router = express.Router()

router.post('/login', (req, res) => {
    const {errors, isValid} = loginValidator(req.body)
    if (!isValid) {
        res.json({ success: false, errors})
    } else {
        Users.findOne({ email: req.body.email }).then(user => {
            if (!user) {
                res.json({message: "Email does not exist", success: false})
            } else {
                bcrypt.compare(req.body.password, user.password).then(success => {
                    if (!success) {
                        res.json({ message: "Invalid password", success: false })
                    } else {
                        const payload = { 
                            id: user._id,
                            name: user.firstName
                        }
                        jwt.sign(
                            payload,
                            process.env.APP_SECRET, {expiresIn: 2155926},
                            (err, token) => {
                                res.json({
                                    user,
                                    token: "Bearer token" + token,
                                    success: true
                                })
                            }
                        )
                    }
                })
            }
        })
    }
})

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
                }).catch(err => res.json({message: err.message, success: false}))
            })
        })
    }
})

module.exports = router
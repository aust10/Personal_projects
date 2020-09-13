const jwt = require('jsonwebtoken')

const express = require('express')
const User = require('../models/User')
const router = express.Router()

router.post('/signUp', (req, res) => {
  User.findOne({ email: req.body.email }, async (err, userExist) => {
    if (err) return res.status(500).send(err)
    if (userExist) return res.status(400).send({
      errorMessage: 'User already exists.'
    })
    const user = await User.signUp(req.body.email, req.body.password)
    
    const token = jwt.sign({
      _id: user._id
    }, 'PROCESS')
    
    res.send({
      token,
      currentUser: user
    })
    res.status(201).send(user.sanatize())
  })
})

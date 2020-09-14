const jwt = require('jsonwebtoken')
const User = require('../models/User')

const express = require('express')
const router = express.Router()

router.post('/signUp', (req, res) => {
  console.log(req.body)
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
    res.status(201).send(user.sanitize())
  })
})

module.exports = router

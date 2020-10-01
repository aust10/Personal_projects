const jwt = require('jsonwebtoken')
const User = require('../models/User')

const express = require('express')
const router = express.Router()

router.post('/updateUser', (req, res) => {
  console.log(req.body.id)

  const objUpdate = {}

  if (req.body.firstName !== '') objUpdate.firstName = req.body.firstName
  if (req.body.lastName !== '') objUpdate.lastName = req.body.lastName

  const updates = {
    $set: objUpdate
  }

  User.updateOne({ _id: req.body.id }, updates, (err, user) => {
    if (err) return res.status(500).send(err)
    console.log('profile updated')
    User.findOne({ _id: req.body.id }, (err, newuser) => {
      if (err) return res.status(500).send(err)
      res.send(newuser)
    })
  })
})

module.exports = router

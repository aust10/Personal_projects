const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const { Schema } = mongoose

const userSchema = Schema({
  first_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

userSchema.statics.signUp = async function (email, password) {
  const user = new this()
  user.email = email
  user.hashPassword(password)
  user.first_name = null
  user.last_name = null
  await user.save()
  return user
}

userSchema.methods.hashPassword = (plainText) => {
  this.password = bcrypt.hashSync(plainText, 4)
}

userSchema.methods.sanitize = function () {
  return {
    ...this._doc,
    password: undefined
  }
}

const User = mongoose.model('User', userSchema)
module.exports = User

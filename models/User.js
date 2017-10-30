const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
  clientId: String
})

model('users', userSchema)
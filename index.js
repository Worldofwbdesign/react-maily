const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport.js')
require('./models/User')

mongoose.connect(keys.mongoURI)

const app = express()
require('./routes/authRoute')(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`App is running at port ${PORT}`))
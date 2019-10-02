require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

/*
const bluebird = require('bluebird')
const mongoose = require('mongoose')
mongoose.Promise = bluebird
mongoose.connect(config.mongo.url)
const MONGOSERVER = process.env.MONGOSERVER || 'mongodb://localhost/back-api'
*/

const PORT = process.env.PORT || 8080
const ENVIRONMENT = process.env.NODE_ENV || 'dev'

const routes = require('./routes')

app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('tiny'))

app.use('/', routes)

app.listen(PORT, () => console.log(`Magic happens on port ${PORT}`))

module.exports = app

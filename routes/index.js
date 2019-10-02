const Router = require('express').Router
const router = new Router()

const meetupRouter = require('./meetup')

router
    .get('/', (req, res) => res.json({ message: 'Welcome to back-api API!' }))
    .get('/meetup', meetupRouter)

module.exports = router
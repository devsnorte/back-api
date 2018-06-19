const Router = require('express').Router
const router = new Router()

const meetup = require('./model/meetup/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to back-api API!' })
})

router.use('/meetup', meetup)

module.exports = router

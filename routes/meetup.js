const Router = require('express').Router
const router = new Router()

const controller = require('../controllers')

router
    .get('/', (...args) => controller.meetup(...args))
    .get('/members', (...args) => controller.members(...args))
    .get('/events', (...args) => controller.events(...args))

module.exports = router
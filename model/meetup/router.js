const controller = require('./controller')
const Router = require('express').Router
const router = new Router()

router.route('/')
.get((...args) => controller.meetup(...args))
router.route('/members')
  .get((...args) => controller.members(...args))
router.route('/events')
  .get((...args) => controller.events(...args))

module.exports = router

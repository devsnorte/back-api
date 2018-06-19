const controller = require('./controller')
const Router = require('express').Router
const router = new Router()

router.route('/members')
  .get((...args) => controller.members(...args))

module.exports = router

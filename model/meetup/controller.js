const Controller = require('../../lib/controller')
const meetupFacade = require('./facade')

class MeetupController extends Controller {}

module.exports = new MeetupController(meetupFacade)

const Facade = require('../../lib/facade')
const meetupSchema = require('./schema')

class MeetupFacade extends Facade {}

module.exports = new MeetupFacade('Meetup', meetupSchema)

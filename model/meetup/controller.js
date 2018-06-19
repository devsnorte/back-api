const Controller = require('../../lib/controller')
const meetupFacade = require('./facade')
const axios = require('axios')

class MeetupController extends Controller {

  meetup(req, res, next) {
    axios.get(`https://api.meetup.com/Vue-js-Norte?key=${process.env.MEETUP_APIKEY}`)
    .then(response => {
      res.json(response.data)
    })
  }

  members(req, res, next) {
    axios.get(`https://api.meetup.com/Vue-js-Norte/members?key=${process.env.MEETUP_APIKEY}`)
    .then(response => {
      res.json(response.data)
    })
  }

  events(req, res, next) {
    axios.get(`https://api.meetup.com/Vue-js-Norte/events?key=${process.env.MEETUP_APIKEY}`)
    .then(response => {
      res.json(response.data)
    })
  }

}

module.exports = new MeetupController(meetupFacade)

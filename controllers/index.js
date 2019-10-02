const axios = require('axios')

const Controller = require('../lib/controller')
const meetupFacade = require('../model/meetup/facade')

const MEETUP_APIKEY = process.env.MEETUP_APIKEY
const baseURL = process.env.baseURL

const request = axios.create({ baseURL })

class MeetupController extends Controller {

  meetup(req, res, next) {
    request
      .get(`?key=${MEETUP_APIKEY}`)
      .then(response => res.json(response.data))
  }

  members(req, res, next) {
    request
      .get(`/members?key=${MEETUP_APIKEY}`)
      .then(response => res.json(response.data))
  }

  events(req, res, next) {
    request
      .get(`/events?key=${MEETUP_APIKEY}`)
      .then(response => res.json(response.data))
  }

}

module.exports = new MeetupController(meetupFacade)

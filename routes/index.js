const axios = require('axios')
const Router = require('express').Router
const router = new Router()

const meetupRouter = require('./meetup')

const MEMBROS = 'https://api.meetup.com/Vue-js-Norte/members?&sign=true&photo-host=public'

router
    .get('/', (req, res) => res.json({ message: 'Welcome to back-api API!' }))
    .get('/meetup', meetupRouter)
    .get('/members', async (req, res) => {
        try {
            const page = (!!req.query.page) ? req.query.page : 1
            const offset = (!!req.query.offset) ? req.query.offset : 0
            const { data } = await axios.get(`${MEMBROS}&page=${page}&offset=${offset}`)
            res.json(data)
        } catch (e) {
            res.json({ message: 'Error on API Access - Try again.' })
        }
    })


module.exports = router
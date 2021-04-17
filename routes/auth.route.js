const express = require('express')

const { controller } = require('../controllers')

const app = express()
const router = express.Router()

router.post('/signup', controller.Signup)
router.post('/login', controller.login)

exports.authRoute = app.use('/auth', router)
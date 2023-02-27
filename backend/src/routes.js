const express = require('express')
const servicesController = require('./controllers/servicesController')

const router = express.Router()

router.get('/services', servicesController.getAll)

module.exports = router
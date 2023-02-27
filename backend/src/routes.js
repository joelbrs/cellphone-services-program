const express = require('express')
const servicesController = require('./controllers/servicesController')

const router = express.Router()

router.get('/services', servicesController.getAll)
router.post('/services', servicesController.createService)

module.exports = router
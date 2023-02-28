const express = require('express')
const servicesController = require('./controllers/servicesController')
const serviceMiddleware = require('./middleware/serviceMiddleware')

const router = express.Router()

router.get('/services', servicesController.getAll)
router.post('/services', serviceMiddleware.validateBody, servicesController.createService)

module.exports = router
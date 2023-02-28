const express = require('express')
const servicesController = require('./controllers/servicesController')
const serviceMiddleware = require('./middleware/serviceMiddleware')

const router = express.Router()

router.get('/services', servicesController.getAll)
router.get('/services/:id', servicesController.getById)
router.post('/services', serviceMiddleware.validateBody, servicesController.createService)
router.delete('/services/:id', servicesController.deleteService)
   
module.exports = router
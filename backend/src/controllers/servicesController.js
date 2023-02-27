const servicesModel = require('../models/servicesModel')

const getAll = async (_req, res) => {
    const services = await servicesModel.getAll()

    return res.status(200).json(services)
}

const createService = async (req, res) => {
    const createdService = await servicesModel.createService(req.body)

    return res.status(201).json(createdService)
}

module.exports = {
    getAll,
    createService
}
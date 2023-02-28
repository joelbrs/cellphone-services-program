const servicesModel = require('../models/servicesModel')

const getAll = async (_req, res) => {
    const services = await servicesModel.getAll()

    return res.status(200).json(services)
}

const getById = async (req, res) => {
    const { id } = req.params

    const [service] = await servicesModel.getById(id)
    console.log('SERVICE: ', service);
    return res.status(200).json(service)
}

const createService = async (req, res) => {
    const createdService = await servicesModel.createService(req.body)

    return res.status(201).json(createdService)
}

const deleteService = async (req, res) => {
    const { id } = req.params

    await servicesModel.deleteService(id)

    return res.status(204).json()
}

const updateService = async (req, res) => {
    const { id } = req.params

    await servicesModel.updateService(id, req.body)

    return res.status(204).json()
}

module.exports = {
    getAll,
    createService,
    deleteService,
    getById,
    updateService
}
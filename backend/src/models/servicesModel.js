const connection = require('./connection')

const getAll = async () => {
    const [services, buffer] = await connection.execute('SELECT * FROM services')
    return services
}

const getById = async (id) => {
    const service = await connection.execute('SELECT * FROM services WHERE id = ?', [id])
    return service
}

const createService = async (service) => {
    const {model, status, inclusionDate, piecePrice, servicePrice, profit, deliveredDate} = service
    const query = 'INSERT INTO services(model, status, inclusionDate, piecePrice, servicePrice, profit, deliveredDate) VALUES (?, ?, ?, ?, ?, ?, ?)'


    const [createdService, buffer] = await connection.execute(
        query, [model, status, inclusionDate, piecePrice, servicePrice, profit, deliveredDate]
    )

    return {insertId: createdService.insertId}
}   

const deleteService = async (id) => {
    const removedService = await connection.execute('DELETE FROM services WHERE id = ?', [id])

    return removedService
}

module.exports = {
    getAll,
    createService,
    deleteService,
    getById
}
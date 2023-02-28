const connection = require('./connection')

const getAll = async () => {
    const [services, buffer] = await connection.execute('SELECT * FROM services')
    return services
}

const createService = async (service) => {
    const {model, status, inclusionDate, piecePrice, servicePrice, profit, deliveredDate} = service
    const query = 'INSERT INTO services(model, status, inclusionDate, piecePrice, servicePrice, profit, deliveredDate) VALUES (?, ?, ?, ?, ?, ?, ?)'


    const [createdService, buffer] = await connection.execute(
        query, [model, status, inclusionDate, piecePrice, servicePrice, profit, deliveredDate]
    )

    return {insertId: createdService.insertId}
}   

module.exports = {
    getAll,
    createService
}
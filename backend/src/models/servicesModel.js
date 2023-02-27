const connection = require('./connection')

const getAll = async () => {
    const [services, buffer] = await connection.execute('SELECT * FROM services')
    return services
}

module.exports = {
    getAll
}
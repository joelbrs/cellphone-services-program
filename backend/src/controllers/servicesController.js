const getAll = (req, res) => {
    return res.status(200).json({ message: 'controller is ok' })
}

module.exports = {
    getAll
}
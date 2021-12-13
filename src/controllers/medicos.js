//controllers/medicos.js
const db = require('../models')

exports.getAllMedicos = async (req, res, next) => {
    const allMedicos = await db.Medicos.findAll({
        attributes: ['id', 'nombre', 'apellido', 'createdAt','updatedAt'],
    })
    res.status(200).send(allMedicos)

}
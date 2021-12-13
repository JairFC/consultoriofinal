//controllers/citas.js
const db = require('../models')

exports.getAllCitas = async (req, res, next) => {
    const allCitas = await db.Citas.findAll({
        attributes: ['id', 'nombre', 'apellido', 'createdAt', 'fechaCita'],
    })
    res.status(200).send(allCitas)

}
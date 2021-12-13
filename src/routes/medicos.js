const express = require('express')
const router = express.Router()

const medicosController = require('../controllers/medicos')

router.get('/', medicosController.getAllMedicos)

module.exports = router
const express = require('express')
const router = express.Router()

const citasController = require('../controllers/citas')

router.get('/', citasController.getAllCitas)

module.exports = router
const express = require('express')
const {getNotas, postNotas,findNota} = require('../controller/notascontroller')

const notaRoute = express.Router()

//*Metodoss CRUD
notaRoute.get('/',getNotas)
notaRoute.post('/',postNotas)
notaRoute.get('/:id',findNota)

module.exports = notaRoute


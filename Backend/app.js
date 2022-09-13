const express = require('express')

const app = express()

app.use(express.json())
app.use('/api/notas',require('./routes/nota'))


module.exports = app
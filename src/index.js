const express = require('express')
const app = express()
const routes = require('./api/routes')

app.use('/', routes)
//app.listen(8080)
app.listen(process.env.PORT)
const mongoose = require('mongoose')
const url = 'mongodb+srv://admin:e72S5R4DZjUE82n@clusteraulanode.xw5na.mongodb.net/MartialArts?retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology : true})

mongoose.connection.on('connected', function () {
    console.log('Conectado com sucesso!')
})

mongoose.connection.on('disconnected', function () {
    console.log('Db desconectado!')
})

module.exports = mongoose
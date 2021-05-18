const mongoose = require('../data')

var modalidadeSchema = new mongoose.Schema({
    nome : String,
}, {timestamps : true})

var Modalidade = mongoose.model('modalidade', modalidadeSchema)

module.exports = Modalidade
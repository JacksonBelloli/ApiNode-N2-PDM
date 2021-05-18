const mongoose = require('../data')

var graduacaoSchema = new mongoose.Schema({
    nome : String,
    modalidade : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'modalidade'
    }
}, {timestamps : true})

var Graduacao = mongoose.model('graduacao', graduacaoSchema, 'graduacao')

module.exports = Graduacao
const mongoose = require('../data')

var planoSchema = new mongoose.Schema({
    nome : String,
    valor_mensal : Number,
    modalidade : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'modalidade'
    }
}, {timestamps : true})

var Plano = mongoose.model('plano', planoSchema)

module.exports = Plano
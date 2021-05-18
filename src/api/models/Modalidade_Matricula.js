const mongoose = require('../data')

var modmatSchema = new mongoose.Schema({
    data_inicio : Date,
    data_fim : Date,
    modalidade : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'modalidade'
    },
    graduacao : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'graduacao'
    },
    plano : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'plano'
    }
}, {timestamps : true})

var Modmat = mongoose.model('modalidade_matricula', modmatSchema)

module.exports = Modmat
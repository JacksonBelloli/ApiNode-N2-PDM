const mongoose = require('../data')

var matriculaSchema = new mongoose.Schema({
    data_matricula : Date,
    dia_vencimento : Number,
    data_encerramento : Date,
    aluno : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'aluno'
    }
}, {timestamps : true})

var Matricula = mongoose.model('matricula', matriculaSchema)

module.exports = Matricula
const mongoose = require('../data')

var alunoSchema = new mongoose.Schema({
    nome : String,
    data_nascimento : Date,
    sexo : String,
    telefone : String,
    celular : String,
    email : String,
    observacao : String,
    endereco : String,
    numero : Number,
    complemento : String,
    bairro : String,
    cidade : String,
    estado : String,
    pais : String,
    cep : String
}, {timestamps : true})

var Aluno = mongoose.model('aluno', alunoSchema)

module.exports = Aluno
const mongoose = require('../data')

var usuarioSchema = new mongoose.Schema({
    usuario : String,
    senha : String,
    perfil : Number
}, {timestamps : true})

var Usuario = mongoose.model('usuario', usuarioSchema)

module.exports = Usuario
const express = require('express')
const router = express.Router()
const Usuario = require('../models/Usuario')

router.get('/', async (req, res) =>{
    var usuario = await Usuario.find()
    return res.status(200).json(usuario)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    var usuario = await Usuario.findById(id)
    if(!usuario) return res.status(404).json({
        "erro" : "Usuario não encontrado"
    }) 
    res.status(200).json(usuario)
})

router.post('/', async (req, res) =>{
    const usuario = new Usuario(req.body)
    var resultado = await usuario.save()
    if(!resultado) return res.status(500).json({
        "erro" : "Erro ao salvar"
    })
    return res.status(200).json('Usuario cadastrado com Sucesso!')
})

router.delete('/:id', async (req, res) =>{
    const id = req.params.id
    var usuario = await Usuario.findByIdAndDelete(id)
    if(!usuario) return res.status(404).json({
        "erro" : "Usuario não encontrado"
    }) 
    return res.status(200).json('Usuario deletado com sucesso')
})

router.put('/:id', async (req, res) =>{
    const id = req.params.id
    const novoUsuario = req.body
    var usuario = await Usuario.findByIdAndUpdate(id, novoUsuario, {useFindAndModify : false, new : true})
    if(!usuario) return res.status(404).json({
        "erro" : "Usuario não encontrado"
    }) 
    return res.status(200).json(usuario)
})

module.exports = router
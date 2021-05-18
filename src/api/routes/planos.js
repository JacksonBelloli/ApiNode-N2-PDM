const express = require('express')
const router = express.Router()
const Plano = require('../models/Plano')

router.get('/', async (req, res) =>{
    var plano = await Plano.find().populate('modalidade')
    return res.status(200).json(plano)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    var plano = await Plano.findById(id).populate('modalidade')
    if(!plano) return res.status(404).json({
        "erro" : "Plano não encontrado"
    }) 
    res.status(200).json(plano)
})

router.post('/', async (req, res) =>{
    const plano = new Plano(req.body)
    var resultado = await plano.save()
    if(!resultado) return res.status(500).json({
        "erro" : "Erro ao salvar"
    })
    return res.status(200).json('Plano cadastrado com Sucesso!')
})

router.delete('/:id', async (req, res) =>{
    const id = req.params.id
    var plano = await Plano.findByIdAndDelete(id)
    if(!plano) return res.status(404).json({
        "erro" : "Plano não encontrado"
    }) 
    return res.status(200).json('Plano deletado com sucesso')
})

router.put('/:id', async (req, res) =>{
    const id = req.params.id
    const novoPlano = req.body
    var plano = await Plano.findByIdAndUpdate(id, novoPlano, {useFindAndModify : false, new : true})
    if(!plano) return res.status(404).json({
        "erro" : "Plano não encontrado"
    }) 
    return res.status(200).json(plano)
})

module.exports = router
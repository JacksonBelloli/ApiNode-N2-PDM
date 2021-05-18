const express = require('express')
const router = express.Router()
const Modalidade = require('../models/Modalidade')

router.get('/', async (req, res) =>{
    var modalidade = await Modalidade.find()
    return res.status(200).json(modalidade)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    var modalidade = await Modalidade.findById(id)
    if(!modalidade) return res.status(404).json({
        "erro" : "Modalidade não encontrada"
    }) 
    res.status(200).json(modalidade)
})

router.post('/', async (req, res) =>{
    const modalidade = new Modalidade(req.body)
    var resultado = await modalidade.save()
    if(!resultado) return res.status(500).json({
        "erro" : "Erro ao salvar"
    })
    return res.status(200).json('Modalidade cadastrada com Sucesso!')
})

router.delete('/:id', async (req, res) =>{
    const id = req.params.id
    var modalidade = await Modalidade.findByIdAndDelete(id)
    if(!modalidade) return res.status(404).json({
        "erro" : "Modalidade não encontrada"
    }) 
    return res.status(200).json('Modalidade deletada com sucesso')
})

router.put('/:id', async (req, res) =>{
    const id = req.params.id
    const novaModalidade = req.body
    var modalidade = await Modalidade.findByIdAndUpdate(id, novaModalidade, {useFindAndModify : false, new : true})
    if(!modalidade) return res.status(404).json({
        "erro" : "Modalidade não encontrada"
    }) 
    return res.status(200).json(modalidade)
})

module.exports = router
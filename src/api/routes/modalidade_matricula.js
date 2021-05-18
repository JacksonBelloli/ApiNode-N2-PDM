const express = require('express')
const router = express.Router()
const Modalidade_Matricula = require('../models/Modalidade_Matricula')

router.get('/', async (req, res) =>{
    var modmat = await Modalidade_Matricula.find().populate('modalidade').populate('graduacao').populate('plano')
    return res.status(200).json(modmat)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    var modmat = await Modalidade_Matricula.findById(id).populate('modalidade', 'graduacao', 'plano')
    if(!modmat) return res.status(404).json({
        "erro" : "Dado não encontrado"
    }) 
    res.status(200).json(modmat)
})

router.post('/', async (req, res) =>{
    const modmat = new Modalidade_Matricula(req.body)
    var resultado = await modmat.save()
    if(!resultado) return res.status(500).json({
        "erro" : "Erro ao salvar"
    })
    return res.status(200).json('Cadastrado com Sucesso!')
})

router.delete('/:id', async (req, res) =>{
    const id = req.params.id
    var modmat = await Modalidade_Matricula.findByIdAndDelete(id)
    if(!modmat) return res.status(404).json({
        "erro" : "Dado não encontrado"
    }) 
    return res.status(200).json('Deletado com sucesso')
})

router.put('/:id', async (req, res) =>{
    const id = req.params.id
    const novaModMat = req.body
    var modmat = await Modalidade_Matricula.findByIdAndUpdate(id, novaModMat, {useFindAndModify : false, new : true})
    if(!modmat) return res.status(404).json({
        "erro" : "Dado não encontrado"
    }) 
    return res.status(200).json(modmat)
})

module.exports = router
const express = require('express')
const router = express.Router()
const Graduacao = require('../models/Graduacao')

router.get('/', async (req, res) =>{
    var graduacao = await Graduacao.find().populate('modalidade')
    return res.status(200).json(graduacao)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    var graduacao = await Graduacao.findById(id).populate('modalidade')
    if(!graduacao) return res.status(404).json({
        "erro" : "Graduação não encontrada"
    }) 
    res.status(200).json(graduacao)
})

router.post('/', async (req, res) =>{
    const aluno = new Graduacao(req.body)
    var resultado = await aluno.save()
    if(!resultado) return res.status(500).json({
        "erro" : "Erro ao salvar"
    })
    return res.status(200).json('Graduação cadastrada com Sucesso!')
})

router.delete('/:id', async (req, res) =>{
    const id = req.params.id
    var graduacao = await Graduacao.findByIdAndDelete(id)
    if(!graduacao) return res.status(404).json({
        "erro" : "Graduação não encontrada"
    }) 
    return res.status(200).json('Graduação deletada com sucesso')
})

router.put('/:id', async (req, res) =>{
    const id = req.params.id
    const novaGraduacao = req.body
    var graduacao = await Graduacao.findByIdAndUpdate(id, novaGraduacao, {useFindAndModify : false, new : true})
    if(!graduacao) return res.status(404).json({
        "erro" : "Graduação não encontrada"
    }) 
    return res.status(200).json(graduacao)
})

module.exports = router
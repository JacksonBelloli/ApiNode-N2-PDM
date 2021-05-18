const express = require('express')
const router = express.Router()
const Matricula = require('../models/Matricula')

router.get('/', async (req, res) =>{
    var matricula = await Matricula.find().populate('aluno')
    return res.status(200).json(matricula)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    var matricula = await Matricula.findById(id).populate('aluno')
    if(!matricula) return res.status(404).json({
        "erro" : "Matricula não encontrada"
    }) 
    res.status(200).json(matricula)
})

router.post('/', async (req, res) =>{
    const matricula = new Matricula(req.body)
    var resultado = await matricula.save()
    if(!resultado) return res.status(500).json({
        "erro" : "Erro ao salvar"
    })
    return res.status(200).json('Matricula cadastrada com Sucesso!')
})

router.delete('/:id', async (req, res) =>{
    const id = req.params.id
    var matricula = await Matricula.findByIdAndDelete(id)
    if(!matricula) return res.status(404).json({
        "erro" : "Matricula não encontrada"
    }) 
    return res.status(200).json('Matricula deletada com sucesso')
})

router.put('/:id', async (req, res) =>{
    const id = req.params.id
    const novaMatricula = req.body
    var matricula = await Matricula.findByIdAndUpdate(id, novaMatricula, {useFindAndModify : false, new : true})
    if(!matricula) return res.status(404).json({
        "erro" : "Matricula não encontrada"
    }) 
    return res.status(200).json(matricula)
})

module.exports = router
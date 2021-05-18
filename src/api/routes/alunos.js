const express = require('express')
const router = express.Router()
const Aluno = require('../models/Aluno')

router.get('/', async (req, res) =>{
    var aluno = await Aluno.find()
    return res.status(200).json(aluno)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    var aluno = await Aluno.findById(id)
    if(!aluno) return res.status(404).json({
        "erro" : "Aluno não encontrado"
    }) 
    res.status(200).json(aluno)
})

router.post('/', async (req, res) =>{
    const aluno = new Aluno(req.body)
    var resultado = await aluno.save()
    return res.status(200).json('Aluno cadastrado com Sucesso!')
})

router.delete('/:id', async (req, res) =>{
    const id = req.params.id
    var aluno = await Aluno.findByIdAndDelete(id)
    if(!aluno) return res.status(404).json({
        "erro" : "Aluno não encontrado"
    }) 
    return res.status(200).json('Aluno deletado com sucesso')
})

router.put('/:id', async (req, res) =>{
    const id = req.params.id
    const novoAluno = req.body
    var aluno = await Aluno.findByIdAndUpdate(id, novoAluno, {useFindAndModify : false, new : true})
    if(!aluno) return res.status(404).json({
        "erro" : "Aluno não encontrado"
    }) 
    return res.status(200).json(aluno)
})

module.exports = router
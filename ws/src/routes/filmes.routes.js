const express = require('express');
const router = express.Router();
const _ = require('underscore');
const Filme = require('../models/filme');
const Temporada = require('../models/temporada');

//RECUPERAR TELA HOME
router.get('/home', async (req, res) => {
    try {

        //RECUPERAR TODOS OS FILMES
        let filmes = await Filme.find({});
        let finalFilmes = [];

        //RECUPERAR TEMPORADAS
        for (let filme of filmes) {
            const temporadas = await Temporada.find({
                filme_id: filme._id
            });
            const newFilme = { ...filme._doc, temporadas};
            finalFilmes.push(newFilme);
        }

        //MISTURAR RESULTADOS ALEATORIAMENTE   
        finalFilmes = _.shuffle(finalFilmes);

        //FILME PRINCIPAL
        const principal = finalFilmes[0];

        //SEPARAR EM SEÇÕES
        const secoes = _.chunk(finalFilmes, 5);

        res.json({error: false, principal, secoes});
    } catch (err) {
        res.json({error: true, message: err.message});
    }
});

//PEGAR TODOS OS REGISTROS
router.get('/', async (req, res) => {
    try {
        const filmes = await Filme.find({});
        res.json({ error: false, filmes });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

//PEGAR SOMENTE O REGISTRO COM O ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const filme = await Filme.findById(id);
       res.json({ error: false, filme });
    } catch (err) { 
        res.json({ error:true, message: err.message });
    }
    const id = req.params.id;
    res.json({ message: `PEGAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

//CRIAR UM REGISTRO
router.post('/', async (req, res) => {
    try {
    const filme = req.body;
    const response = await new Filme(filme).save();
    res.json({ error: false, filme: response });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

//ATUALIZAR SOMENTE O REGISTRO COM O ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const novo_filme = req.body;

        const filme = await Filme.findByIdAndUpdate(id, novo_filme);
        res.json({ error: false, filme});
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

//DELETAR SOMENTE O REGISTRO COM O ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Filme.findByIdAndDelete(id);
        res.json({ error: false, message: `ID deletado`});

    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});


module.exports = router;
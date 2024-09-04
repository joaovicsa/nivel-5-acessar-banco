const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao obter livros', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const novoLivro = await incluir(req.body);
        res.json({ mensagem: 'Livro incluído com sucesso', livro: novoLivro });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao incluir livro', error });
    }
});

router.delete('/:codigo', async (req, res) => {
    try {
        const resultado = await excluir(req.params.codigo);
        if (resultado.deletedCount > 0) {
            res.json({ mensagem: 'Livro excluído com sucesso' });
        } else {
            res.status(404).json({ mensagem: 'Livro não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir livro', error });
    }
});

module.exports = router;

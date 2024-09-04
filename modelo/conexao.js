const mongoose = require('mongoose');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

const banco = mongoose.connect('mongodb://localhost:27017/livros', options)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB', err));

module.exports = banco;

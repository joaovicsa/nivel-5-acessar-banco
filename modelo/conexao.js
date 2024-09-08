
const mongoose = require('mongoose');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

const uri = 'mongodb://127.0.0.1:27017/livraria';

mongoose.connect(uri, options)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose;

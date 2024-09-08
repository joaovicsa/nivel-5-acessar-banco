var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const livroRouter = require('./routes/livros'); // Importação das rotas de livros


const cors = require('cors'); // Importação do CORS
var app = express();
// Configuração do CORS
app.use(cors());

// Configuração da view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Definição das rotas
app.use('/', indexRouter);       // Rota raiz
app.use('/users', usersRouter);  // Rota users
app.use('/livros', livroRouter); // Rota livros

// Captura de erro 404 e encaminhamento para o manipulador de erros
app.use(function(req, res, next) {
  next(createError(404));
});

// Manipulador de erros
app.use(function(err, req, res, next) {
  // Define locals, apenas fornecendo erros no desenvolvimento
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderiza a página de erro
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

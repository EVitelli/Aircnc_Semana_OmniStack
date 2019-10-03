// importa os pacotes
const express = require('express');
const mongoose = require('mongoose');

// Importa os arquivos
const routes = require('./routes')

// inicia a aplicação
const app = express();

// Cria a conexão com o banco de dados
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-dv2mw.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Informa que a aplicação trabalha com dados no formato JSON
app.use(express.json())

// deve ser passado depois do express.json
app.use(routes);

// Indica qual será a porta de acesso á aplicação
app.listen(3333)

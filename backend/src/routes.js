const express = require('express');

const SessionController = require('./controllers/SessionController')

const routes = express.Router()

// req recebe todas as infos que o usuário está enviando para a requisição e o res devolve uma resposta para a requisição
routes.post('/session', SessionController.store)

// Exporta as rotas do aplicativo
module.exports = routes;
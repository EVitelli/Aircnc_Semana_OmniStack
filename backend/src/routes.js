const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')

const routes = express.Router();
const upload = multer(uploadConfig);

// req recebe todas as infos que o usuário está enviando para a requisição e o res devolve uma resposta para a requisição
routes.post('/session', SessionController.store);
routes.post('/spots',upload.single('thumbnail'), SpotController.store);

// Exporta as rotas do aplicativo
module.exports = routes;
const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')


const DashboardController = require('./controllers/DashboardController')
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router();
const upload = multer(uploadConfig);

// req recebe todas as infos que o usuário está enviando para a requisição e o res devolve uma resposta para a requisição
routes.get('/dashboard', DashboardController.show);

routes.post('/session', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots',upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:spot_id/bookings', BookingController.store)

// Exporta as rotas do aplicativo
module.exports = routes;
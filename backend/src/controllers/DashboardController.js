const Spot = require('../models/Spot')

module.exports = {
    // lista uma unica sessão  (GET)
    async show(req, res) {
        // recupera o valor passado no header
        const {user_id} = req.headers;

        // cria um filtro por usuário
        const spots = await Spot.find({user : user_id});

        return res.json(spots);
    },
}
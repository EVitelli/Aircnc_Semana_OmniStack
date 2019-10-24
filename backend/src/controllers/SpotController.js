const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {
    // retorna um listagem de sessões (GET)
    async index(req, res) {
        // recupera o valor passado na url
        const {tech} = req.query;

        // cria um filtro por tecnologia
        const spots = await Spot.find({techs : tech});

        return res.json(spots);
    },

    // cria uma sessão (POST)
    async store(req, res){
        const {filename} = req.file;
        const {company, techs, price} = req.body; 
        
        // recupera os dados enviados no cabeçalho da requisição
        const {user_id} = req.headers;

        const user = await User.findById(user_id);

        // se o usuário não existe retrona 400
        if(!user){
            return res.status(400).json({erro: 'usuário não encontrado'});
        }


        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price,
        })
        return res.json(spot);
    }
};
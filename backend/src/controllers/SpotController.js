const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {
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
            thumnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price,
        })
        return res.json(spot);
    }
};
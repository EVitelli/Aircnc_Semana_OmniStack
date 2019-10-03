// index retorna um listagem de sessões
// show lista uma unica sessão 
// store cria uma sessão
// update  atualiza uma sessão
// destroy encerra um sessão

const User = require('../models/User')

module.exports = {
    // Toda vez que eu for usar o await, eu devo dizer que a função é assincrona
    async store(req, res){
        // Está buscando email dentro de req.body
        const { email } = req.body;

        // como algumas instruções podem demorar, o js tem o conceito de assincronismo. o await aguarda um instrução ser executada e continua a execução
        const user = await User.create({email});

        return res.json(user)
    }
};

// parou no vídeo 1, 50:18
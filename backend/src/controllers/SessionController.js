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
        // const user = await User.create({email});

        // verifica se o usuário já existe no banco de dados
        // caso ele encontreum usuário no banco com o email passado ele retornará este usuário
        let user = await User.findOne({email})
        if(!user){
            // Adiciona um usuário no banco de dados
            user - await User.create({email})
        }
        return res.json(user)
    }
};
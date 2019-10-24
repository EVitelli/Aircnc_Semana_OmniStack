const mongoose = require('mongoose');

// Estrutura do banco de dados
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        // salva o id do usuário que criou o spot.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        // Toda vez que o spot for convertido em JSON, adiciona os virtuals a resposta
        virtuals: true,
    }
});

// Cria um campo que será computado somente pelo JS.
SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);
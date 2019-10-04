const mongoose = require('mongoose');

// Estrutuara do banco de dados
const UserSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        // sala o id do usuário que criou o spot.
        type: mongoose.Schema.Types.ObjectId,
        ref:  'User',
    },
})

module.exports = mongoose.model('Spot', UserSchema);
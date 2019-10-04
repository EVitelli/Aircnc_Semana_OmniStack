const mongoose = require('mongoose');

// Estrutuara do banco de dados
const UserSchema = new mongoose.Schema({
    email: String,
})

module.exports = mongoose.model('User', UserSchema);
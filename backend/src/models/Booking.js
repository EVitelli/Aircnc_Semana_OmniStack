const mongoose = require('mongoose');

// Estrutuara do banco de dados
const BookingSchema = new mongoose.Schema({
    date: String,
    appovved: Boolean,
    user: {
        // sala o id do usuário que criou o spot.
        type: mongoose.Schema.Types.ObjectId,
        ref:  'User',
    },
    spot: {
        // sala o id do usuário que criou o spot.
        type: mongoose.Schema.Types.ObjectId,
        ref:  'Spot',
    },
})

module.exports = mongoose.model('Booking', BookingSchema);
const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petname:{
        type: String,
        required: [true, 'Es requerido un nombre de mascota']
    },
    activationstatus: {
        type: String,
        default: 'PENDIENTE'
    },
    reasoninactivity: String,
    species: {
        type: String,
        required: [true, 'Es requerida una especie']
    },
    breed: {
        type: String,
        required: [true, 'Es requerida una raza']
    },
    color: {
        type: String,
        required: [true, 'El color es requerido']
    },
    // gender: {
    //     type: String,
    //     required: [true, 'Es requerido el sexo de la mascota']
    // },
    dateofbird: {
        type: String,
        required: false
    },
    petimage: {
        type: String,
        required: false
    }
}, {versionKey: false, timestamps: true});

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;
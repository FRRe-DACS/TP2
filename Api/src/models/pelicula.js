const mongoose = require('mongoose');
const { Schema} = mongoose;

const Pelicula= new Schema({
    nombre:String,
    genero:String,
    calificacion:Number,
    tipo: String,
    sinopsis:String,
})

module.exports = mongoose.model('Pelicula', Pelicula);
const { Schema, model } = require('mongoose')

//referenciando a los modelos car y user


const Reservaschema = new Schema({
    fecha_inicio: String,
    fecha_fin: String,
    usuario: String,
    car: String,
    id_reserva:String
}, {
    timestamps: true
})
module.exports = model('reservaX', Reservaschema)
const { Schema, model } = require('mongoose')

//referenciando a los modelos car y user
var Car = model('Car');
var Usuario = model('Usuario');

const Reservaschema = new Schema({
    fecha_inicio: String,
    fecha_fin: String,
    usuario: {
        type: Schema.ObjectId,
        ref: "Usuario"
    },
    car: {
        type: Schema.ObjectId,
        ref: "Car"
    },
    id_reserva: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
})
module.exports = model('reserva', Reservaschema)
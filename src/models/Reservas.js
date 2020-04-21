const { Schema, model } = require('mongoose')

//referenciando a los modelos car y user
var Car = mongoose.model('Car');
var Usuario = mongoose.model('Usuario');

const ReservasSchema = new Schema({
    fecha_inicio: Date,
    fecha_fin: Date,
    usuario: {
        type: Schema.ObjectId,
        ref: "Usuario"
    },
    car: {
        type: Schema.ObjectId,
        ref: "Car"
    }
}, {
    timestamps: true
})
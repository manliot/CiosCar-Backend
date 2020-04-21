const { Schema, model } = require('mongoose')

const CarSchema = new Schema({
    marca: String,
    modelo: String,
    placa: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    color: String,
    año: Number,
    estado_prestado: Boolean,
    ubicacion: String,
    nombreImagen:String,
}, {
    timestamps: true
})
module.exports = model('Car', CarSchema)
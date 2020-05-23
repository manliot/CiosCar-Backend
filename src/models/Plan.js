const { Schema, model } = require('mongoose')

const PlanSchema = new Schema({
    nombre: String,
    duracion: Number,
    precio: String,
    id_Plan: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
})
module.exports = model('Plan', PlanSchema)
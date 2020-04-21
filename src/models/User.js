const { Schema, model } = require('mongoose')


const UserSchema = new Schema({
    nombre: String,
    apellido: String,
    usuario: {
        type: String,
        require: true,
        trim: true,// no espacios en blanco
        unique: true//no debe repetirse 
    },
    contraseña: Number,
    direccion: String,
    Cc: Number,
    
}, {
    timestamps: true
})

module.exports = model('Usuario', UserSchema)
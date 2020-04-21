const usersCtrl = {};

const UserModel = require('../models/User')

usersCtrl.GetUsers = async (req, res) => {
    try {
        const Usuarios = await UserModel.find()
        res.json(Usuarios);
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
};
//
usersCtrl.CreateUser = async (req, res) => {
    try {
        const { nombre, apellido, usuario, contraseña, direccion, Cc } = req.body
        const NewUser = new UserModel({
            nombre,
            apellido,
            usuario,
            contraseña,
            direccion,
            Cc
        })
        await NewUser.save()
        res.json({ messge: ' Created user ' })
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
};

usersCtrl.GetUser = async (req, res) => {
    const usuario = req.params.usuario;
    try {
        const userDB = await UserModel.findOne({ usuario });
        res.json(userDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: "error al obtener usuario",
            error
        })
    }
};
usersCtrl.UpdateUser = async (req, res) => {
    const usuario = req.params.usuario;
    //const body = req.body;
    const { nombre, apellido, contraseña, direccion, Cc } = req.body
    const Userupdated = new UserModel({
        nombre,
        apellido,
        contraseña,
        direccion,
        Cc
    })
    try {
        const userDB = await UserModel.findOneAndUpdate(
            usuario,
            Userupdated);
        res.json({ mensaje: 'actualizacion exitosa' });
    } catch (error) {
        return res.status(400).json({
            mensaje: usuario,
            error
        })
    }
};

usersCtrl.DeleteUser = async (req, res) => {
    try {
        await UserModel.findOneAndDelete(req.params.usuario)
        res.json({ m: 'deleted' })
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
}

module.exports = usersCtrl;
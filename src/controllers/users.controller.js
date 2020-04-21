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
    try {
        const User = await UserModel.findById(req.params.id);
        res.json(User)
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
};
usersCtrl.UpdateUser = async (req, res) => {
    await UserModel.findOneAndUpdate(req.params.id, req.body)
    res.json({ m: 'update' })
};

usersCtrl.DeleteUser = async (req, res) => {
    try {
        await UserModel.findOneAndDelete(req.params.id)
        res.json({ m: 'deleteed' })
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
}

module.exports = usersCtrl;
const usersCtrl = {};

const UserModel = require('../models/User')

usersCtrl.VerifyUser = async (req, res) => {
    try {
        const { contraseña, usuario } = req.body
        const user = await UserModel.findOne({ usuario })
        if (!user) {
            res.json({ mensaje: 'error usuario' })
        } else {
            if (user.usuario = usuario && user.contraseña == contraseña) {
                res.json({ mensaje: 'succesfull' })
            } else {
                res.json({ mensaje: `error contraseña` })
            }
        }
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
}
module.exports = usersCtrl;
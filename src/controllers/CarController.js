const carCtrl = {};

const carModel = require('../models/Car')

carCtrl.GetCars = async (req, res) => {
    try {
        const Cars = await carModel.find()
        res.json(Cars);
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
}

carCtrl.CreateCar = async (req, res) => {
    try {
        const { marca, modelo, placa, color, año, estado_prestado, ubicaion } = req.body
        const NewCar = new carModel({
            marca,
            modelo,
            placa,
            color,
            año,
            estado_prestado,
            ubicaion
        })
        await NewCar.save();
        res.json({ messge: ' Created car ' })
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
}
carCtrl.GetCar = async (req, res) => {
    const placa = req.params.placa;
    try {
        const carDB = await carModel.findOne({ placa });
        res.json(carDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: "error al obtener carro",
            error
        })
    }
};
carCtrl.UpdateCar = async (req, res) => {
    const placa = req.params.placa;
    const body = req.body;
    try {
        const carDB = await carModel.findOneAndUpdate(
            placa,
            body, { new: true });
        res.json({ mensaje: 'actualizacion exitosa' });
    } catch (error) {
        return res.status(400).json({
            mensaje: placa,
            error
        })
    }
};

carCtrl.DeleteCar = async (req, res) => {
    try {
        await carModel.findOneAndDelete(req.params.placa)
        res.json({ m: 'deleted' })
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
}
module.exports = carCtrl
const reservaCtrl = {};

const reservaModel = require('../models/Reserva')

reservaCtrl.GetReservas = async (req, res) => {
    try {
        const Reserva = await reservaModel.find()
        res.json(Reserva);
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
}

reservaCtrl.CreateReserva = async (req, res) => {
    try {
        const { fecha_inicio, fecha_fin, usuario, car} = req.body
        const NewReserva = new reservaModel({
            fecha_inicio,
            fecha_fin,
            usuario, 
            car
        })
        await NewReserva.save();
        res.json({ messge: ' Created reserva' })
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
}
reservaCtrl.GetReserva = async (req, res) => {
    const id_reserva = req.params.id_reserva;
    try {
        const ReservaDB = await reservaModel.findOne({id_reserva});
        res.json(ReservaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: "error al obtener reserva",
            error
        })
    }
};
reservaCtrl.UpdateReserva = async (req, res) => {
    const id_reserva = req.params.id_reserva;
    const body = req.body;
    try {
        const reservaDB = await reservaModel.findOneAndUpdate(
            id_reserva,
            body, { new: true });
        res.json({ mensaje: 'actualizacion exitosa' });
    } catch (error) {
        return res.status(400).json({
            mensaje: id_reserva,
            error
        })
    }
};

reservaCtrl.DeleteReserva = async (req, res) => {
    try {//req.params.id_reservad
        await reservaModel.findOneAndDelete(req.params.id_reservad)
        res.json({ m: 'deleted' })
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
}
module.exports = reservaCtrl
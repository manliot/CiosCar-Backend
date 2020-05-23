const planCtrl = {};

const planModel = require('../models/Plan')

planCtrl.GetPlanes = async (req, res) => {
    try {
        const Plan = await planModel.find()
        res.json(Plan);
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
}

planCtrl.CreatePlan = async (req, res) => {
    try {
        const { nombre, duracion, precio, id_Plan } = req.body
        const NewPlan = new planModel({
            nombre,
            duracion,
            precio,
            id_Plan
        })
        await NewPlan.save();
        res.json({ messge: ' Created plan' })
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
}
planCtrl.GetPlan = async (req, res) => {
    const id_Plan = req.params.id_Plan;
    try {
        const PlanDB = await planModel.findOne({ id_Plan: id_Plan });
        res.json(PlanDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: "error al obtener Plan",
            error
        })
    }
};
planCtrl.UpdatePlan = async (req, res) => {
    const id_Plan = req.params.id_Plan;
    const body = req.body;
    try {
        const planDB = await planModel.findOneAndUpdate(
            id_Plan,
            body, { new: true });
        res.json({ mensaje: 'actualizacion exitosa' });
    } catch (error) {
        return res.status(400).json({
            mensaje: id_Plan,
            error
        })
    }
};

planCtrl.DeletePlan = async (req, res) => {
    try {
        await planModel.findOneAndDelete(req.params.id_Plan)
        res.json({ m: 'deleted' })
    } catch (error) {
        res.json(error); //aquí se maneja el error
    }
}
module.exports = planCtrl
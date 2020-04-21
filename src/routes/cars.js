const { Router } = require('express')
const router = Router();
const { CreateCar, DeleteCar, GetCar, GetCars, UpdateCar } = require('../controllers/CarController')

//general
router.route('/')
    .get(GetCars)
    .post(CreateCar)
//especificando id
router.route('/:placa')
    .post(CreateCar)
    .delete(DeleteCar)
    .get(GetCar)
module.exports = router

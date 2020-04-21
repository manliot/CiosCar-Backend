const { Router } = require('express')
const router = Router();
const { UpdateReserva, GetReserva, DeleteReserva, CreateReserva, GetReservas } = require('../controllers/ReservasController')

//general
router.route('/')
    .get(GetReservas)
    .post(CreateReserva)
//especificando id
router.route('/:id_reserva')
    .put(UpdateReserva)
    .delete(DeleteReserva)
    .get(GetReserva)
module.exports = router

const { Router } = require('express')
const router = Router();
const { GetUsers, CreateUser, DeleteUser, GetUser, UpdateUser, } = require('../controllers/users.controller')

//general
router.route('/')
    .get(GetUsers)
    .post(CreateUser)
//especificando id
router.route('/:usuario')
    .post(CreateUser)
    .put(UpdateUser)
    .patch(UpdateUser)
    .delete(DeleteUser)
    .get(GetUser)
module.exports = router

//.post guardar nuevo dato
//.put  actualizar un dato
//.delete pues obvio
//.patch actualiazar un elemto de un dato
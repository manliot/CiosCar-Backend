const { Router } = require('express')
const router = Router();
const { CreatePlan, DeletePlan, GetPlan, GetPlanes, UpdatePlan } = require('../controllers/PlanController')

//general
router.route('/')
    .get(GetPlanes)
    .post(CreatePlan)
//especificando id
router.route('/:id_Plan')
    .post(CreatePlan)
    .put(UpdatePlan)
    .delete(DeletePlan)
    .get(GetPlan)
module.exports = router

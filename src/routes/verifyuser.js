const { Router } = require('express')
const router = Router();
const { VerifyUser } = require('../controllers/verifyuser.controller')

router.route('/:user')
    .get(VerifyUser)    
module.exports = router

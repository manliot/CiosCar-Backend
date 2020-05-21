const { Router } = require('express')
const router = Router();
const { VerifyUser } = require('../controllers/verifyuser.controller')

router.route('/')
    .post(VerifyUser)    
module.exports = router

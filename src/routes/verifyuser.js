const { Router } = require('express')
const router = Router();
const { VerifyUser } = require('../controllers/verifyuser.controller')

router.route('/')
    .get(VerifyUser)    
module.exports = router

const router = require('express').Router();
const userController = require('../controller/userController')

router.get('/users' , userController.get)

router.post('/register' , userController.register)

router.post('/login' , userController.login)

module.exports = router;
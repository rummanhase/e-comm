const router = require('express').Router();
const userController = require('../controller/userController')

router.get('/users' , userController.get)

router.post('/user' , userController.post)

module.exports = router;
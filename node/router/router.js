const router = require('express').Router;
const userController = require('../controller/userController')

router.get('/users' , userController.get)

module.exports = router;
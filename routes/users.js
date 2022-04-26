const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const catchAsync = require('../utilities/catchAsync');
const middleware = require('../middleware/middleware')



router.route('/login')
    .get(userController.login)



router.route('/')
    .get(middleware.isLoggedIn, userController.profile)
    .post(catchAsync(userController.createUser))
module.exports = router;
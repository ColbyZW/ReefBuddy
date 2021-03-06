const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const catchAsync = require('../utilities/catchAsync');
const middleware = require('../middleware/middleware');
const { route } = require('./reefs');



router.route('/login')
    .post(catchAsync(userController.login))


router.route('/logout')
    .get(catchAsync(userController.logout))


router.route('/')
    .get(middleware.isLoggedIn, userController.profile)
    .post(catchAsync(userController.createUser))
module.exports = router;
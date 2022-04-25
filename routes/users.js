const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const catchAsync = require('../utilities/catchAsync');

router.route('/')
    .get(userController.profile)
    .post(catchAsync(userController.createUser))

module.exports = router;
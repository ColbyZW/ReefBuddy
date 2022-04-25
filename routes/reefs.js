const express = require('express');
const router = express.Router();
const reefController = require('../controllers/reefController');
const catchAsync = require('../utilities/catchAsync');

router.route('/')
    .get(reefController.index)
    .post(catchAsync(reefController.addPost))

router.route('/:page')
    .get(catchAsync(reefController.findByPage));

module.exports = router;
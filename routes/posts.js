const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const catchAsync = require('../utilities/catchAsync');


router.route('/')
    .post(catchAsync(postController.createPost))

router.route('/:id')
    .get(catchAsync(postController.getPostInfo))
    .post(catchAsync(postController.createReply))
    .delete(catchAsync(postController.removePost))

    
module.exports = router;
const express = require('express');
const router = express.Router();
const { getUser, removeUser, findUser, fileUpload } = require('../controllers/user');




router.route('/')
     .post(getUser);

router.route('/remove')
     .post(removeUser)

router.route('/find')
     .post(findUser);

router.route('/upload')
     .post(fileUpload)









module.exports = router;
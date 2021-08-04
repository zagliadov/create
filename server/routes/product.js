const express = require('express');
const { getOneProduct, removeProduct } = require('../controllers/product');

const router = express.Router();

router.route('/:id')
    .get(getOneProduct)

router.route('/remove/:id')
    .delete(removeProduct)


module.exports = router;
const express = require('express');
const { productCreate, addPicture, removePicture, updateElement, getAllProducts } = require('../controllers/products');
const router = express.Router();


router.route('/')
    .get(getAllProducts)

router.route('/createproducts')
    .post(productCreate)

router.route('/addpicture')
    .put(addPicture)

router.route('/removepicture')
    .delete(removePicture)

router.route('/updateelement')
    .put(updateElement)




module.exports = router;
const Products = require('../models/CardProduct');

exports.getOneProduct = async (req, res, next) => {
    
    let id = req.params.id;
    try {
        await Products.find({_id : id}).then(product => {
            return res.status(200).json({product})
        })
    } catch (error) {
        console.log(error.message)
    }
}

exports.removeProduct = async(req, res, next) => {
    let id = req.params.id;
    try {
        await Products.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log(error.message)
    }

}
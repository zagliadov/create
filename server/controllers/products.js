const Products = require('../models/CardProduct');

exports.productCreate = async (req, res, next) => {

    const {
        product,
        brand,
        country,
        pettype,
        breedsize,
        age,
        feedtype,
        weight,
        content,
        components,
        energyvalue,
        supplements,
    } = req.body;
    try {
        const products = await Products.create({
            product,
            brand,
            country,
            pettype,
            breedsize,
            age,
            feedtype,
            weight,
            content,
            components,
            energyvalue,
            supplements,
            picture: []
        });
        console.log(products)
        res.status(201).json(products)
        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
}
exports.addPicture = async (req, res, next) => {

    let file = req.body.file;
    let id = req.body.id

    let product = await Products.findOne({ _id: id })
    await product.updateOne({ $push: { 'picture': file } })
    let updateProduct = await Products.findOne({ _id: id })
    res.status(200).json({ updateProduct })
    next()
}

exports.removePicture = async (req, res, next) => {
    let id = req.body.id;
    let pic = req.body.pic
    let product = await Products.findOne({ _id: id })
    product.picture = product.picture.filter(pict => {
        return pict !== pic
    })
    await product.updateOne({ picture: product.picture })
    let updateProduct = await Products.findOne({ _id: id })
    res.status(200).json({ updateProduct })
}

exports.updateElement = async (req, res, next) => {
    let id = req.body.data.id,
        text = req.body.data.text,
        keys = req.body.data.keys;
    let product = await Products.findOne({ _id: id })
    switch (keys) {
        case 'product':
            await product.updateOne({ 'product': text })
            break;
        case 'age':
            await product.updateOne({ 'age': text })
            break;
        case 'brand':
            await product.updateOne({ 'brand': text })
            break;
        case 'breedsize':
            await product.updateOne({ 'breedsize': text })
            break;
        case 'components':
            await product.updateOne({ 'components': text })
            break;
        case 'content':
            await product.updateOne({ 'content': text })
            break;
        case 'country':
            await product.updateOne({ 'country': text })
            break;
        case 'energyvalue':
            await product.updateOne({ 'energyvalue': text })
            break;
        case 'feedtype':
            await product.updateOne({ 'feedtype': text })
            break;
        case 'pettype':
            await product.updateOne({ 'pettype': text })
            break;
        case 'product':
            await product.updateOne({ 'product': text })
            break;
        case 'supplements':
            await product.updateOne({ 'supplements': text })
            break;
        case 'weight':
            await product.updateOne({ 'weight': text })
            break;

        default: console.log('error')
    }

    let updateProduct = await Products.findOne({ _id: id })
    res.status(200).json({ updateProduct })

}

exports.getAllProducts = async (req, res, next) => {
    try {
        await Products.find({}).then(product => {
            return res.status(200).json({product})
        })
    } catch (error) {
        console.log(error.message)
    }
}

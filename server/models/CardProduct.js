const mongoose = require('mongoose');



const CardProductSchema = new mongoose.Schema({
    product: {
        type: String,
        required: [true, 'Please provide a product'],
    },
    brand: {
        type: String,
        required: [true, 'Please provide a brand'],
    },
    country: {
        type: String,
        required: [true, 'Please provide a country'],
    },
    pettype: {
        type: String,
        required: [true, 'Please provide a pettype'],
    },
    breedsize: {
        type: String,
        required: [true, 'Please provide a breedsize'],
    },
    age: {
        type: String,
        required: [true, 'Please provide a age'],
    },
    feedtype: {
        type: String,
        required: [true, 'Please provide a feedtype'],
    },
    weight: {
        type: String,
        required: [true, 'Please provide a weight'],
    },
    content: {
        type: String,
        required: [true, 'Please provide a content'],
    },
    components: {
        type: String,
        required: [true, 'Please provide a components'],
    },
    energyvalue: {
        type: String,
        required: [true, 'Please provide a energyvalue'],
    },
    supplements: {
        type: String,
        required: [true, 'Please provide a supplements'],
    },
    picture: []

})

const Product = mongoose.model("Product", CardProductSchema);
module.exports = Product;
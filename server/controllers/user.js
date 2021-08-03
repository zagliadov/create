const User = require('../models/User');


exports.getUser = async (req, res, next) => {

    let id = req.body.id
    try {
        const user = await User.findOne({ _id: id })
        return res.status(200).json({ user })
    } catch (error) {
        console.log(error.message)
    }
};

exports.removeUser = async (req, res, next) => {
    let id = req.body.id
    try {
        const user = await User.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log(error.message)
    }
}

exports.findUser = async (req, res, next) => {
    let email = req.body.email;
    try {
        const user = await User.findOne({ email })
        return res.status(200).json({ user })
    } catch (error) {
        console.log(error.message)
    }
}

exports.fileUpload = async (req, res, next) => {
    let email = req.body.photo.email
    let photo = req.body.photo.photo
    try {
        let user = await User.findOne({ email })
     
        await user.updateOne({ profilePhoto: photo })
        // await user.save() 3 часа жизни
        let updateUser = await User.findOne({email})
            res.status(200).json({ updateUser })
    


    } catch (error) {
        console.log(error.message)
    }

}
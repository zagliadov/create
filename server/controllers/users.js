const User = require('../models/User');


exports.getUsers = async (req, res, next) => {
    
    try {
        await User.find({roles: "USER"}).then(users => {
            return res.status(200).json({users})
        })
    } catch (error) {
        console.log(error.message)
    }
};

const User = require('../models/User');


exports.registration = async (req, res, next) => {
    const { firstname, lastname, email, password } = req.body;
    let d = new Date();
    let result = `${twoDigits(d.getDate())}/${twoDigits(d.getMonth())}/${twoDigits(d.getFullYear())}`
    try {
        const user = await User.create({
            roles: "USER",
            firstname,
            lastname,
            email,
            password,
            profilePhoto: '',
            registrationDate: result,
        });
        console.log(user)
        sendToken(user, 201, res);
        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })

    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            success: false,
            error: "Please provide email and password",
        });
    }
    try {
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            res.status(404).json({
                success: false,
                error: "Invalid credentials",
            });
        }
        const isMatch = await user.matchPasswords(password);
        if (!isMatch) {
            res.status(404).json({
                success: false,
                error: 'Invalid credentials',
            })
        }
        sendToken(user, 200, res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }

};

exports.forgotpassword = (req, res, next) => {
    res.send('Forgot Password Route');
};

exports.resetpassword = (req, res, next) => {
    res.send('Reset Password Route');
};

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken()
    res.status(statusCode).json({
        success: true,
        token
    })
}

function twoDigits(num) {
    if (+num < 10) {
    return ('0' + num).slice(-2);
    } else {
    return num
    }
    }
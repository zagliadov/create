const mongoose = require('mongoose');
const crypto = require('crypto');
const { createHmac } = require('crypto');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please provide a firstname'],
    },
    lastname: {
        type: String,
        required: [true, 'Please provide a lastname'],
    },
    email: {
        type: String,
        required: [true, 'Please provide a email'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
    },
    roles: {
        type: String,
        ref: 'Role'
    },
    profilePhoto: {
        type: String
    },
    registrationDate: {
        type: String
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = createHmac('sha256', this.password)
        .update('I love cupcakes')
        .digest('hex');
    next();
});

UserSchema.methods.matchPasswords = async function (password) {
    password = createHmac('sha256', password)
        .update('I love cupcakes')
        .digest('hex');
    return await password === this.password
}

UserSchema.methods.getSignedToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
}

const User = mongoose.model("User", UserSchema);
module.exports = User;





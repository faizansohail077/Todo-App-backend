const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
})
exports.authSchema = mongoose.model('auth', Schema)
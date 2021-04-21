const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    time: {
        type: Date,
        default: Date.now()
    },
    title: {
        type: String,
        required: ['true', 'please add title']
    },
    todos: [{
        type: mongoose.Types.ObjectId,
        ref: "todo"
    }],
    user: {
        type: mongoose.Types.ObjectId,
        ref: "auth"
    }
})

exports.boardSchema = mongoose.model('board', Schema)

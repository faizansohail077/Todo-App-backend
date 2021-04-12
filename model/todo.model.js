const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    importance: {
        type: String,
        enum: ['low', 'medium', 'high'],
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true
    },
    date: {
        type: String,
        default: Date
    }
})

exports.Schema = mongoose.model('todo', todoSchema)

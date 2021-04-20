const mongoose = require('mongoose')
var enu = {
    values: ['low', 'medium', 'high']
    , message: 'importance must be low,high medium.'
}
const Schema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "auth"
    },
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
        enum: { values: ['low', 'medium', 'high'], message: 'Status is required.' },
        required: [true, 'Category required'],
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: new Date()
    }
})

exports.todoSchema = mongoose.model('todo', Schema)

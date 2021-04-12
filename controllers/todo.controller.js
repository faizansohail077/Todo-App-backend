const { Schema } = require('../model')

exports.getTodo = async (req, res) => {
    try {
        const getTodo = await Schema.find({})
        res.send(getTodo)
    } catch (e) {
        res.status(400).send({ failure: true, message: e.message })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        const getTodo = await Schema.findById({ _id: req.params.id })
        res.send(getTodo)
    } catch (e) {
        res.send({ failure: true, message: e.message })
    }
}

exports.addTodo = (req, res) => {
    const { title, description, importance, isCompleted } = req.body
    if (!title || !description || !importance || !isCompleted) {
        return res.status(411).send({ failure: true, message: "fields are required" })
    }
    else {
        try {
            const postTodo = new Schema({ title, description, importance, isCompleted })
            postTodo.save().then((data) => {
                res.send(data)
            })
        } catch (e) {
            res.status(406).send({ failure: true, message: e.message })
        }
    }
}

exports.updateById = async (req, res) => {
    const { title, description, importance, isCompleted } = req.body
    if (!title || !description || !importance || !isCompleted) {
        return res.status(411).send({ failure: true, message: "fields are required" })
    }
    try {
        const updateTodo = await Schema.findByIdAndUpdate({ _id: req.params.id }, {
            title, description, importance, isCompleted
        }, { new: true })
        res.send(updateTodo)
    }
    catch (e) {
        res.status(406).send({ failure: true, message: e.message })
    }
}

exports.deleteById = async (req, res) => {
    try {
        const deleteTodo = await Schema.findByIdAndDelete({ _id: req.params.id })
        res.send(deleteTodo)
    } catch (e) {
        res.status(400).send({ failure: true, message: e.message })
    }
}
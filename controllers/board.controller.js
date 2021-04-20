const { boardSchema } = require('../model')

exports.addBoard = async (req, res) => {
    const { title } = req.body
    let userId = req.userId
    try {
        const board = new boardSchema({ title, user: userId }).populate('user')
        await board.save()
        res.send({ success: true, board })
    } catch (e) {
        res.status(400).send({ success: false, error: e.message })
    }
}

exports.getBoard = async (req, res) => {
    try {
        const getBoard = await boardSchema.find({ user: req.userId }).populate(["todos", "user"])
        res.send(getBoard)
    } catch (e) {
        res.status(400).send({ failure: true, message: e.message })
    }
}

exports.getBoardById = async (req, res) => {
    const id = req.params.id
    const getBoard = await boardSchema.findById({ _id: id }).populate(["todos", "user"])
    res.send(getBoard)
}

exports.deleteBoardById = async (req, res) => {
    const id = req.params.id
    const getBoard = await boardSchema.findByIdAndRemove({ _id: id })
    res.send(getBoard)
}
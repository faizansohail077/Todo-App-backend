const express = require('express')

const { controller } = require('../controllers')

const app = express()
const router = express.Router()

router.get('/', controller.getTodo)
router.get('/:id', controller.getTodoById)
router.post('/', controller.addTodo)
router.put('/:id', controller.updateById)
router.delete('/:id', controller.deleteById)

module.exports = app.use('/todo', router)
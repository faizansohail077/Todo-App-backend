const express = require('express')

const { controller } = require('../controllers')
const { isAuth } = require('../middleware/auth.middleware')

const app = express()
const router = express.Router()

router.get('/', isAuth, controller.getTodo)
router.get('/:id', isAuth, controller.getTodoById)
router.post('/', isAuth, controller.addTodo)
router.put('/:id', isAuth, controller.updateById)
router.delete('/:id/board/:boardId', isAuth, controller.deleteById)

exports.todoRouter = app.use('/todo', router)


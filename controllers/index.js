const { getTodo, getTodoById, addTodo, deleteById, updateById } = require('./todo.controller')
const { login, Signup } = require('./auth.controller')
const { addBoard, getBoard, getBoardById } = require('./board.controller')


exports.controller = { getTodo, getTodoById, addTodo, deleteById, updateById, login, Signup, addBoard, getBoard, getBoardById }
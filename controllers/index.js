const { getTodo, getTodoById, addTodo, deleteById, updateById, getTodos } = require('./todo.controller')
const { login, Signup } = require('./auth.controller')
const { addBoard, getBoard, getBoardById, deleteBoardById } = require('./board.controller')


exports.controller = { getTodo, getTodos, getTodoById, addTodo, deleteById, updateById, login, Signup, addBoard, getBoard, getBoardById, deleteBoardById }
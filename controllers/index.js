const { getTodo, getTodoById, addTodo, deleteById, updateById } = require('./todo.controller')
const { login, Signup } = require('./auth.controller')

exports.controller = { getTodo, getTodoById, addTodo, deleteById, updateById, login, Signup }
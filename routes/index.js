const { todoRouter } = require('./todo.route')
const { authRoute } = require('./auth.route')
const { boardRoute } = require('./board.route')

exports.Routes = { todoRouter, authRoute, boardRoute }
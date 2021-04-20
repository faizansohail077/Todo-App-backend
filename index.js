const express = require('express')
const morgan = require('morgan')

const { Routes } = require('./routes')
require('dotenv/config')
require('./db')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use('/api', [Routes.todoRouter, Routes.authRoute, Routes.boardRoute])

app.listen(process.env.PORT || 4000, () => {
    console.log('server working')
})
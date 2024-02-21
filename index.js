const express = require('express')
const morgan = require('morgan')

const { Routes } = require('./routes')
const { authSchema } = require('./model')
require('dotenv/config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('./db')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
// app.use('/api', [Routes.todoRouter, Routes.authRoute, Routes.boardRoute])
app.post('/', async (req, res) => {

    const { username, password, email } = req.body
    if (!username && !password && !email) {
        res.status(400).send({ success: false, message: "Required all fields" })
    }
    try {
        let user = await authSchema.findOne({ email })
        if (user) {
            res.status(400).send({ success: false, message: 'user already exist' })
        }
        const hashPas = await bcrypt.hash(password, 10)
        user = new authSchema({
            username,
            email,
            password: hashPas,
        })
        await user.save()
        payload = {
            user: {
                _id: user._id
            }
        }
        const token = jwt.sign(payload, 'secret', { expiresIn: '1hr' })
        res.status(200).send(token)
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

app.listen(process.env.PORT || 4000, () => {
    console.log('server working')
})
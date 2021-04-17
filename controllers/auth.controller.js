const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { authSchema } = require('../model/auth.model')

exports.Signup = async (req, res) => {
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
}
exports.login = async (req, res) => {
    const { password, email } = req.body
    if (!email || !password) {
        res.status(400).send({ success: false, message: 'please provide valid email or password' })
    }
    try {
        let user = await authSchema.findOne({ email })
        if (!user) {
            res.status(400).send({ success: false, message: "Invalid username or password" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            res.status(400).send({ success: false, message: "invalid password" })
        }
        payload = {
            user: {
                _id: user._id
            }
        }
        const token = jwt.sign(payload, 'secret', { expiresIn: '1hr' })
        res.status(200).send({ token: token })
    } catch (e) {
        res.status(500).send({ success: false, error: e.message })
    }
}

const mongoose = require('mongoose')
const { db } = require('../config/db')

mongoose.connect("mongodb+srv://jahanzaibkhan:4DT9yLK5fhSh4vOv@cluster0.mathl1t.mongodb.net/")
    .then(() => {
        console.log('database connected')
    })
    .catch(err => {
        console.log(err.message)
    })
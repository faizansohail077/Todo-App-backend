const mongoose = require('mongoose')
const { db } = require('../config/db')

mongoose.connect("mongodb+srv://jahanzaibkhan:Tcv08XllGCboA9ZQ@cluster0.jssv9px.mongodb.net/")
    .then(() => {
        console.log('database connected')
    })
    .catch(err => {
        console.log(err.message, 'db error')
    })
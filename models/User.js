const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    login: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    }
})

module.exports = mongoose.model('Unit', userSchema)
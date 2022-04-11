const mongoose = require('mongoose')
const Schema = mongoose.Schema

const unitSchema = new Schema({
    title: {
        type: String,
    }
})

module.exports = mongoose.model('Unit', unitSchema)

// const units = [
//     {title: 'мл'},
//     {title: 'шт.'},
//     {title: 'немного'},
// ]
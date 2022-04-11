const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cocktailSchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    image: {
        type: String,
    },
    ingredients: {
        type: [{
            ingredient: {
                type: mongoose.Types.ObjectId,
                ref: 'Ingredient'
            },
            quantity: Number,
            unit: {
                type: mongoose.Types.ObjectId,
                ref: 'Unit'
            }
        }],
    },
    recipe: {
        type: String,
    }
})

module.exports = mongoose.model('Cocktail', cocktailSchema)
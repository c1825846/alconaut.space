const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ingredientCategorySchema = new Schema({
    title: {
        type: String,
    }
})

module.exports = mongoose.model('IngredientCategory', ingredientCategorySchema)

// const categories = [
//     {title: 'Крепкие алкогольные напитки'},
//     {title: 'Ликеры'},
//     {title: 'Слабоалкогольные напитки'},
//     {title: 'Безалкогольные напитки'},
//     {title: 'Прочее'},
// ]
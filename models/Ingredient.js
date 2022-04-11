const mongoose = require('mongoose')
const ingredientCategorySchema = require('./IngredientCategory')
const Schema = mongoose.Schema

const ingredientSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ingredientCategory'
    },
    strength: {
        type: Number,
    }
})

module.exports = mongoose.model('Ingredient', ingredientSchema)

// const ingredients = [
//     {title: 'Апельсин', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Апельсиновая цветочная вода', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Ванильный экстракт', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Взбитые сливки', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Вустерский соус', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Гвоздика', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Клубничное пюре', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Клюква', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Лайм', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Лимон', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Листья мяты', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Мед', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Мускатный орех', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Перец чили', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Сахар', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Соль', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Табаско', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
//     {title: 'Яйцо', category: {'$ref': 'ingredientCategories', '$id': otherIngredientsId}},
// ]
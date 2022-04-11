const {Router} = require('express')
const router = new Router()
const Ingredient = require('../models/Ingredient')
const Unit = require('../models/Unit')
const Cocktail = require('../models/Cocktail')
const mongoose = require("mongoose")

router.get('/ingredients', (req, res) => {
    Ingredient.find({}, (err, ingredients) => {
        if (err) throw err
        res.json(ingredients)
    })
})

router.get('/ingredients/:id', (req, res) => {
    Ingredient.findOne({_id: req.params.id}, (err, ingredient) => {
        if (err) throw err
        res.json(ingredient)
    })
})

router.get('/cocktails', (req, res) => {
    Cocktail.find({}, (err, cocktails) => {
        if (err) throw err
        res.json(cocktails)
    })
})

router.get('/cocktails/:id', (req, res) => {
    Cocktail.findOne({_id: req.params.id}, (err, cocktail) => {
        if (err) throw err
        res.json(cocktail)
    })
})

router.post('/find', (req, res) => {
    if (!req.body.ingredients.length) {
        return res.json([])
    }
    const ingredients = req.body.ingredients.map(ingredient => {
        return {
            ingredients: {
                $elemMatch: {
                    ingredient: ingredient
                }
            }
        }
    })
    Cocktail.find({
        $and: ingredients
    }, (err, cocktails) => {
        if (err) throw err
        res.json(cocktails)
    })
})

// router.post('/cocktails', async (req, res) => {
//     const {title, ingredients, recipe} = req.body
//     let params = {
//         title,
//         ingredients: JSON.parse(ingredients),
//         recipe
//     }
//     if (req.files) {
//         const image = req.files.image
//         const filePath = 'uploads\\' + image.name
//         await image.mv(filePath)
//         params.image = '/uploads/' + image.name
//     } else {
//         params.image = '/uploads/default.png'
//     }
//     const cocktail = new Cocktail(params)
//     await cocktail.save()
//     res.json(cocktail)
// })

router.get('/units', async (req, res) => {
    Unit.find({}, (err, units) => {
        if (err) throw err
        res.json(units)
    })
})

module.exports = router
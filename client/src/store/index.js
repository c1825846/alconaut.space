import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ingredients: [],
        units: [],
        cocktails: [],
    },
    getters: {
        allIngredients(state) {
            return state.ingredients
        },
        units(state) {
            return state.units
        },
        ingredient: (state) => (id) => {
            return state.ingredients.find(ingredient  => ingredient._id === id)
        },
        unit: (state) => (id) => {
            return state.units.find(unit  => unit._id === id)
        },
    },
    mutations: {
        setIngredients(state, ingredients) {
            state.ingredients = ingredients
        },
        setUnits(state, units) {
            state.units = units
        }
    },
    actions: {
        async fetchIngredients(context) {
            return fetch('/api/ingredients')
                .then(response => response.json())
                .then(data => {
                    context.commit('setIngredients', data)
                })
                .catch(err => null)
        },
        async fetchUnits(context) {
            return fetch('/api/units')
                .then(response => response.json())
                .then(data => {
                    context.commit('setUnits', data)
                })
                .catch(err => null)
        }
    },
})

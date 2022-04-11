import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cocktail/:id',
    name: 'Cocktail',
    component: () => import('@/views/Cocktail')
  },
  {
    path: '/add',
    name: 'AddCocktail',
    component: () => import('@/views/AddCocktail')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

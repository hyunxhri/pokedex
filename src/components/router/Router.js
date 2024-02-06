import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../pokemon/pages/LoginPage.vue'

const routes = [
    { path: '/', component: LoginPage },
    { path: '/explore', component: () => import('../pokemon/pages/SearchPokemon.vue') },
    { path: '/register', component: () => import('../pokemon/pages/RegisterPage.vue') },
    { path: '/profile', component: () => import('../pokemon/pages/UserProfile.vue') },
    { path: '/pokedex', component: () => import('../pokemon/pages/UserPokedex.vue') }, 
    { path: '/contact', component: () => import('../pokemon/pages/ContactPage.vue') }, 

]

const router = createRouter({ 
    history: createWebHashHistory(),
    routes, 
})

export default router
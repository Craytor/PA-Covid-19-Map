import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CountyOverview from '../views/CountyOverview.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/county/:id',
        name: 'County',
        component: CountyOverview
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
